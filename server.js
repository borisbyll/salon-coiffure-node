const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. On indique explicitement où sont les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// 2. On force l'envoi de l'index.html quand on arrive sur "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/rendezvous', (req, res) => {
    const { nom, email, service } = req.body;
    console.log(`Nouveau RDV reçu : ${nom}`);
    res.json({ message: "Succès ! Votre rendez-vous est enregistré." });
});

app.listen(PORT, () => {
    console.log(`Serveur prêt sur le port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);

});

