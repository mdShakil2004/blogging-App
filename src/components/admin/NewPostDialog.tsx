
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface NewPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewPostDialog = ({ open, onOpenChange }: NewPostDialogProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (title.trim() && content.trim() && category.trim()) {
      // Here you would typically save the post to your backend
      toast({
        title: "Post created",
        description: "Your post has been created successfully.",
      });
      setTitle("");
      setContent("");
      setCategory("");
      onOpenChange(false);
    } else {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input
              id="title"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <Input
              id="category"
              placeholder="Enter post category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">Content</label>
            <Textarea
              id="content"
              placeholder="Write your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-40"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostDialog;
