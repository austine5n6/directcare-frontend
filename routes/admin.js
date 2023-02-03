const { authJwt } = require("../middleware")
const dashboard = require("../controllers/admin/DashboardController")

module.exports = (app) => {

    app.get('/admin/dashboard', authJwt.isAdmin, dashboard.index)

}