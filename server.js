const http = require('http');

const servidor = http.createServer(function (req, resp){ //função callback
    let html = '';
    
    if(req.url == '/') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Testando Node</h1>
                </body>
            </html>
        `;
    } else if(req.url == '/livros'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Listagem de Livros</h1>
                </body>
            </html>
        `;
    }
    
    resp.end(html);
});

//complexidade ciclomática

servidor.listen(3000);

