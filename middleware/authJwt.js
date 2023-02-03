const jwt = require("jsonwebtoken")
const config = require("../config/auth.js")
const db = require("../models")
const User = db.user

verifyToken = async (req, res, next) => {
    // let token = req.headers["x-access-token"]
    // const token = req.cookies.access_token;
    // let token = req.headers['authorization']
 
    const token = req.session.token;
    if (!token) {
        return res.status(401).send({
            message: "No token was provided!"
        })
    }

    jwt.verify(token, config.secret, (err, payload) => {
        if (err) {
            return res.status(403).send({
                message: "Unauthorized and/or Invalid Token!"
            })
        }
        req.userId = payload.id
        next();
    })
}

isAdmin = async (req, res, next) => {
    try {
        const token = req.session.token;
      if (!token) {
        return res.status(401).send({
            message: "No token was provided!"
        })
    }
    jwt.verify(token, config.secret, async (err, payload) => {
        try {
            if (err) {
                return res.status(403).send({
                    message: "Unauthorized and/or Invalid Token!"
                })
            }
            let user = await User.findByPk(payload.id)
                const roles = await user.getRoles()
        
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === 'admin') {
                   next();
                }
            }

            return res.status(403).send({
                message: "Require Admin Role!"
            })
        }
        catch (error) {
            res.send(error.message)
        }
    })

    }
    catch (error) {
        return res.status(500).send({
            message: "Unable to validate user role!"
        })
    }
}

isStaff = async (req, res, next) => {
    try {
        const token = req.session.token;
      if (!token) {
        return res.status(401).send({
            message: "No token was provided!"
        })
    }

    jwt.verify(token, config.secret, async (err, payload) => {
        try {
            if (err) {
                return res.status(403).send({
                    message: "Unauthorized and/or Invalid Token!"
                })
            }
            let user = await User.findByPk(payload.id)
                const roles = await user.getRoles()
        
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === 'staff') {
                   next();
                }
            }

            return res.status(403).send({
                message: "Require Staff Role!"
            })
        }
        catch (error) {
            res.send(error.message)
        }
    })
    
    } 
    catch (error) {
        return res.status(500).send({
            message: "Unable to validate user role!"
        })
    }
}

isPatient = (req, res, next) => {
    try {
        const token = req.session.token;
      if (!token) {
        return res.status(401).send({
            message: "No token was provided!"
        })
    }

    jwt.verify(token, config.secret, async (err, payload) => {
        try {
            if (err) {
                return res.status(403).send({
                    message: "Unauthorized and/or Invalid Token!"
                })
            }
            let user = await User.findByPk(payload.id)
                const roles = await user.getRoles()
        
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === 'patient') {
                   next();
                }
            }

            return res.status(403).send({
                message: "Require Patient Role!"
            })

        }
        catch (error) {
             res.send(error.message)
        }
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
