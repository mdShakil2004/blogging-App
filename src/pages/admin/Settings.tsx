
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Settings</h1>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">Bio</label>
            <Input id="bio" placeholder="A short bio about yourself" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="language" className="text-sm font-medium">Language</label>
            <Input id="language" placeholder="Select language" />
          </div>
          <div className="space-y-2">
            <label htmlFor="timezone" className="text-sm font-medium">Timezone</label>
            <Input id="timezone" placeholder="Select timezone" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
