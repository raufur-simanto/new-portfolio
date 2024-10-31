'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function Blog() {
  const { ref } = useSectionInView('Blog');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blog"
    >
      <SectionHeading>My Blog</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <motion.article 
            key={post.slug}
            className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 hover:scale-105 transition cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-medium mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <a 
                href={`/blog/${post.slug}`} 
                className="text-gray-900 dark:text-gray-100 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}