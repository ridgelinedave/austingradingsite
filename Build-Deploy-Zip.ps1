# ============================================================
#  Build-Deploy-Zip.ps1
#  Makes a dated, Netlify-ready zip of the "aglm-site" folder.
#  Don't run this directly - just double-click "MAKE WEBSITE ZIP.cmd"
#  (it handles Windows permissions for you).
# ============================================================
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$root   = $PSScriptRoot
$src    = Join-Path $root 'site'
$outDir = Join-Path $root 'website-deploys'

if (-not (Test-Path $src)) {
  Write-Host "ERROR: can't find the 'site' folder next to this script." -ForegroundColor Red
  return
}
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# date-stamped filename, e.g. AGLM-website_2026-06-08_1430.zip  (sorts oldest -> newest)
$stamp = Get-Date -Format 'yyyy-MM-dd_HHmm'
$dest  = Join-Path $outDir ("AGLM-website_" + $stamp + ".zip")

# Deploy bundle = SITE ONLY (web-developer.md 3.9). Two layers of exclusion:
#  - $excludeNames : dev/helper FILES that live in the site folder but must not ship.
#  - $excludeDirs  : tooling/dev DIRECTORIES anywhere in the tree (audited by path, not just name).
$excludeNames = @('README-DEPLOY.md','serve.ps1')
$excludeDirs  = @('.impeccable','node_modules','tests','playwright-report','.git','.cache','.vscode')

$bs = [char]92   # backslash
$fs = [char]47   # forward slash  (zip paths MUST use this or Netlify breaks)

# Build the relative path for each file, then drop anything whose name is excluded
# or whose path passes through an excluded directory. This catches .impeccable/hook.cache.json
# and similar tooling caches that a name-only filter would miss.
$files = Get-ChildItem -Path $src -Recurse -File | Where-Object {
  $rel = $_.FullName.Substring($src.Length + 1)
  $parts = $rel.Split([char]92 + [char]47)   # split on either slash
  ($excludeNames -notcontains $_.Name) -and
  -not ($parts | Where-Object { $excludeDirs -contains $_ })
}

$zip = [System.IO.Compression.ZipFile]::Open($dest,'Create')
try {
  foreach ($f in $files) {
    $rel = $f.FullName.Substring($src.Length + 1).Replace($bs,$fs)
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $f.FullName, $rel)
  }
} finally { $zip.Dispose() }

# safety check: index.html must sit at the TOP of the zip
$z = [System.IO.Compression.ZipFile]::OpenRead($dest)
$hasIndex = ($z.Entries | Where-Object { $_.FullName -eq 'index.html' }).Count
$count = $z.Entries.Count
$z.Dispose()

Write-Host ""
if ($hasIndex -eq 1) {
  Write-Host "SUCCESS - deploy zip created:" -ForegroundColor Green
  Write-Host "   $dest"
  Write-Host "   ($count files, index.html at root - good to deploy)"
  Write-Host ""
  Write-Host "NEXT: Netlify -> your site -> Deploys tab -> drag this zip onto the drop area."
  Start-Process explorer.exe "/select,`"$dest`""   # opens the folder with the new zip highlighted
} else {
  Write-Host "WARNING: index.html is not at the zip root - DO NOT deploy this one." -ForegroundColor Red
  Write-Host "Tell Dave/Claude something is off with the aglm-site folder." -ForegroundColor Red
}
