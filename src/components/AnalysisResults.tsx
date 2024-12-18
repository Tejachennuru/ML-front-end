import { Activity, Target, TrendingUp } from 'lucide-react';
import { MetricCard } from './ui/MetricCard';
import { Chart } from './ui/Chart';
import type { AnalysisResult } from '../types/analysis';

interface AnalysisResultsProps {
  results: AnalysisResult;
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  const rocData = results.rocCurve.fpr.map((fpr, i) => ({
    fpr,
    tpr: results.rocCurve.tpr[i],
  }));

  const prData = results.prCurve.precision.map((precision, i) => ({
    precision,
    recall: results.prCurve.recall[i],
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Model Accuracy"
          value={`${(results.accuracy * 100).toFixed(2)}%`}
          description="Overall prediction accuracy"
          icon={<Target className="w-6 h-6" />}
        />
        <MetricCard
          title="F1 Score"
          value={results.classificationReport.f1Score.toFixed(3)}
          description="Harmonic mean of precision and recall"
          icon={<Activity className="w-6 h-6" />}
        />
        <MetricCard
          title="AUC-ROC"
          value={results.rocCurve.auc.toFixed(3)}
          description="Area under ROC curve"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="ROC Curve"
          data={rocData}
          dataKey="tpr"
          xAxisKey="fpr"
          color="#6366f1"
        />
        <Chart
          title="Precision-Recall Curve"
          data={prData}
          dataKey="precision"
          xAxisKey="recall"
          color="#10b981"
        />
      </div>
    </div>
  );
}