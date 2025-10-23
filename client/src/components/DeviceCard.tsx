import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Settings, WifiOff, Wifi } from 'lucide-react';

interface DeviceCardProps {
  name: string;
  type: string;
  status: 'active' | 'warning' | 'error';
  lastUpdate?: string;
  batteryLevel?: number;
  imageUrl?: string;
}

export default function DeviceCard({
  name,
  type,
  status,
  lastUpdate,
  batteryLevel,
  imageUrl,
}: DeviceCardProps) {
  const statusConfig = {
    active: { label: 'Activo', className: 'status-active text-white' },
    warning: { label: 'Advertencia', className: 'status-warning text-foreground' },
    error: { label: 'Error', className: 'status-error text-white' },
  };

  return (
    <Card className="card-device border-0 hover-elevate active-elevate-2" data-testid={`card-device-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <Button
          size="icon"
          variant="ghost"
          data-testid="button-device-settings"
          onClick={() => console.log(`Settings for ${name}`)}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {imageUrl && (
          <div className="mb-4 flex justify-center">
            <img src={imageUrl} alt={name} className="h-24 w-24 object-contain" />
          </div>
        )}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Tipo:</span> {type}
          </p>
          {lastUpdate && (
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Última actualización:</span> {lastUpdate}
            </p>
          )}
          {batteryLevel !== undefined && (
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Batería:</span> {batteryLevel}%
            </p>
          )}
          <div className="flex items-center gap-2 pt-2">
            <Badge className={statusConfig[status].className}>
              {status === 'active' ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {statusConfig[status].label}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
