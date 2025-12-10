import React, { useState } from "react";
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si tous les champs sont remplis
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Veuillez remplir tous les champs avant d'envoyer le message.");
      return;
    }

    // Ici tu pourrais ajouter ton API pour envoyer le mail

    alert("Votre message a été envoyé !");
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact-page container my-5">

      {/* ===== Notre équipe ===== */}
      <section className="team mb-5 text-center">
        <h2 className="mb-4">Notre Équipe</h2>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          <div className="team-member text-center">
            <img src="/img/membre1.avif" alt="Membre 1" className="rounded-circle mb-2" width={150} height={150} />
            <h5>Thylia</h5>
            <p>Maitre Sushi</p>
          </div>
          <div className="team-member text-center">
            <img src="/img/homme.jpg" alt="Membre 2" className="rounded-circle mb-2" width={150} height={150} />
            <h5>Leonardo</h5>
            <p>Mangeur de Sushi</p>
          </div>
        </div>
      </section>

      {/* ===== Infos contact ===== */}
      <section className="contact-info mb-5 text-center">
        <h2 className="mb-4">Nous contacter</h2>
        <p>Email: contact@sushifast.com</p>
        <p>Téléphone: +33 6 12 34 56 78</p>
        <p>Adresse: 12 Rue des Sushis, 75001 Paris</p>
      </section>

      {/* ===== Formulaire ===== */}
      <section className="contact-form">
        <h2 className="mb-4 text-center">Envoyez-nous un message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning">Envoyer</button>
        </form>
      </section>
    </div>
  );
}
