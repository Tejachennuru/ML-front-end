export interface AnalysisResult {
  accuracy: number;
  classificationReport: {
    precision: number;
    recall: number;
    f1Score: number;
    support: number;
  };
  confusionMatrix: number[][];
  rocCurve: {
    fpr: number[];
    tpr: number[];
    auc: number;
  };
  prCurve: {
    precision: number[];
    recall: number[];
  };
}

export interface Dataset {
  features: number[][];
  labels: number[];
}