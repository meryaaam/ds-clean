import { useState } from 'react';
import styles from './contact.module.css';
import { Box, Container } from 'theme-ui';

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

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsAccepted2, setTermsAccepted2] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(termsAccepted && termsAccepted2)) {
      alert("Bitte akzeptieren Sie beide Bedingungen (Impressum und Datenschutz).");
      return;
    }
    console.log('Form submitted:', formData);
  };

  const isFormValid = termsAccepted && termsAccepted2;

  return (
    <Box id="contact" as="section" sx={style.section}>
      <Container>
        <h1 className={styles.headerTitle}>Kontakt / Angebotsanfrage</h1>
        <h2 className={styles.headerSubtitle}>
          Jetzt kostenloses und unverbindliches Angebot anfordern<br />
          Sie erhalten ein individuelles Angebot innerhalb von 24 Stunden – abgestimmt auf Ihre Anforderungen.
        </h2>

        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Contact Form</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formColumns}>
              <div className={styles.formColumn}>
                {/* Left Column */}
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={`${styles.formLabel} ${styles.required}`}>Dienstleistung</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className={styles.formSelect} required>
                    <option value="">Bitte wählen...</option>
                    <option value="Glas- &amp; Rahmenreinigung">Glas- &amp; Rahmenreinigung</option>
                    <option value="Treppenhausreinigung">Treppenhausreinigung</option>
                    <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                    <option value="Fassadenreinigung">Fassadenreinigung</option>
                    <option value="Sonderreinigung">Sonderreinigung</option>
                    <option value="Bauabschlussreinigung">Bauabschlussreinigung</option>
                    <option value="Praxisreinigung">Praxisreinigung</option>
                    <option value="besondere Dienstleistungen">besondere Dienstleistungen</option>
                
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contactPerson" className={`${styles.formLabel} ${styles.required}`}>Ansprechpartner</label>
                  <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={styles.formInput} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location" className={`${styles.formLabel} ${styles.required}`}>Ort</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className={styles.formInput} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="frequency" className={`${styles.formLabel} ${styles.required}`}>Turnus</label>
                  <select id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} className={styles.formSelect} required>
                    <option value="">Bitte wählen...</option>
                    <option value="Einmalig">Einmalig</option>
                    <option value="1x wöchentlich">1x wöchentlich</option>
                    <option value="2x wöchentlich">2x wöchentlich</option>
                    <option value="3x wöchentlich">3x wöchentlich</option>
                    <option value="4x wöchentlich">4x wöchentlich</option>
                    <option value="5x wöchentlich">5x wöchentlich</option>
                    <option value="6x wöchentlich">6x wöchentlich</option>
                    <option value="7x wöchentlich">7x wöchentlich</option>
                    <option value="14-tägig">14-tägig</option>
                    <option value="1x monatlich">1x monatlich</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div className={styles.formColumn}>
                {/* Right Column */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={`${styles.formLabel} ${styles.required}`}>E-Mail</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="customerType" className={`${styles.formLabel} ${styles.required}`}>Gewerblich oder Privat</label>
                  <select id="customerType" name="customerType" value={formData.customerType} onChange={handleChange} className={styles.formSelect} required>
                    <option value="">Bitte wählen...</option>
                    <option value="commercial">Gewerblich</option>
                    <option value="private">Privat</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="area" className={`${styles.formLabel} ${styles.required}`}>Reinigungsfläche in qm</label>
                  <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} className={styles.formInput} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Telefonnummer</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={styles.formInput} />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.formLabel}> Name / Firma              </label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={styles.formInput} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="explanation" className={styles.formLabel}>Nachricht / Besonderheiten</label>
              <textarea id="explanation" name="explanation" value={formData.explanation} onChange={handleChange} className={styles.formTextarea} rows="3" />
            </div>

            <div className={styles.checkboxGrid}>
              <div className={styles.checkboxCol}>
                <label className={styles.checkboxItem}>
                  <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                  Impressum
                </label>
              </div>

              <div className={styles.checkboxCol}>
                <label className={styles.checkboxItem}>
                  <input type="checkbox" checked={termsAccepted2} onChange={(e) => setTermsAccepted2(e.target.checked)} />
                  Datenschutz
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${!isFormValid ? styles.disabledButton : ''}`}
              disabled={!isFormValid}
            >
              Einreichen
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
