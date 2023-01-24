const db = require("../models")

const Role = db.role

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Resync DB")
//     initial()
// })

function RoleSeeder() {
    Role.create({
        name: "admin"
    })

    Role.create({
        name: "staff"
    })

    Role.create({
        name: "patient"
    })
}

module.exports = RoleSeeder()