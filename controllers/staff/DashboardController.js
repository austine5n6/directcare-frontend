exports.index = async (req, res) => {
    try {
        return res.json({ message: 'Welcome to staff dashboard '})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

};

exports.giveMedications = async (req, res) => {

};