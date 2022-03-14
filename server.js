const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const parametrosConsulta = urlParse.query;
    var statusCode = 404;
    var frase = `Pagina nao encontrada ${req.url} `;

    console.log(JSON.stringify(parametrosConsulta));

    if (req.url.startsWith('/bye')){
        statusCode = 200;
        frase = "Tchau!";
    } else if (req.url.startsWith('/hello')){
        statusCode = 200;
        frase = `Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`;
    }

    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/plain');
    res.end(frase);
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
