import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
  data?: Array<{ name: string; value: number }>;
}

export default function ActivityChart({ data }: ActivityChartProps) {
  //todo: remove mock functionality
  const mockData = data || [
    { name: 'Lun', value: 65 },
    { name: 'Mar', value: 59 },
    { name: 'Mié', value: 80 },
    { name: 'Jue', value: 81 },
    { name: 'Vie', value: 56 },
    { name: 'Sáb', value: 55 },
    { name: 'Dom', value: 40 },
  ];

  return (
    <Card className="card-data border-0" data-testid="chart-activity">
      <CardHeader>
        <CardTitle>Actividad Semanal</CardTitle>
        <CardDescription>Nivel de actividad de tus mascotas</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-3))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
