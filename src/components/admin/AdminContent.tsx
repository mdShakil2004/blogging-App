import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from 'lucide-react';
import NewPostDialog from './NewPostDialog';

const AdminContent = () => {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const stats = [
    { title: "Total Posts", value: "125" },
    { title: "Published", value: "98" },
    { title: "Drafts", value: "27" },
    { title: "Categories", value: "3" },
  ];

  const recentPosts = [
    { title: "Modern Learning Techniques", category: "education", status: "published" },
    { title: "Healthy Living Guidelines", category: "health", status: "draft" },
    { title: "Video Production Basics", category: "video", status: "published" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Button className="gap-2" onClick={() => setIsNewPostOpen(true)}>
          <PlusCircle className="h-5 w-5" />
          New Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Recent Posts</CardTitle>
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
            {recentPosts.map((post) => (
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

export default AdminContent;
