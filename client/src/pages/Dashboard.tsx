import StatWidget from '@/components/StatWidget';
import DeviceCard from '@/components/DeviceCard';
import ActivityChart from '@/components/ActivityChart';
import ConsumptionChart from '@/components/ConsumptionChart'; // Assuming ConsumptionChart is a new import based on changes
import { Activity, Home, AlertTriangle, Users } from 'lucide-react';
import feederImage from '@assets/generated_images/Smart_feeder_device_6415df93.png'; // This import is not used in the provided changes, but kept for completeness if it was intended.

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-screen-2xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold titulo">Dashboard</h2>
        <p className="text-lg text-muted-foreground">
          Resumen de tu sistema de monitoreo de mascotas
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatWidget
          title="Dispositivos Activos"
          value="3"
          icon={Home}
          variant="device"
        />
        <StatWidget
          title="Mascotas"
          value="2"
          icon={Users}
          variant="info"
        />
        <StatWidget
          title="Alertas Hoy"
          value="5"
          icon={AlertTriangle}
          variant="data"
        />
        <StatWidget
          title="Nivel de Comida"
          value="75%"
          icon={Activity}
          variant="info"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <ConsumptionChart />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Dispositivos Recientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <DeviceCard
            name="Comedero Principal"
            type="Dispensador de Comida"
            status="active"
            lastUpdate="Hace 5 minutos"
            batteryLevel={85}
          />
          <DeviceCard
            name="Arenero Automático"
            type="Monitor de Arenero"
            status="active"
            lastUpdate="Hace 10 minutos"
            batteryLevel={92}
          />
        </div>
      </div>
    </div>
  );
}