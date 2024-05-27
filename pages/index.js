import Link from "next/link";
import { getAllPosts } from '@/lib/posts';
import Layout from '@/components/Layout';

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>All Blogs:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.metadata.title}</h2>
            </Link>
            <p>{post.metadata.summary}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
