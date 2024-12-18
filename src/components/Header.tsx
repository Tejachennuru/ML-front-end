import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield size={32} className="text-white" />
            <h1 className="text-2xl font-bold">DDoS Detection ML</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
              <li><a href="#analysis" className="hover:text-blue-200 transition">Analysis</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
