import { Metadata } from 'next';
import { getPostBySlug, getAllSlugs, type BlogPost } from '@/lib/blog';
import Script from 'next/script';
import './styles.css';

interface Props {
  params: {
    slug: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: BlogPost | null = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    keywords: post.seoKeywords || [post.category, ...(post.tags || [])],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      type: 'article',
      publishedTime: new Date().toISOString(),
    }
  };
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function BlogLayout({ children }: Props) {
  return <>{children}</>;
}
