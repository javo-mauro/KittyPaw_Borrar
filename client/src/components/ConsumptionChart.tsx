import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ConsumptionChartProps {
  data?: Array<{ name: string; value: number }>;
}

export default function ConsumptionChart({ data }: ConsumptionChartProps) {
  //todo: remove mock functionality
  const mockData = data || [
    { name: 'Lun', value: 200 },
    { name: 'Mar', value: 180 },
    { name: 'Mié', value: 220 },
    { name: 'Jue', value: 210 },
    { name: 'Vie', value: 190 },
    { name: 'Sáb', value: 170 },
    { name: 'Dom', value: 160 },
  ];

  return (
    <Card className="card-device border-0" data-testid="chart-consumption">
      <CardHeader>
        <CardTitle>Consumo de Alimento</CardTitle>
        <CardDescription>Gramos consumidos por día</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
