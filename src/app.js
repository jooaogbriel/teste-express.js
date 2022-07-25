const { response } = require('express');
const express = require('express');

const app = express()

const port = 3000
const port2 = 3001

app.get('/',(request,response) => {
    response.send('Aplicação criada')
})

app.listen(port,() => {
    console.log(`Aplicação criada na porta ${port}`)
})
