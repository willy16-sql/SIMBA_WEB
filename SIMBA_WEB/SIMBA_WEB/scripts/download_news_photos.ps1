# Script to download authentic photographic documentation of volcanic eruptions from Wikimedia Commons API
$files = @{
    "lewotobi.jpg" = "File:Mount_Lewotobi_Volcano,_Flores,_Indonesia_-_November_13th,_2024_(54138310143).jpg"
    "marapi.jpg"   = "File:Erupsi_Gunung_Marapi_RRI-Novelhya_Wirda.jpg"
    "merapi.jpg"   = "File:Erupsi_Gunung_Merapi.jpg"
    "semeru.jpg"   = "File:2021_Semeru_Eruption_from_Oro_Oro_Ombo.jpg"
    "ibu.jpg"      = "File:Gunung_Ibu.jpg"
    "ruang.jpg"    = "File:Gunung_Ruang.jpg"
}

$outputDir = "$PSScriptRoot\..\assets\images\news"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "SIMBA-VolcanoPortal/1.0 (Educational Public Emergency Portal; contact@simba.id)")

foreach ($target in $files.Keys) {
    $wikiTitle = $files[$target]
    $apiUrl = "https://commons.wikimedia.org/w/api.php?action=query&titles=$wikiTitle&prop=imageinfo&iiprop=url&format=json"
    Write-Host "Fetching URL for $wikiTitle..."
    try {
        $jsonStr = $wc.DownloadString($apiUrl)
        $data = $jsonStr | ConvertFrom-Json
        $pages = $data.query.pages
        $pageId = ($pages.PSObject.Properties | Select-Object -First 1).Name
        $imgUrl = $pages.$pageId.imageinfo[0].url
        
        if ($imgUrl) {
            $destFile = Join-Path $outputDir $target
            Write-Host "Downloading $target from $imgUrl..."
            $wc.DownloadFile($imgUrl, $destFile)
            $size = (Get-Item $destFile).Length
            Write-Host "Saved $destFile ($([math]::Round($size/1024, 1)) KB)"
        } else {
            Write-Warning "Could not find imageinfo url for $wikiTitle"
        }
    } catch {
        Write-Error "Failed for $target: $_"
    }
}
