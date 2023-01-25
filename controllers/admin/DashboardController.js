exports.index = async (req, res) => {
    try {
        return res.status(200).json({ message: 'Welcome to admin dashboard' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

};