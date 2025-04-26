
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: "Modern Learning Techniques",
    excerpt: "Discover effective strategies for modern education and learning methodologies in the digital age...",
    category: "education",
    date: "April 25, 2025",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "The Future of Online Education",
    excerpt: "Exploring how AI and virtual reality are transforming the educational landscape...",
    category: "education",
    date: "April 24, 2025",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Study Techniques That Work",
    excerpt: "Research-backed methods to improve learning retention and academic performance...",
    category: "education",
    date: "April 23, 2025",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Healthy Living Guidelines",
    excerpt: "Essential tips for maintaining a healthy lifestyle in the modern world with practical advice...",
    category: "health",
    date: "April 24, 2025",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    title: "Mental Health Awareness",
    excerpt: "Understanding the importance of mental health and strategies for maintaining emotional well-being...",
    category: "health",
    date: "April 23, 2025",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Nutrition Fundamentals",
    excerpt: "A comprehensive guide to balanced nutrition and healthy eating habits...",
    category: "health",
    date: "April 22, 2025",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    title: "Video Production Basics",
    excerpt: "Learn the fundamentals of creating engaging video content for various platforms...",
    category: "video",
    date: "April 23, 2025",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    title: "Advanced Video Editing",
    excerpt: "Master the art of video editing with professional techniques and tools...",
    category: "video",
    date: "April 22, 2025",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Content Creation Strategy",
    excerpt: "Develop effective strategies for creating compelling video content that engages viewers...",
    category: "video",
    date: "April 21, 2025",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
] as const;

const FeaturedGrid = () => {
  const { category } = useParams();
  
  const filteredPosts = category 
    ? blogPosts.filter(post => post.category === category)
    : blogPosts;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category as 'education' | 'health' | 'video'}
            date={post.date}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FeaturedGrid;
