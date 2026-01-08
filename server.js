const express = require('express');
const path = require('path');
const app = express();

// 1. Configuration du Port (Indispensable pour Render)
const PORT = process.env.PORT || 3000;

// 2. Middlewares (Pour lire les données envoyées par le site)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Servir les fichiers statiques (CSS, JS, Images)
// On utilise path.join pour être sûr que le serveur trouve le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 4. Route Principale : Envoie le fichier HTML au visiteur
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 5. Route API : Reçoit les données du formulaire de rendez-vous
app.post('/api/rendezvous', (req, res) => {
    const { nom, email, service } = req.body;
    
    // Pour l'instant, on affiche juste dans les logs de Render
    console.log("--- Nouveau Rendez-vous ---");
    console.log(`Nom: ${nom}`);
    console.log(`Email: ${email}`);
    console.log(`Service: ${service}`);
    console.log("---------------------------");

    res.json({ 
        success: true, 
        message: "Succès ! Votre rendez-vous est enregistré sur le serveur." 
    });
});

// 6. Démarrage du serveur
// L'adresse '0.0.0.0' est cruciale pour que Render puisse exposer le site au public
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré avec succès !`);
    console.log(`Disponible sur le port : ${PORT}`);
});

