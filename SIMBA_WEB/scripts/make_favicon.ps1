Add-Type -AssemblyName System.Drawing

$bmp = New-Object System.Drawing.Bitmap 64, 64
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Background dark rounded box
$brushBg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 11, 12, 16))
$g.FillEllipse($brushBg, 2, 2, 60, 60)

# Volcano body
$p1 = New-Object System.Drawing.Point 32, 16
$p2 = New-Object System.Drawing.Point 52, 50
$p3 = New-Object System.Drawing.Point 12, 50
$poly = [System.Drawing.Point[]]($p1, $p2, $p3)

$brushVolcano = New-Object System.Drawing.Drawing2D.LinearGradientBrush (
    (New-Object System.Drawing.Point 32, 16),
    (New-Object System.Drawing.Point 32, 50),
    [System.Drawing.Color]::FromArgb(255, 255, 87, 34),
    [System.Drawing.Color]::FromArgb(255, 220, 38, 38)
)
$g.FillPolygon($brushVolcano, $poly)

# Lava plume / crater glow
$brushGlow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 215, 64))
$g.FillEllipse($brushGlow, 26, 12, 12, 7)

# Magma spark
$brushSpark = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$g.FillEllipse($brushSpark, 30, 9, 4, 4)

$pngPath = 'C:\xampp\htdocs\SIMBA_WEB\assets\images\favicon.png'
$icoPath = 'C:\xampp\htdocs\SIMBA_WEB\favicon.ico'
$icoAssetsPath = 'C:\xampp\htdocs\SIMBA_WEB\assets\images\favicon.ico'

$bmp.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)

$icon = [System.Drawing.Icon]::FromHandle($bmp.GetHicon())
$fs = [System.IO.File]::OpenWrite($icoPath)
$icon.Save($fs)
$fs.Close()

Copy-Item $icoPath $icoAssetsPath -Force
Write-Output "FAVICON_GENERATED_SUCCESS"
