import { Button } from '@/components/ui/button';
import { Menu, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import logo from '@assets/generated_images/KittyPaw_app_logo_icon_4a2bd296.png';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { logout, user } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  return (
    <header className="navbar h-16 px-4 flex items-center justify-between" data-testid="header">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden"
          data-testid="button-menu-toggle"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <img src={logo} alt="KittyPaw" className="h-10 w-10" />
          <h1 className="app-title text-xl font-bold hidden sm:block">KittyPaw</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground hidden sm:inline" data-testid="text-username">
          {user?.username}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          data-testid="button-logout"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
