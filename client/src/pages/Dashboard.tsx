import StatWidget from '@/components/StatWidget';
import DeviceCard from '@/components/DeviceCard';
import ActivityChart from '@/components/ActivityChart';
import { Activity, Home, AlertTriangle, Users } from 'lucide-react';
import feederImage from '@assets/generated_images/Smart_feeder_device_6415df93.png';

export default function Dashboard() {
  //todo: remove mock functionality
  return (
    <div className="space-y-6" data-testid="page-dashboard">
      <h1 className="titulo text-3xl">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatWidget
          title="Mascotas Activas"
          value="3"
          description="Todas saludables"
          icon={Activity}
          variant="data"
        />
        <StatWidget
          title="Dispositivos"
          value="5"
          description="4 activos"
          icon={Home}
          variant="device"
        />
        <StatWidget
          title="Alertas"
          value="2"
          description="Requieren atención"
          icon={AlertTriangle}
          variant="info"
        />
        <StatWidget
          title="Usuarios"
          value="1"
          description="Plan Plus"
          icon={Users}
          variant="data"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Dispositivos Recientes</h2>
          <div className="space-y-4">
            <DeviceCard
              name="Comedero Principal"
              type="Dispensador de Comida"
              status="active"
              lastUpdate="Hace 5 minutos"
              batteryLevel={85}
              imageUrl={feederImage}
            />
            <DeviceCard
              name="Arenero Inteligente"
              type="Monitor de Arenero"
              status="warning"
              lastUpdate="Hace 2 horas"
              batteryLevel={45}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
