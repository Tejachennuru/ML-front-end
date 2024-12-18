import React, { useState } from 'react';
import { Header } from './components/Header';
import { UploadSection } from './components/UploadSection';
import { AnalysisSection } from './components/AnalysisSection';
import { Brain, Shield, Zap } from 'lucide-react';
import { processDataset } from './services/dataProcessing';

function App() {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (file: File) => {
    try {
      setLoading(true);
      setError(null);
      const data = await processDataset(file);
      setAnalysisData(data);
    } catch (err) {
      setError('Error processing dataset. Please ensure it\'s in the correct format.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">DDoS Attack Detection System</h2>
          <p className="text-gray-600 mb-8">
            Our advanced machine learning model uses Random Forest with PSO feature selection 
            and Bayesian optimization to detect DDoS attacks with high accuracy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Intelligent Detection</h3>
              <p className="text-gray-600">
                Leverages machine learning to identify and classify network attacks
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Real-time Protection</h3>
              <p className="text-gray-600">
                Provides immediate threat detection and response capabilities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">High Performance</h3>
              <p className="text-gray-600">
                Advanced analysis of network traffic patterns
              </p>
            </div>
          </div>
        </section>
        <section id="analysis" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Analyze Your Dataset</h2>
          <UploadSection onAnalyze={handleAnalyze} />
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing dataset...</p>
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          {analysisData && <AnalysisSection data={analysisData} />}
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© Group:P4-05. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
