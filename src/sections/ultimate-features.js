/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';
import img1 from 'assets/images/services/Glas-Rahmenreinigung.jpg';
import img2 from 'assets/images/services/Bodenreinigung.jpg';
import img3 from 'assets/images/services/Fassadenreinigung.jpg';
import img4 from 'assets/images/services/Teppichreinigung.jpg';
import img5 from 'assets/images/services/Treppenhausreinigung.jpg';
import img6 from 'assets/images/services/Unterhaltsreinigung.jpg';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Glas-/Rahmen­reinigung',
    description: `We provide professional cleaning services for glass frames, ensuring they stay clear and spotless.`,
    image : img1
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Bodenreinigung',
    description: `Keep your floors pristine with our thorough cleaning services designed for all types of flooring.`,
    image : img2
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Fassadenreinigung',
    description: `Unsere Fassadenreinigung entfernt Schmutz und Flecken und sorgt für ein frisches Aussehen Ihrer Immobilie.`,
    image : img3
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Teppichreinigung',
    description: `Wir bieten eine Tiefenreinigung für Teppiche, um Staub, Flecken und Allergene zu entfernen und sie frisch und hygienisch zu halten.`,
    image : img4
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Treppenhausreinigung',
    description: `Unsere Treppenhausreinigung sorgt für Sauberkeit und Sicherheit in Ihrem Gebäude.`,
    image : img5
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Unterhaltsreinigung',
    description: `Regelmäßige Reinigungslösungen zur Aufrechterhaltung der Sauberkeit und Hygiene Ihrer Immobilie.`,
    image : img6
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Sparkling Spaces, Clean Surroundings"
          title="Experience the difference with our expert cleaning services,
           from crystal-clear glass frames to spotless floors and facades.
            We bring freshness to every corner, ensuring your property always shines!"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
