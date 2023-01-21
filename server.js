const express = require('express')
const app = express()
port = 8080;

app.get('/', (req, res) => {
    res.send("Default server page")
})

app.listen(port, () => console.log(`Server started at port ${port}`))