const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uniqueValidator = require("mongoose-unique-validator");
require("dotenv").config();

const app = express();

// Connexion à MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connexion à MongoDB réussie !"))
    .catch((error) => console.log("❌ Connexion à MongoDB échouée : ", error));

// Schéma Mongoose
const visiterSchema = new mongoose.Schema({
    nameUser: { type: String, required: true },
    mailUser: { type: String, required: true, unique: true },
    messageUser: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
});

// Appliquer le validateur unique
visiterSchema.plugin(uniqueValidator);

// Modèle Mongoose
const Visiters = mongoose.model("Visiter", visiterSchema);

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES

// Obtenir tous les visiteurs
app.get("/api/visiter", async (req, res) => {
    try {
        const visiter = await Visiters.find();
        res.status(200).json(visiter);
    } catch (err) {
        console.error("❌ Erreur lors de la récupération des visiteurs :", err);
        res.status(500).json({ error: "Erreur serveur, veuillez réessayer." });
    }
});

// Ajouter un visiteur
app.post("/api/visiter", async (req, res) => {
    try {
        const { nameUser, mailUser, messageUser, rating } = req.body;

        // Vérifier si l'email existe déjà
        const existingVisiter = await Visiters.findOne({ mailUser });
        if (existingVisiter) {
            return res.status(400).json({
                error: "L'adresse e-mail est déjà utilisée. Veuillez en choisir une autre.",
            });
        }

        // Créer un nouveau visiteur si l'email n'existe pas
        const newVisiter = new Visiters({
            nameUser,
            mailUser,
            messageUser,
            rating,
        });

        await newVisiter.save();
        console.log("✅ Nouveau visiteur enregistré :", newVisiter);

        res.status(201).json({
            message: "Information enregistrée avec succès !",
        });
    } catch (error) {
        console.error("❌ Erreur lors de l'enregistrement :", error);
        res.status(400).json({
            error: "Données invalides, veuillez réessayer.",
        });
    }
});

// Catch-all route
app.use((req, res) => {
    res.status(404).json({ error: "Route non trouvée" });
});

module.exports = app;
