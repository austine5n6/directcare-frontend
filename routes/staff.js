const { authJwt } = require("../middleware")
const dashboard = require('../controllers/staff/DashboardController')

module.exports = (app) => {

    app.get('/status/dashboard', [authJwt.isStaff], dashboard.index)

}

