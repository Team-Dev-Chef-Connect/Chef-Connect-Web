const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // You can change this if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://martandmahajan:3ANlxPH6BRAvdENV@userdetails.xwdinvo.mongodb.net/?retryWrites=true&w=majority&appName=UserDetails';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase timeout to 45 seconds
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Login Endpoint
app.post('/login', async (req, res) => {
    const { mobile, password } = req.body;

    try {
        const user = await User.findOne({ mobile });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Register Endpoint
app.post('/register', async (req, res) => {
    const { name, mobile, password } = req.body;

    try {
        let user = await User.findOne({ mobile });

        if (user) {
            return res.status(400).json({ message: 'Mobile number already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, mobile, password: hashedPassword });
        await user.save();

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
