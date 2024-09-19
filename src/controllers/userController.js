// controllers/userController.js
const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Asumsikan Anda menggunakan bcrypt
    try {
        const result = await User.create(username, email, hashedPassword);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findByEmail(email);
        if (user.length > 0) {
            res.status(200).json(user[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createUser, getUserByEmail };
