import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${props.id}`}>
        <a>{props.name}</a>
      </Link>
    </li>
  );
};

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(item => (
          <PostLink key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  const shows = data.map(item => item.show);

  return { shows };
};

export default Index;
