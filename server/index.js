const express = require('express');
const cors = require('cors');
const emailjs = require('emailjs-com');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            { name, email, message },
            process.env.EMAILJS_USER_ID
        );
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
