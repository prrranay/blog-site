import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        if (!slug) {
            console.error(`Missing slug for file: ${fileName}`);
        }

        return {
            slug,
            metadata: data,
            content
        };
    });

    return allPosts;
}
