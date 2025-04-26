
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import AdminContent from '../components/admin/AdminContent';
import AdminSidebar from '../components/admin/AdminSidebar';
import Posts from './admin/Posts';
import Settings from './admin/Settings';

const Admin = () => {
  const location = useLocation();

  const getContent = () => {
    switch (location.pathname) {
      case '/admin/posts':
        return <Posts />;
      case '/admin/settings':
        return <Settings />;
      default:
        return <AdminContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex">
          <AdminSidebar />
        </div>

        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2 m-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <AdminSidebar />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
