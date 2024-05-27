import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/Layout";
import { useState } from "react";
import Search from "@/components/Search";

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query) => {
    const filtered = posts.filter((post) =>
      post.metadata.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };
  return (
    <Layout>
      <h1>All Blogs:</h1>
      <Search onSearch={handleSearch} />
      <ul>
        {filteredPosts.map((post) => (
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
