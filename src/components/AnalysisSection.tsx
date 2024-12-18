import React from 'react';
import { TrafficDistribution } from './charts/TrafficDistribution';
import { TimeSeriesAnalysis } from './charts/TimeSeriesAnalysis';
import { FeatureImportance } from './charts/FeatureImportance';
import { ClassificationMetrics } from './metrics/ClassificationMetrics';
import { ConfusionMatrix } from './charts/ConfusionMatrix';
import { ROCCurve } from './charts/ROCCurve';
import { PrecisionRecallCurve } from './charts/PrecisionRecallCurve';

interface AnalysisSectionProps {
  data: {
    metrics: {
      accuracy: number;
      precision: number;
      recall: number;
      f1Score: number;
      falsePositiveRate: number;
      falseNegativeRate: number;
      support: number;
    };
    confusionMatrix: number[][];
    trafficDistribution: { name: string; value: number }[];
    timeSeriesData: { time: string; packets: number }[];
    featureImportance: { name: string; importance: number }[];
    rocCurveData: { fpr: number[]; tpr: number[] };
    precisionRecallData: { precision: number[]; recall: number[] };
  };
}

export function AnalysisSection({ data }: AnalysisSectionProps) {
  return (
    <div>
      <ClassificationMetrics metrics={data.metrics} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <TrafficDistribution data={data.trafficDistribution} />
        <TimeSeriesAnalysis data={data.timeSeriesData} />
        <FeatureImportance data={data.featureImportance} />
      </div>
      <h3 className="text-xl font-semibold mb-4">Model Performance Analysis</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConfusionMatrix data={data.confusionMatrix} />
        <ROCCurve data={data.rocCurveData} />
        <PrecisionRecallCurve data={data.precisionRecallData} />
      </div>
    </div>
  );
}
