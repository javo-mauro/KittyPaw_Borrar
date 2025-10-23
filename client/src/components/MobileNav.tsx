import { Link, useLocation } from 'wouter';
import { Home, Wifi, PawPrint, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Inicio', href: '/dashboard' },
  { icon: Wifi, label: 'Dispositivos', href: '/devices' },
  { icon: PawPrint, label: 'Mascotas', href: '/mascotas' },
  { icon: Bell, label: 'Alertas', href: '/alerts' },
];

export default function MobileNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border lg:hidden z-50" data-testid="mobile-nav">
      <div className="flex items-center justify-around p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover-elevate',
                )}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
