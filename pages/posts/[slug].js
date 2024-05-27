import { getAllPosts } from '@/lib/posts';
import Layout from '@/components/Layout';
import MarkdownIt from 'markdown-it';
import styles from '@/components/Layout.module.css';
import Link from 'next/link';

const md = new MarkdownIt();

export default function Post({ post }) {
    if (!post) {
        return <h1>Post not found</h1>;
    }
    console.log(post);
    return (
        <Layout>
            <Link className={styles.nav} href="/">See all Posts</Link>
            <div className={styles.blog}>
                <h1 className={styles.blogTitle}>{post.metadata.title}</h1>
                <p>By {post.metadata.author} on {post.metadata.date}</p>
                <div className={styles.blogContent}>
                <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const posts = getAllPosts();
    const post = posts.find(post => post.slug === params.slug);

    return {
        props: {
            post
        }
    };
}
