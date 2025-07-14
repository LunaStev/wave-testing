import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'README.md');
    const content = fs.readFileSync(filePath, 'utf-8');
    return { props: { content } };
}

export default function Home({ content }: { content: string }) {
    return (
        <main>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {content}
            </ReactMarkdown>
        </main>
    );
}
