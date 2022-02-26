import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";

const About = ({ title, description }) => {
  console.log(title);
  return (
    <>
      <Head>
        <title>{title} - NEXTJS-FUNDAMENTALS</title>
        <meta name="description" content={description} />
      </Head>
      <button className="btn btn-primary">Boostrap Button</button>
      <div className="content">About</div>
    </>
  );
};

export default About;

const PageLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

About.getLayout = PageLayout;

export const getServerSideProps = async () => {
  console.log("hhhhhhhhhhhhhhhhhh");
  // const tags = "fish, rich, honey, mustered oil";
  return {
    props: {
      title: "About Page",
      description: "fish, rich, honey, mustered oil",
    },
  };
};
