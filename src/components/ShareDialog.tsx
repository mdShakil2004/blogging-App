
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

const ShareDialog = ({ open, onOpenChange, title }: ShareDialogProps) => {
  const { toast } = useToast();
  const shareUrl = window.location.href;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Title</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
          <div className="flex gap-2">
            <Input value={shareUrl} readOnly />
            <Button onClick={handleCopy}>Copy</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
