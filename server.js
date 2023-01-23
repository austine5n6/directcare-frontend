const express = require('express');
const db = require('./models');
const cors = require("cors");
const Role = db.role;
const app = express()
const port = 3000;
const staffRouter = require('./routes/staff')
const authRouter = require('./routes/auth.route')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync().then(() => {
    // initialize();
    console.log("re-sync database");
})

app.use('/api/staff', staffRouter)
app.use('/api/auth', authRouter)

app.get('/', (req, res)=> {
    res.send("This is the default home route")
})



app.listen(port, () => console.log(`Server started at port ${port}`))
