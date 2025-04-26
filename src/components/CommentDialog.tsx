
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CommentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CommentDialog = ({ open, onOpenChange }: CommentDialogProps) => {
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (comment.trim()) {
      toast({
        title: "Comment submitted",
        description: "Your comment has been posted successfully.",
      });
      setComment("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Comment</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
