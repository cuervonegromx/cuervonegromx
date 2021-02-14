import React from 'react';
import { Helmet } from 'react-helmet';

import { IntlProvider, ThemeProvider } from '../../../providers';
import { GlobalStyle  } from '../../../utils/global';

const Layout = ({ children }) => {
  return (
    <IntlProvider>
      <ThemeProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Empresa orgullosamente sudcaliforniana que ofrece servicios de consultoria sobre tecnologías de la información, diseño gráfico digital e ingeniería de software" />
          <title>Cuervo Negro</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </IntlProvider>
  );
};

export default Layout;
