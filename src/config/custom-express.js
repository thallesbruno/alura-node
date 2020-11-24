const express = require('express');
const { rootCertificates } = require('tls');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;