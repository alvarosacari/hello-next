import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";

const titleStyle = {
  color: "tomato"
};

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1 style={titleStyle}>{router.query.id}</h1>
      <p>This is the post content.</p>
    </>
  );
};

const Post = () => {
  return (
    <Layout>
      <Content></Content>
    </Layout>
  );
};

export default Post;
