const jwt = require("jsonwebtoken")
const config = require("../config/auth.js")
const db = require("../models")
const User = db.user

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send({
            message: "No token was provided!"
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }

        req.userId = decoded.id
        next()
    })
}

isAdmin = async (req, res, next) => {
    try {
        const user = await User.findByPK(req.userId)
        const roles = await user.getRoles()

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'admin') {
                return next()
            }
        }

        return res.status(403).send({
            message: "Require Admin Role!"
        })

    } catch (error) {
        return res.status(500).send({
            message: "Unable to validate user role!"
        })
    }
}

isStaff = async (req, res, next) => {
    try {
        const user = await User.findByPK(req.userId)
        const roles = await user.getRoles()

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'staff') {
                return next()
            }
        }

        return res.status(403).send({
            message: "Require Staff Role!"
        })

    } catch (error) {
        return res.status(500).send({
            message: "Unable to validate Staff role!"
        })
    }
}

isPatient = async (req, res, next) => {
    try {
        const user = await User.findByPK(req.userId)
        const roles = await user.getRoles()

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "patient") {
                return next()
            }
        }

        return res.status(403).send({
            message: "Require Patient Role!"
        })

    } catch (error) {
        return res.status(500).send({
            message: "Unable to validate Patient role!"
        })
    }
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isStaff: isStaff,
    isPatient: isPatient
}

module.exports = authJwt