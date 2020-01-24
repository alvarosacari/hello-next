import Layout from "../components/MyLayout";

const AboutPageContent = () => {
  return <p>This is the About Page</p>;
};

const About = () => {
  return (
    <Layout>
      <AboutPageContent></AboutPageContent>
    </Layout>
  );
};

export default About;
