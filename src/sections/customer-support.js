/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/4176370.jpg';

const list = [
  'Gründliche und regelmäßige Reinigung nach Bedarf',
  'Flexible Vertragsmodelle mit kurzen Kündigungsfristen',
 'Transparente Kommunikation und zuverlässiger Service',
 'Maßgeschneiderte Lösungen für Ihr Objekt',
];

const CustomerSupport = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image src={support} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Über uns / Warum wir?


            </Heading>
            <Text as="p" sx={styles.summary}>
            Westrhein Gebäudedienste – Ihr Partner für gewerbliche Reinigungslösungen
            Wir bieten professionelle und zuverlässige Reinigungsdienstleistungen für Unternehmen, Praxen, Büros, Wohnanlagen und viele weitere gewerblich genutzte Objekte.

            </Text>
            <Text as="p" sx={styles.summary}>
            Was Sie bei uns erwartet:            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
            <Text as="p" sx={styles.summary}>

            Ob Einzelunternehmen, Bürogebäude oder eine ganze Liegenschaft – wir sorgen für gepflegte Räume, die Eindruck machen.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  section: {
    pt: [18, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
    mt: [4, null, null, 5, 4, 5],
    mb: [4, null, null, 5, 4, 5],
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    m :5 ,
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  /*list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },*/
  list: {
    gap: '0 18px',
    display: 'flex',       // Use flexbox for full row
    flexWrap: 'wrap',      // Allow items to wrap onto the next line
    justifyContent: 'space-between', // Spread out items evenly
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    mb: [4, null, null, 5, 4, 5],
    p: 0,
    width: '100%',         // Ensure the list takes up full width
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      width: '100%',        // Make each list item full width
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
