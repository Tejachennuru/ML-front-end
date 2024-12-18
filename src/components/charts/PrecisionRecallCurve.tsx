import Plot from 'react-plotly.js';
import { Data } from 'plotly.js';

export function PrecisionRecallCurve() {
  // Generate precision-recall curve data points
  const recall = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.982];
  const precision = [1.0, 0.999, 0.998, 0.997, 0.996, 0.995, 0.994, 0.992, 0.99, 0.985, 0.978];

  // Define data with the correct type
  const data: Data[] = [
    {
      x: recall,
      y: precision,
      type: 'scatter', // Type must be explicitly 'scatter'
      mode: 'lines',
      name: 'PR Curve',
      line: {
        color: 'rgb(59, 130, 246)',
        width: 2,
      },
    }
  ];

  const layout = {
    title: 'Precision-Recall Curve',
    width: 400,
    height: 400,
    xaxis: {
      title: 'Recall',
      range: [0, 1],
    },
    yaxis: {
      title: 'Precision',
      range: [0, 1],
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true }}
      />
    </div>
  );
}
