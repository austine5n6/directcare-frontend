const db = require('../models')

const config = require('../config/auth')

const User = db.user

const Role = db.role

const Op = db.Sequelize.Op

const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs")

exports.register = async (req, res) => {
    
    try {

        if (req.body.name === '' || req.body.email === '' || req.body.password === '') return res.status(500).json({message: "All field are required!"})
        
        
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })

        if (req.body.roles) {
            const roles = await Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            })

            const result = user.setRoles(roles)

            if (result) res.status(201).json({ message: "User registered successfully!" })

        } else {

            const result = user.setRoles([1])

            if (result) res.status(201).json({ message: "User registered successfull!" })

        }

    } catch (error) {

        return res.status(500).json({ message: error.message })

    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        })

        if (!user) {
            return res.status(404).json({ message: "User not found." })
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!passwordIsValid) {
            return res.status(401).json({
                message: "Incorrect credentials!"
            })
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // 24 hours
        })

        let authorities = []
        const roles = await user.getRoles()

        for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase())
        }

        req.session.token = token

        return res.status(200).json({
            id: user.id,
            email: user.email,
            roles: authorities,
            token
        })

    } catch (error) {

        return res.status(500).json({
            message: error.message
        })
    }
}

exports.logout = async (req, res) => {
    try {
        req.session = null

        return res.status(200).json({
            message: "You've been signed out!"
        })
    } catch (error) {

        return this.next(error)
    }
}

// module.exports = {
//     register,
//     login,
//     logout,
// }