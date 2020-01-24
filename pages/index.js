import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

const IndexPageContent = () => {
  return (
    <div>
      <p>Hello Next.js</p>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <IndexPageContent></IndexPageContent>
    </Layout>
  );
};

export default Index;
