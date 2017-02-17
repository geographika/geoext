<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>@@EXAMPLE_NAME@@ Example</title>
    <link rel="stylesheet" type="text/css" href="https://openlayers.org/en/v3.20.1/css/ol.css">
    <link rel="stylesheet" type="text/css" href="http://cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css"/>
</head>

<body>

    <div id='description'>
        <p>
            This example shows ...
        </p>
        <p>
            Have a look at <a href="@@EXAMPLE_NAME@@.js">@@EXAMPLE_NAME@@.js</a> to see how this is
            done.
        </p>
    </div>

    <script src="https://openlayers.org/en/v3.20.1/build/ol.js"></script>
    <script src="http://cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
    <script>
        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'GeoExt': '../../src/'
            }
        });
    </script>

    <script src="@@EXAMPLE_NAME@@.js"></script>
</body>
</html>
