import Plot from 'react-plotly.js';
import { Data } from 'plotly.js'; // Import the Data type for type-checking

export function ROCCurve() {
  // Generate ROC curve data points
  const fpr = [0, 0.012, 0.024, 0.036, 0.048, 0.06, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
  const tpr = [0, 0.982, 0.985, 0.988, 0.99, 0.992, 0.994, 0.995, 0.996, 0.997, 0.998, 0.998, 0.999, 0.999, 1.0, 1.0];

  // Explicitly type the data as Data[]
  const data: Data[] = [
    {
      x: fpr,
      y: tpr,
      type: 'scatter', // Specify the plot type explicitly
      mode: 'lines',
      name: 'ROC Curve',
      line: {
        color: 'rgb(59, 130, 246)',
        width: 2,
      },
    },
    {
      x: [0, 1],
      y: [0, 1],
      type: 'scatter', // Ensure the type matches the data being used
      mode: 'lines',
      name: 'Random',
      line: {
        color: 'rgb(156, 163, 175)',
        width: 2,
        dash: 'dash',
      },
    }
  ];

  const layout = {
    title: 'ROC Curve (AUC = 0.985)',
    width: 400,
    height: 400,
    xaxis: {
      title: 'False Positive Rate',
      range: [0, 1],
    },
    yaxis: {
      title: 'True Positive Rate',
      range: [0, 1],
    },
    showlegend: true,
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
