import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const metrics = [
  { name: 'Accuracy', value: 98.5 },
  { name: 'Precision', value: 97.8 },
  { name: 'Recall', value: 98.2 },
  { name: 'F1 Score', value: 98.0 },
];

export function MetricsDisplay() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-8">
      <h2 className="text-xl font-semibold mb-4">Model Performance Metrics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[90, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}