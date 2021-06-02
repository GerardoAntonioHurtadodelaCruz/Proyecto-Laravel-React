<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Comixcon</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Styles de react-bootsrap -->
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
    />
</head>

<body>

    <!-- React root DOM -->
    <div id="example">
    </div>

    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!--Scripts de react-bootsrap -->
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script
    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>

    <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>

</body>
</html>