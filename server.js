const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Permet au serveur de lire les données envoyées par le formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sert les fichiers statiques (ton design, tes images)
app.use(express.static('public'));

// Route pour gérer la prise de rendez-vous
app.post('/api/rendezvous', (req, res) => {
    const { nom, email, service } = req.body;
    console.log(`Nouveau RDV reçu : ${nom} pour un(e) ${service}`);
    
    // Ici, plus tard, on ajoutera le code pour enregistrer en base de données
    res.json({ message: "Succès ! Votre rendez-vous est enregistré côté serveur." });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});