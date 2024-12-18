import React from 'react';

interface MetricCardProps {
  title: string;
  value: number;
  description: string;
}

interface ClassificationMetricsProps {
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    falsePositiveRate: number;
    falseNegativeRate: number;
    support: number;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
    <p className="text-2xl font-bold text-blue-600 my-2">{value.toFixed(2)}%</p>
    <p className="text-xs text-gray-500">{description}</p>
  </div>
);

export function ClassificationMetrics({ metrics }: ClassificationMetricsProps) {
  const metricsList = [
    {
      title: "Accuracy",
      value: metrics.accuracy,
      description: "Overall prediction accuracy"
    },
    {
      title: "Precision",
      value: metrics.precision,
      description: "Accuracy of positive predictions"
    },
    {
      title: "Recall",
      value: metrics.recall,
      description: "Proportion of actual positives identified"
    },
    {
      title: "F1 Score",
      value: metrics.f1Score,
      description: "Harmonic mean of precision and recall"
    },
    {
      title: "False Positive Rate",
      value: metrics.falsePositiveRate,
      description: "Proportion of false alarms"
    },
    {
      title: "False Negative Rate",
      value: metrics.falseNegativeRate,
      description: "Proportion of missed detections"
    },
    {
      title: "Support",
      value: metrics.support,
      description: "Number of samples"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Classification Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {metricsList.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>
    </div>
  );
}