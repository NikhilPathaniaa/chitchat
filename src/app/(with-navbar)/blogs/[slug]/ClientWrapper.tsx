'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { BlogPost } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

interface ClientWrapperProps {
  post: BlogPost;
}

export default function ClientWrapper({ post }: ClientWrapperProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="blog-post-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ReactMarkdown className="prose prose-lg prose-blue">
          {post.content}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
}
