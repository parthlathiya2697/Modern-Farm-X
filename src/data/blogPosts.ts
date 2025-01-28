import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    excerpt: 'A beginner-friendly guide to web development',
    date: '2024-03-20',
    author: 'John Doe',
    slug: 'getting-started-with-web-development',
    tags: ['web development', 'beginners']
  },
  {
    id: '2',
    title: 'React Best Practices in 2024',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    excerpt: 'Learn the latest React patterns and practices',
    date: '2024-03-18',
    author: 'Jane Smith',
    slug: 'react-best-practices-2024',
    tags: ['react', 'javascript', 'frontend']
  },
  {
    id: '3',
    title: 'Understanding TypeScript',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    excerpt: 'A comprehensive guide to TypeScript',
    date: '2024-03-15',
    author: 'John Doe',
    slug: 'understanding-typescript',
    tags: ['typescript', 'javascript', 'programming']
  }
]; 