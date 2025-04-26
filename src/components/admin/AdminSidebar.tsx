
import React from 'react';
import { LayoutDashboard, FileText, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: FileText, label: 'Posts', path: '/admin/posts' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={location.pathname === item.path ? "secondary" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => navigate(item.path)}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
