import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetHead = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>EduSign - Sign Language Education for Children</title>
      <meta
        name="description"
        content="Interactive sign language learning platform for deaf and hard of hearing children ages 0-15"
      />

      {/* Favicon (optional) */}
      {/* <link rel="icon" href="/images/favicon.ico" /> */}

      {/* Fonts & Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <link rel="stylesheet" href="/css/style1.css" />
    </Helmet>
  );
};

export default HelmetHead;
