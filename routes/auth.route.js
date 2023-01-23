const express = require('express')
const router = express.Router()
const { verifySignup } = require("../middleware")
const authController  = require("../controllers/auth.controller")

    router.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"   
        );
        next();
     });
    router.post("/register", [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authController.register);
    router.post("/login", authController.login)


module.exports = router

