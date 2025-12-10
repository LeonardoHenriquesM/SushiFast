import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page container my-5">

      {/* ===== Notre équipe ===== */}
      <section className="team mb-5 text-center">
        <h2 className="mb-4">Notre Équipe</h2>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          {/* Personne 1 */}
          <div className="team-member text-center">
            <img
              src="/img/membre1.avif"
              alt="Membre 1"
              className="rounded-circle mb-2"
              width={150}
              height={150}
            />
            <h5>Thylia</h5>
            <p>Développeuse de Sushi</p>
          </div>
          {/* Personne 2 */}
          <div className="team-member text-center">
            <img
              src="/img/homme.jpg"
              alt="Membre 2"
              className="rounded-circle mb-2"
              width={150}
              height={150}
            />
            <h5>Leonardo</h5>
            <p>Marketing de Sushi</p>
          </div>
        </div>
      </section>

      {/* ===== Infos contact ===== */}
      <section className="contact-info mb-5 text-center">
        <h2 className="mb-4">Nous contacter</h2>
        <p>Email: contact@sushifast.com</p>
        <p>Téléphone: +33 6 12 34 56 78</p>
        <p>Adresse: 12 Rue des Sushis, 75001 Paris</p>
        <div className="social-links mt-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem', color: '#FF7F50' }}></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-facebook" style={{ fontSize: '1.5rem', color: '#FF7F50' }}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter" style={{ fontSize: '1.5rem', color: '#FF7F50' }}></i>
          </a>
        </div>

      </section>

      {/* ===== Formulaire ===== */}
      <section className="contact-form">
        <h2 className="mb-4 text-center">Envoyez-nous un message</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" placeholder="Votre nom" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Votre email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Votre message"></textarea>
          </div>
          <button type="submit" className="btn btn-warning">Envoyer</button>
        </form>
      </section>

    </div>
  );
}
