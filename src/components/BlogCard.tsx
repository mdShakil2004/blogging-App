import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageSquare, Share } from 'lucide-react';
import CommentDialog from './CommentDialog';
import ShareDialog from './ShareDialog';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: 'education' | 'health' | 'video';
  date: string;
  imageUrl: string;
}

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'education':
      return 'bg-purple-100 text-purple-600';
    case 'health':
      return 'bg-green-100 text-green-600';
    case 'video':
      return 'bg-blue-100 text-blue-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const BlogCard = ({ title, excerpt, category, date, imageUrl }: BlogCardProps) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const categoryStyle = getCategoryStyle(category);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-sm capitalize ${categoryStyle}`}>
              {category}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <button className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span className="text-sm">Like</span>
          </button>
          <button 
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-1"
            onClick={() => setIsCommentOpen(true)}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm">Comment</span>
          </button>
          <button 
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-1"
            onClick={() => setIsShareOpen(true)}
          >
            <Share className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </CardFooter>
      </Card>
      <CommentDialog 
        open={isCommentOpen} 
        onOpenChange={setIsCommentOpen} 
      />
      <ShareDialog 
        open={isShareOpen} 
        onOpenChange={setIsShareOpen}
        title={title}
      />
    </>
  );
};

export default BlogCard;
