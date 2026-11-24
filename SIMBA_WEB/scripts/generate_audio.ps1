# Generate clean binary 16-bit PCM WAV audio for volcanic explosion
$sampleRate = 44100
$duration = 3.5
$totalSamples = [int]($sampleRate * $duration)

$ms = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter($ms)

# RIFF Header
$bw.Write([System.Text.Encoding]::ASCII.GetBytes("RIFF"))
$bw.Write([int](36 + $totalSamples * 2))
$bw.Write([System.Text.Encoding]::ASCII.GetBytes("WAVE"))

# fmt chunk
$bw.Write([System.Text.Encoding]::ASCII.GetBytes("fmt "))
$bw.Write([int]16)           # Subchunk1Size (16 for PCM)
$bw.Write([int16]1)          # AudioFormat (1 = PCM)
$bw.Write([int16]1)          # NumChannels (1 = Mono)
$bw.Write([int]$sampleRate)  # SampleRate
$bw.Write([int]($sampleRate * 2)) # ByteRate
$bw.Write([int16]2)          # BlockAlign
$bw.Write([int16]16)         # BitsPerSample

# data chunk
$bw.Write([System.Text.Encoding]::ASCII.GetBytes("data"))
$bw.Write([int]($totalSamples * 2))

# Audio Synthesis: Sub-Bass Boom (65Hz -> 25Hz) + Brownian Lowpass Rumble
$rand = New-Object System.Random
$lastBrown = 0.0

for ($i = 0; $i -lt $totalSamples; $i++) {
    $t = $i / $sampleRate

    # Attack & Decay Envelope
    $envelope = 0.0
    if ($t -lt 0.05) {
        $envelope = $t / 0.05
    } else {
        $envelope = [Math]::Exp(-($t - 0.05) * 1.05)
    }

    # Low frequency boom
    $freq = 65.0 * [Math]::Exp(-$t * 0.9) + 26.0
    $subBass = [Math]::Sin(2 * [Math]::PI * $freq * $t)

    # Brownian volcanic rumble noise
    $white = ($rand.NextDouble() * 2.0 - 1.0)
    $lastBrown = ($lastBrown + (0.02 * $white)) / 1.02
    $rumbleNoise = $lastBrown * 3.6

    # Combine
    $sampleFloat = ($subBass * 0.45 + $rumbleNoise * 0.55) * $envelope

    if ($sampleFloat -gt 1.0) { $sampleFloat = 1.0 }
    if ($sampleFloat -lt -1.0) { $sampleFloat = -1.0 }

    $bw.Write([int16]($sampleFloat * 32767))
}

$bw.Flush()
$bytes = $ms.ToArray()
$bw.Close()
$ms.Close()

$destDir = "$PSScriptRoot\..\assets\audio"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

$wavPath = Join-Path $destDir "eruption.wav"
$mp3Path = Join-Path $destDir "eruption.mp3"

[System.IO.File]::WriteAllBytes($wavPath, $bytes)
[System.IO.File]::WriteAllBytes($mp3Path, $bytes)

Write-Host "Success: Generated $wavPath and $mp3Path ($([math]::Round($bytes.Length/1024, 1)) KB)"
