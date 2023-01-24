const db = require("../models")

const User = db.user

const bcrypt = require("bcryptjs")
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Resync DB")
//     initial()
// })

function UserSeeder() {
    User.create({
        name: "admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("password")
    })

    User.create({
        name: "admin",
        email: "staff@example.com",
        password: bcrypt.hashSync("password")
    })

    User.create({
        name: "admin",
        email: "patient@example.com",
        password: bcrypt.hashSync("password")
    })
}

module.exports = UserSeeder()