import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Network, Shield, Code, LayoutGrid, Bot, ChevronRight, Wrench, Twitter } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalInput, setTerminalInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: 'INITIALIZING QUAN AI SYSTEM...' },
    { type: 'system', content: '[OK] Neural Network Core Online' },
    { type: 'system', content: '[OK] Blockchain Connection Established' },
    { type: 'warn', content: '> CAUTION: Advanced AI System Active' },
    { type: 'system', content: 'Type "help" for available commands' }
  ]);
  const [expandedTool, setExpandedTool] = useState(null);
  const [statusMessage, setStatusMessage] = useState('QUANTUM ENCRYPTION ACTIVE');

  useEffect(() => {
    const messages = [
      'QUANTUM ENCRYPTION ACTIVE',
      'SCANNING NETWORK...',
      'NEURAL CORE STABLE',
      'SYSTEM SECURE'
    ];
    
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setStatusMessage(randomMessage);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const aiResponses = {
    'analyze': `Analyzing current market conditions...
- SOL/USD: Support level at $95.50
- Network congestion: Low
- Transaction volume: High`,
    'scan': `Scanning Solana network...
- TPS: 2,547
- Active validators: 1,842
- Network health: Optimal`,
    'status': `QUAN AI Status Report:
- Neural processors: 100% operational
- Security protocols: Active
- Connection strength: Strong`,
    'help': `Available commands:
- analyze : Market analysis
- scan : Network scan
- status : System status
- clear : Clear terminal
- help : Show this message
You can also ask me general questions about Solana`,
    'hello': "Greetings, I am QUAN, your Solana AI Assistant. How may I help you?",
    'clear': 'CLEAR_TERMINAL'
  };

  const handleCommand = async (input) => {
    setIsProcessing(true);
    setTerminalOutput(prev => [...prev, { type: 'user', content: input }]);

    const command = input.toLowerCase().trim();

    if (command === 'clear') {
      setTerminalOutput([]);
    } else if (aiResponses[command]) {
      await simulateTyping(aiResponses[command]);
    } else {
      await simulateTyping('Processing query through neural network...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await simulateTyping(`Analysis: ${input} relates to Solana's blockchain architecture and network protocols.`);
    }

    setIsProcessing(false);
  };

  const simulateTyping = async (text) => {
    const lines = text.split('\n');
    for (const line of lines) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setTerminalOutput(prev => [...prev, { type: 'system', content: line }]);
    }
  };

  const handleTerminalSubmit = async (e) => {
    e.preventDefault();
    if (!terminalInput.trim() || isProcessing) return;

    const input = terminalInput;
    setTerminalInput('');
    await handleCommand(input);
  };

  const tools = [
    {
      id: 'forge',
      icon: <Code />,
      name: 'Contract Forge',
      description: 'Deploy and interact with Solana smart contracts',
      features: ['Contract deployment', 'Code verification', 'Security analysis']
    },
    {
      id: 'analytics',
      icon: <LayoutGrid />,
      name: 'Quantum Analytics',
      description: 'Real-time blockchain analysis and insights',
      features: ['Transaction tracking', 'Pattern detection', 'Risk assessment']
    }
  ];

  // Rest of the component remains the same but with web3/wallet parts removed
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-green-400">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-green-800/50 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <Bot className="w-6 h-6 mr-2 animate-pulse" />
            <div>
              <h1 className="text-xl font-bold hover:text-green-300 transition-colors">QUAN</h1>
              <p className="text-xs text-green-500 animate-pulse">SOLANA AI AGENT</p>
            </div>
          </div>
          
          <div className="text-sm text-green-500 animate-pulse hidden md:block">
            {statusMessage}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/QUAN_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
            >
              <Twitter size={20} />
              <span className="text-sm hidden md:inline">Follow QUAN</span>
            </a>

            <nav className="flex gap-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-2 px-3 py-1 rounded transition-colors
                  ${activeTab === 'overview' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'}`}
              >
                <Terminal size={16} />
                <span>Overview</span>
              </button>
              <button 
                onClick={() => setActiveTab('tools')}
                className={`flex items-center gap-2 px-3 py-1 rounded transition-colors
                  ${activeTab === 'tools' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'}`}
              >
                <Wrench size={16} />
                <span>Tools</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <section className="bg-gray-900/30 border border-green-800/50 rounded-lg p-6">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Bot /> System Status
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/50 p-4 rounded border border-green-900">
                    <div className="flex items-center gap-2">
                      <Network className="text-green-500 animate-pulse" />
                      <div>
                        <h3 className="font-medium">Network</h3>
                        <p className="text-sm text-green-500">Connected to Solana</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/50 p-4 rounded border border-green-900">
                    <div className="flex items-center gap-2">
                      <Cpu className="text-green-500 animate-pulse" />
                      <div>
                        <h3 className="font-medium">Processing</h3>
                        <p className="text-sm text-green-500">Neural Core Active</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/50 p-4 rounded border border-green-900">
                    <div className="flex items-center gap-2">
                      <Shield className="text-green-500 animate-pulse" />
                      <div>
                        <h3 className="font-medium">Security</h3>
                        <p className="text-sm text-green-500">Encryption Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-900/30 border border-green-800/50 rounded-lg p-6">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Terminal /> Neural Interface
                </h2>
                <div className="bg-black/50 rounded border border-green-900 p-4">
                  <div className="h-64 overflow-y-auto mb-4 font-mono">
                    {terminalOutput.map((line, i) => (
                      <div key={i} className={`mb-1 ${
                        line.type === 'user' ? 'text-blue-400' : 
                        line.type === 'warn' ? 'text-yellow-500' : 
                        'text-green-400'
                      }`}>
                        {line.type === 'user' ? '> ' : '$ '}{line.content}
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="text-green-400 animate-pulse">Processing...</div>
                    )}
                  </div>
                  <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                    <span className="text-green-500">></span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="flex-grow bg-transparent border-none outline-none focus:ring-0 font-mono"
                      placeholder="Enter command or ask a question..."
                      disabled={isProcessing}
                    />
                  </form>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="bg-gray-900/30 border border-green-800/50 rounded-lg p-6">
              <h2 className="text-xl mb-6 flex items-center gap-2">
                <Wrench /> Quantum Toolset
              </h2>
              <div className="space-y-4">
                {tools.map((tool) => (
                  <div key={tool.id} className="group">
                    <button
                      onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                      className="w-full bg-black/50 p-4 rounded border border-green-900 hover:border-green-700 
                               transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {tool.icon}
                        <span>{tool.name}</span>
                      </div>
                      <ChevronRight className={`transition-transform duration-200 
                        ${expandedTool === tool.id ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {expandedTool === tool.id && (
                      <div className="mt-2 ml-4 p-4 bg-black/30 rounded border border-green-900/50">
                        <p className="text-green-400 mb-3">{tool.description}</p>
                        <ul className="space-y-2">
                          {tool.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="text-green-500">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-green-800/50 p-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © 2024 QUAN AI SYSTEMS | QUANTUM NEURAL NETWORK | POWERED BY SOLANA
        </div>
      </footer>
    </div>
  );
};

export default App;