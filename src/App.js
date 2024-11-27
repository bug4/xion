import React, { useState } from 'react';
import { Terminal, Lock, Code, Cpu, Network, Shield } from 'lucide-react';

const QuantWebsite = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', icon: <Terminal />, label: 'System Overview' },
    { id: 'capabilities', icon: <Cpu />, label: 'Capabilities' },
    { id: 'security', icon: <Shield />, label: 'Security Protocols' }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Cyberpunk Header */}
      <header className="bg-gray-900 bg-opacity-80 p-4 border-b border-green-600 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          QUAN <span className="text-xs text-green-300">AI AGENT</span>
        </div>
        <nav className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-1 rounded transition ${
                activeTab === tab.id 
                  ? 'bg-green-600 text-black' 
                  : 'hover:bg-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="p-6 relative">
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-b from-transparent to-green-900 animate-pulse"></div>
        
        {/* Content Sections */}
        {activeTab === 'overview' && (
          <section className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-green-800">
            <h2 className="text-3xl mb-4 flex items-center">
              <Terminal className="mr-3" /> QUAN: System Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black p-4 rounded border border-green-700">
                <h3 className="text-xl mb-2">Core Specifications</h3>
                <ul className="space-y-2">
                  <li>🔹 Advanced AI Cognitive Engine</li>
                  <li>🔹 Adaptive Neural Network</li>
                  <li>🔹 Multi-Domain Processing</li>
                </ul>
              </div>
              <div className="bg-black p-4 rounded border border-green-700">
                <h3 className="text-xl mb-2">Connection Status</h3>
                <div className="flex items-center">
                  <Network className="mr-2 text-green-500" />
                  <span className="text-green-400">Active | Secure Channel ✓</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'capabilities' && (
          <section className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-green-800">
            <h2 className="text-3xl mb-4 flex items-center">
              <Cpu className="mr-3" /> Operational Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: <Code />, title: 'Advanced Analysis', desc: 'Multi-dimensional data processing' },
                { icon: <Lock />, title: 'Secure Protocols', desc: 'Military-grade encryption' },
                { icon: <Network />, title: 'Network Intelligence', desc: 'Real-time threat detection' }
              ].map((cap, index) => (
                <div key={index} className="bg-black p-4 rounded border border-green-700 text-center">
                  <div className="flex justify-center mb-3">{cap.icon}</div>
                  <h3 className="text-xl mb-2">{cap.title}</h3>
                  <p className="text-sm text-green-300">{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'security' && (
          <section className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-green-800">
            <h2 className="text-3xl mb-4 flex items-center">
              <Shield className="mr-3" /> Security Protocols
            </h2>
            <div className="bg-black p-4 rounded border border-green-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl mb-3">Encryption Layers</h3>
                  <ul className="space-y-2">
                    <li>🔒 256-bit AES Encryption</li>
                    <li>🔒 Quantum-Resistant Algorithms</li>
                    <li>🔒 Dynamic Firewall Adaptation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Access Control</h3>
                  <ul className="space-y-2">
                    <li>🛡️ Multi-Factor Authentication</li>
                    <li>🛡️ Biometric Verification</li>
                    <li>🛡️ Zero-Trust Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-80 p-4 text-center border-t border-green-600">
        <p className="text-sm">© 2024 QUAN AI SYSTEMS | ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default QuantWebsite;