
module.exports = (app) => {
    
    app.get('/all', (req, res) => {
        res.send("This is all staff routes")
    })
}

