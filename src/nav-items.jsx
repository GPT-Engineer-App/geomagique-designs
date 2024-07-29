import { Home, PenTool, FolderOpen, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Generate Design",
    to: "/generate",
    icon: <PenTool className="h-4 w-4" />,
    page: <Index />, // Replace with actual page component when created
  },
  {
    title: "My Designs",
    to: "/my-designs",
    icon: <FolderOpen className="h-4 w-4" />,
    page: <Index />, // Replace with actual page component when created
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Index />, // Replace with actual page component when created
  },
];