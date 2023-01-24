const { verifySignUp } = require("../middleware")
const authenticate = require("../controllers/authenticate")

module.exports = function (app) {
    require('./staff')(app)

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.get('/', function (req, res, next) {
        res.json({ message: "Connection successful!" })
    });

    app.post("/register",
        [
            verifySignUp.checkDuplicateEmail,
            verifySignUp.checkRolesExisted
        ], authenticate.register);

    app.post("/login", authenticate.login)

    app.post("/logout", authenticate.logout)
}


