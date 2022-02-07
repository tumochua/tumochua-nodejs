const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! tumochua')
})
app.get('/tumochua', (req, res) => {
    res.send('nguyễn văn tú')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})