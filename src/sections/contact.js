// pages/contact.js
import { useState } from 'react';
import styles from './contact.module.css';
import { Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: '',
    contactPerson: 'Max Mustermann',
    location: 'Musterstadt',
    explanation: '',
    frequency: '',
    email: 'max-mustermann@email.de',
    customerType: '',
    area: 'ca. 250 qm',
    phone: 'Ihre Telefonnummer',
    company: 'Musterfirma'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box as="section" sx={style.section}>
      <Container >
      <h1 className={styles.headerTitle}>Kostenlose & unverbindliche Angebotsanfrage</h1>
      <h2 className={styles.headerSubtitle}>Sie erhalten innerhalb von 24h eine Antwort</h2>
     
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Contact Form</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formColumns}>
            {/* Left Column */}
            <div className={styles.formColumn}>
              {/* Dienstleistung */}
              <div className={styles.formGroup}>
                <label htmlFor="service" className={`${styles.formLabel} ${styles.required}`}>
                  Dienstleistung
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="cleaning">Reinigung</option>
                  <option value="maintenance">Wartung</option>
                  <option value="repair">Reparatur</option>
                </select>
              </div>

              {/* Ansprechpartner */}
              <div className={styles.formGroup}>
                <label htmlFor="contactPerson" className={`${styles.formLabel} ${styles.required}`}>
                  Ansprechpartner
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Ort */}
              <div className={styles.formGroup}>
                <label htmlFor="location" className={`${styles.formLabel} ${styles.required}`}>
                  Ort
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Turnus */}
              <div className={styles.formGroup}>
                <label htmlFor="frequency" className={`${styles.formLabel} ${styles.required}`}>
                  Turnus
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="weekly">Wöchentlich</option>
                  <option value="monthly">Monatlich</option>
                  <option value="quarterly">Vierteljährlich</option>
                  <option value="annually">Jährlich</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.formColumn}>
              {/* E-Mail-Adresse */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={`${styles.formLabel} ${styles.required}`}>
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Gewerblich oder Privat */}
              <div className={styles.formGroup}>
                <label htmlFor="customerType" className={`${styles.formLabel} ${styles.required}`}>
                  Gewerblich oder Privat
                </label>
                <select
                  id="customerType"
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="commercial">Gewerblich</option>
                  <option value="private">Privat</option>
                </select>
              </div>

              {/* Reinigungsfläche in qm */}
              <div className={styles.formGroup}>
                <label htmlFor="area" className={`${styles.formLabel} ${styles.required}`}>
                  Reinigungsfläche in qm
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Telefonnummer */}
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
            </div>
          </div>

          {/* Full-width elements */}
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.formLabel}>
              Firmenname
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="explanation" className={styles.formLabel}>
              Erläuterung
            </label>
            <textarea
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className={styles.formTextarea}
              rows="3"
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
    </Box>
  );

 
}
const style = {
  section: {
    backgroundColor: '#ECF2F7',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
   
};
