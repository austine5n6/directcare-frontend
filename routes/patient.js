const { authJwt } = require("../middleware")
const dashboard = require("../controllers/patient/DashboardController")

module.exports = (app) => {
    app.get('/patient/dashboard', [authJwt.isPatient], dashboard.index)

}