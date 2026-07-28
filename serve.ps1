$root = "c:\Users\mfcam\Desktop\proyect ivantxu"
$listener = [System.Net.HttpListener]::new()
$prefixes = @(
    'http://localhost:8000/',
    'http://127.0.0.1:8000/'
)
foreach ($prefix in $prefixes) {
    $listener.Prefixes.Add($prefix)
}
$listener.Start()
Write-Host "Servidor listo en http://localhost:8000/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $relativePath = $context.Request.Url.AbsolutePath.TrimStart('/')

    if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = 'index.html'
    }

    $fullPath = Join-Path $root $relativePath

    if ([System.IO.Path]::GetExtension($fullPath) -eq '') {
        $candidate = Join-Path $fullPath 'index.html'
        if (Test-Path $candidate -PathType Leaf) {
            $fullPath = $candidate
        }
    }

    if (Test-Path $fullPath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
        $contentType = switch ($ext) {
            '.html' { 'text/html; charset=utf-8' }
            '.css'  { 'text/css; charset=utf-8' }
            '.js'   { 'application/javascript; charset=utf-8' }
            '.png'  { 'image/png' }
            '.jpg'  { 'image/jpeg' }
            '.jpeg' { 'image/jpeg' }
            '.gif'  { 'image/gif' }
            '.svg'  { 'image/svg+xml' }
            default { 'application/octet-stream' }
        }

        $context.Response.ContentType = $contentType
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    else {
        $body = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
        $context.Response.StatusCode = 404
        $context.Response.ContentType = 'text/plain; charset=utf-8'
        $context.Response.ContentLength64 = $body.Length
        $context.Response.OutputStream.Write($body, 0, $body.Length)
    }

    $context.Response.OutputStream.Close()
}
