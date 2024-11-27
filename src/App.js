import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Network, Shield, Code, LayoutGrid, Bot, ChevronRight, Wrench, Twitter, DollarSign, Search, AlertCircle, Clock, Users, UserPlus, Package, MessageSquare } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalInput, setTerminalInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [tokenAddress, setTokenAddress] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dexLoading, setDexLoading] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: 'INITIALIZING QUAN AI SYSTEM...' },
    { type: 'system', content: '[OK] Neural Network Core Online' },
    { type: 'system', content: '[OK] Blockchain Connection Established' },
    { type: 'warn', content: '> CAUTION: Advanced AI System Active' },
    { type: 'system', content: 'Type "help" for available commands' }
  ]);
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
    'analyze': 'Analyzing current market conditions...\n- SOL/USD: Support level at $95.50\n- Network congestion: Low\n- Transaction volume: High',
    'scan': 'Scanning Solana network...\n- TPS: 2,547\n- Active validators: 1,842\n- Network health: Optimal',
    'status': 'QUAN AI Status Report:\n- Neural processors: 100% operational\n- Security protocols: Active\n- Connection strength: Strong',
    'help': 'Available commands:\n- analyze : Market analysis\n- scan : Network scan\n- status : System status\n- clear : Clear terminal\n- help : Show this message',
    'hello': 'Greetings, I am QUAN, your Solana AI Assistant. How may I help you?',
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

  const checkTokenInfo = async () => {
    const chainId = 'solana';
    if (!tokenAddress) {
      setError('Please enter a valid Solana token address.');
      setResult(null);
      return;
    }
    
    try {
      setError(null);
      setDexLoading(true);
      setResult(null);
      
      const response = await fetch(
        `https://api.dexscreener.com/orders/v1/${chainId}/${tokenAddress}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || 'Something went wrong'}`);
        setResult(null);
        return;
      }
      
      const data = await response.json();
      const isPaid = data.some(
        (order) => order.status === 'approved' && order.paymentTimestamp > 0
      );
      setResult(isPaid ? 'Paid' : 'Not Paid');
      
    } catch (err) {
      setError('Failed to fetch token information. Please try again later.');
      setResult(null);
    } finally {
      setDexLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-green-400">
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
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <Twitter size={20} />
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
                onClick={() => setActiveTab('upcoming')}
                className={`flex items-center gap-2 px-3 py-1 rounded transition-colors
                  ${activeTab === 'upcoming' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'}`}
              >
                <Clock size={16} />
                <span>Upcoming</span>
              </button>
              <button 
                onClick={() => setActiveTab('dex')}
                className={`flex items-center gap-2 px-3 py-1 rounded transition-colors
                  ${activeTab === 'dex' ? 'bg-green-500 text-black' : 'hover:bg-gray-800'}`}
              >
                <DollarSign size={16} />
                <span>DEX Payments</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

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

          {activeTab === 'upcoming' && (
            <div className="bg-gray-900/30 border border-green-800/50 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-green-900/10 animate-pulse"></div>
              
              <h2 className="text-xl mb-6 flex items-center gap-2 relative">
                <Clock className="text-green-400 animate-pulse" /> UPCOMING TOOLS
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Users className="animate-pulse" />,
                    title: "CHECK TOP 10 HOLDERS",
                    status: "NEW WALLETS: 0/10",
                    desc: "Advanced wallet analysis and risk assessment",
                    color: "from-green-600/20 to-blue-600/20"
                  },
                  {
                    icon: <UserPlus className="animate-pulse" />,
                    title: "TOP HOLDERS %",
                    status: "0% / 0% / 0% / 0%",
                    desc: "Distribution analysis and monitoring",
                    color: "from-blue-600/20 to-purple-600/20"
                  },
                  {
                    icon: <Package className="animate-pulse" />,
                    title: "CHECK SOCIALS",
                    status: "USED BEFORE / NEW",
                    desc: "Historical social media tracking",
                    color: "from-purple-600/20 to-green-600/20"
                  },
                  {
                    icon: <MessageSquare className="animate-pulse" />,
                    title: "BUNDLE CHECK",
                    status: "YES / NO",
                    desc: "AI-powered bundle detection",
                    color: "from-red-600/20 to-orange-600/20"
                  }
                ].map((tool, index) => (
                  <div 
                    key={index}
                    className="group relative bg-black/50 p-6 rounded-lg border border-green-700 hover:border-green-500 
                              transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg text-green-400 flex items-center gap-2">
                          {tool.icon}
                          {tool.title}
                        </h3>
                        <div className="text-xs text-blue-400/80 px-2 py-1 rounded-full border border-blue-400/30 
                                      bg-blue-900/20 animate-pulse">
                          SOON
                        </div>
                      </div>
                      
                      <p className="text-green-500/70 text-sm font-mono">{tool.status}</p>
                      <p className="mt-2 text-green-400/60 text-sm">{tool.desc}</p>
                      
                      <div className="mt-4 h-1 w-full bg-green-900/30 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-green-500/50 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'dex' && (
            <div className="bg-gray-900/30 border border-green-800/50 rounded-lg p-6">
              <h2 className="text-xl mb-6 flex items-center gap-2">
                <DollarSign className="text-green-400" /> DEX Payment Verification
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-black/50 p-8 rounded-lg border border-green-700">
                  <div className="mb-6">
                    <h3 className="text-lg mb-2 text-green-400">Token Verification</h3>
                    <p className="text-green-500/70 text-sm mb-4">
                      Enter a Solana token address to verify its payment status on DEX
                    </p>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Solana token address"
                      className="w-full bg-gray-900/50 border border-green-600 rounded px-4 py-3 text-green-400 
                               placeholder-green-700 focus:outline-none focus:border-green-400 transition-colors
                               hover:border-green-500"
                      value={tokenAddress}
                      onChange={(e) => setTokenAddress(e.target.value)}
                    />
                    <Search className="absolute right-3 top-3 text-green-600" size={20} />
                  </div>

                  <button
                    onClick={checkTokenInfo}
                    disabled={dexLoading}
                    className={`w-full mt-4 bg-green-600 hover:bg-green-700 text-black font-medium py-3 px-4 
                             rounded transition-colors flex items-center justify-center gap-2
                             ${dexLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {dexLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Shield size={18} />
                        Verify Payment Status
                      </>
                    )}
                  </button>
                  
                  {result && (
                    <div className={`mt-6 text-center py-3 px-4 rounded border ${
                      result === 'Paid' 
                        ? 'bg-green-900/30 border-green-600 text-green-400' 
                        : 'bg-red-900/30 border-red-600 text-red-400'
                    }`}>
                      <div className="flex items-center justify-center gap-2">
                        {result === 'Paid' ? (
                          <Shield className="text-green-400" size={20} />
                        ) : (
                          <AlertCircle className="text-red-400" size={20} />
                        )}
                        <span className="font-medium">Status: {result}</span>
                      </div>
                    </div>
                  )}
                  
                  {error && (
                    <div className="mt-6 text-red-400 bg-red-900/30 border border-red-600 py-3 px-4 rounded">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={20} />
                        {error}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-900/50 border-t border-green-800/50 p-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © 2024 QUAN AI SYSTEMS | QUANTUM NEURAL NETWORK | POWERED BY SOLANA
        </div>
      </footer>
    </div>
  );
};

export default App;
                      