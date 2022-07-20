import React from "react";
import initialState from "../initialState";
import { Products } from "../components/Products";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adrian15996" />
        <meta name="twitter:creator" content="@adrian15996" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />

        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />

        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Products Products={initialState.products} />;
    </>
  );
};

export { Home };
