import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients'; 
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Contact from 'sections/contact';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO
        title="Gebäudereinigung NRW | Gewerbliche Reinigungsfirma in Düsseldorf und Köln"
        description="Professionelle Reinigungsdienstleistungen in NRW – Treppenhausreinigung, Fassadenreinigung, Büroreinigung, Glasreinigung, Teppichreinigung, Bauendreinigung und flexible Reinigungsverträge für Unternehmen in Düsseldorf und Köln."
        keywords="Gebäudereinigung NRW, Gewerbliche Reinigungsfirma Düsseldorf, Köln, Treppenhausreinigung Gewerbe, Fassadenreinigung Firma, Reinigungsdienst für Unternehmen, Glasreinigung professionell NRW, Unterhaltsreinigung Büro, Teppichreinigung Büro, Bauendreinigung NRW, flexible Reinigungsverträge NRW"
      />
        <Banner />
        <br></br>
        <br></br>
        <br></br>
        <CustomerSupport />
        <br></br>
        <br></br>
        <br></br>
        <UltimateFeatures />
        
        <Support />
        <Contact />
        {/*<Pricing />
       
        <Clients />
        <Blog />
        <Faq />*/}
      </Layout>
    </ThemeProvider>
  );
}
