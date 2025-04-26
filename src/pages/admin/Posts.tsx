
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import NewPostDialog from '@/components/admin/NewPostDialog';
import { useState } from 'react';

const Posts = () => {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const posts = [
    { title: "Modern Learning Techniques", category: "education", status: "published" },
    { title: "Healthy Living Guidelines", category: "health", status: "draft" },
    { title: "Video Production Basics", category: "video", status: "published" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Posts</h1>
        <Button onClick={() => setIsNewPostOpen(true)} className="gap-2">
          New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>All Posts</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search posts..." className="pl-8" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {posts.map((post) => (
              <div key={post.title} className="py-3 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{post.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  post.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <NewPostDialog
        open={isNewPostOpen}
        onOpenChange={setIsNewPostOpen}
      />
    </div>
  );
};

export default Posts;
