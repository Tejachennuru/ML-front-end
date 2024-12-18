import Plot from 'react-plotly.js';

export function ConfusionMatrix() {
  const zValues = [[985, 15], [18, 982]];

  const data = [
    {
      z: zValues,
      x: ['Normal', 'Attack'],
      y: ['Normal', 'Attack'],
      type: 'heatmap' as const, // Use 'heatmap' as a constant type
      colorscale: 'Blues',
      showscale: true,
      text: zValues.flat().map(value => `${value}`), // Flatten and convert to strings
      texttemplate: '%{text}',
      textfont: { color: 'white' },
    },
  ];

  const layout = {
    title: 'Confusion Matrix',
    width: 400,
    height: 400,
    xaxis: { title: 'Predicted' },
    yaxis: { title: 'Actual' },
    annotations: [
      {
        x: 'Normal',
        y: 'Normal',
        text: 'TN',
        showarrow: false,
        font: { size: 10, color: 'white' },
      },
      {
        x: 'Attack',
        y: 'Normal',
        text: 'FP',
        showarrow: false,
        font: { size: 10, color: 'white' },
      },
      {
        x: 'Normal',
        y: 'Attack',
        text: 'FN',
        showarrow: false,
        font: { size: 10, color: 'white' },
      },
      {
        x: 'Attack',
        y: 'Attack',
        text: 'TP',
        showarrow: false,
        font: { size: 10, color: 'white' },
      },
    ],
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
