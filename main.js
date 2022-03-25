const axios = require("axios")
const app = require("express")()
const uest = require('uest')

const host = 'localhost'
const port = 8000

let interval = null
app.use(uest())

app.get('/repositories', (req, res) => {
    axios
        .get('https://api.github.com/repositories')
        .then(result => {
            res.send(JSON.stringify(result.data))
            console.log(`statusCode: ${result.status}`)
        })
        .catch(error => {
            console.error(error)
        })
})

app.get('/repositories/:id', (req, res) => {
    axios
        .get('https://api.github.com/repositories/' + req.params.id)
        .then(result => {
            res.send(JSON.stringify(result.data))
            console.log(`statusCode: ${result.status}`)
        })
        .catch(error => {
            console.error(error)
        })
    res.end();
})

app.get('/trending', (req, res) => {
    axios
        .get('https://api.github.com/search/repositories?q=sort=stars&order=desc')
        .then(result => {
            res.send(JSON.stringify(result.data))
            console.log(`statusCode: ${result.status}`)
        })
        .catch(error => {
            console.error(error)
        })
})

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
})