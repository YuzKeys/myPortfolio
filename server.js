require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message de ${name}`,
            text: message,
        });
        res.status(200).send("Message envoyé !");
    } catch (error) {
        res.status(500).send("Erreur lors de l'envoi.");
    }
});

app.listen(3000, () => console.log("Serveur en écoute sur http://localhost:3000"));
