import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
    useEffect(() => {
        // Side effects here
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="hover:text-blue-600"
                                >
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-gray-600 text-sm mb-4">
                                <span>{post.date}</span> • <span>{post.author}</span>
                            </div>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`/blog/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                            >
                                Read More
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog; 