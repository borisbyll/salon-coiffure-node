document.getElementById('booking-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // On récupère les données du formulaire
    const formData = {
        nom: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        service: this.querySelector('select').value
    };

    // On envoie les données au serveur
    const response = await fetch('/api/rendezvous', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
    this.reset();
});