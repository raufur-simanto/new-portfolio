import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data as { title: string; date: string; excerpt: string },
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <nav className="max-w-[45rem] mx-auto px-4 mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </nav>
      
      <main className="max-w-[45rem] mx-auto px-4">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <header className="mb-8 border-b dark:border-gray-700 pb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.metadata.title}
            </h1>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>
          
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, idx) => (
              paragraph && (
                paragraph.startsWith('- ') ? (
                  <ul key={idx} className="list-disc list-inside">
                    <li>{paragraph.substring(2)}</li>
                  </ul>
                ) : (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                )
              )
            ))}
          </div>
        </article>

        <nav className="mt-8 flex justify-between items-center">
          <Link 
            href="/#blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </Link>
        </nav>
      </main>
    </div>
  );
}