import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Cpu,
  Network,
  Shield,
  Bot,
  Twitter,
  DollarSign,
  Search,
  AlertCircle,
  Clock,
  Users,
  UserPlus,
  Package,
  MessageSquare,
  Activity,
  Music,
} from 'lucide-react';
import './index.css'; // Import your CSS file here

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalInput, setTerminalInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [tokenAddress, setTokenAddress] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dexLoading, setDexLoading] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: 'INITIALIZING XION AI SYSTEM...' },
    { type: 'system', content: '[OK] Neural Network Core Online' },
    { type: 'system', content: '[OK] Blockchain Connection Established' },
    { type: 'warn', content: '> CAUTION: Advanced AI System Active' },
    { type: 'system', content: 'Type "help" for available commands' },
  ]);
  const [statusMessage, setStatusMessage] = useState('QUANTUM ENCRYPTION ACTIVE');
  const [thinkingCode, setThinkingCode] = useState([]);

  // References for auto-scrolling
  const terminalRef = useRef(null);
  const thinkingRef = useRef(null);

  const canvasRef = useRef(null);

  // Music Player State and Ref
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/music.mp3');
    audioRef.current.loop = true;

    return () => {
      // Clean up on unmount
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    const messages = [
      'QUANTUM ENCRYPTION ACTIVE',
      'SCANNING NETWORK...',
      'NEURAL CORE STABLE',
      'SYSTEM SECURE',
    ];

    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setStatusMessage(randomMessage);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = (Math.random() * canvas.height) / fontSize;
    }

    let frame = 0;
    const speed = 3; // Adjust this value to control the speed
    const mouse = { x: 0, y: 0 };
    const maxDist = 100; // Maximum distance for interaction

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Adjust background opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Adjust text opacity
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Update drops based on speed
        if (frame % speed === 0) {
          drops[i]++;
        }

        // Interactive effect
        const dx = i * fontSize - mouse.x;
        const dy = drops[i] * fontSize - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDist) {
          drops[i] -= 5; // Accelerate the drops away from the mouse
        }
      }

      frame++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simulate XION thinking by displaying random code
  useEffect(() => {
    const codeSnippets = [
      'Initializing quantum matrices...',
      'Analyzing blockchain patterns...',
      'Decrypting neural pathways...',
      'Compiling AI protocols...',
      'Optimizing quantum entanglements...',
      'Processing data streams...',
      'Synchronizing neural networks...',
      'Establishing secure connections...',
      'Deploying smart contracts...',
      'Executing machine learning algorithms...',
      'Mapping neural graphs...',
      'Calibrating prediction engines...',
      'Decrypting transaction flows...',
      'Monitoring validator activity...',
      'Activating quantum feedback loop...',
      'Generating probability forecasts...',
      'Scanning decentralized nodes...',
      'Refining anomaly detection...',
      'Harnessing entropy variations...',
      'Synthesizing cryptographic keys...',
      'Resolving data packet inconsistencies...',
      'Integrating multisig protocols...',
      'Activating neural hashing functions...',
      'Formulating adaptive AI strategies...',
      'Decoding latent blockchain signals...',
      'Compiling dynamic liquidity pools...',
      'Encrypting consensus algorithms...',
      'Observing mempool fluctuations...',
      'Executing zero-knowledge proof iterations...',
      'Translating network vibrations...',
      'Preparing deployment kernel...',
      'Deploying system diagnostics...',
      'Activating the XION core...',
      'Aligning quantum coherence...',
      'Constructing fractal nodes...',
      'Scanning dimensional shifts...',
      'Detecting cryptographic resonance...',
      'Activating singularity protocols...',
      'Simulating future transactions...',
      'Analyzing hash rate anomalies...',
      'Decrypting distributed ledgers...',
      'Calibrating entropy thresholds...',
      'Initializing blockchain entanglements...',
      'Resolving packet loss in neural layers...',
      'Harnessing predictive computations...',
      'Encoding multiverse data streams...',
      'Compiling inter-network dynamics...',
      'Activating adaptive neural states...',
      'Deploying AI liquidity engines...',
      'Realigning decentralized flux...',
      'Decrypting multidimensional hashes...',
      'Executing blockchain entropy equations...',
      'Detecting node synchronization delays...'
    ];


    let index = 0;

    const interval = setInterval(() => {
      setThinkingCode((prev) => [...prev, codeSnippets[index]]);
      index = (index + 1) % codeSnippets.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll "XION THINKING" section
  useEffect(() => {
    if (thinkingRef.current) {
      thinkingRef.current.scrollTop = thinkingRef.current.scrollHeight;
    }
  }, [thinkingCode]);

  // Auto-scroll "Neural Interface" terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const aiResponses = {
    analyze:
      'Analyzing current market conditions...\n- SOL Price: 225.02$\n- Network congestion: Low\n- Transaction volume: High',
    scan:
      'Scanning Solana network...\n- TPS: 2,547\n- Active validators: 1,842\n- Network health: Optimal',
    status:
      'XION AI Status Report:\n- Neural processors: 100% operational\n- Security protocols: Active\n- Connection strength: Strong',
    help:
      'Available commands:\n- analyze : Market analysis\n- scan : Network scan\n- status : System status\n- clear : Clear terminal\n- help : Show this message',
    hello: 'Greetings, I am XION, your Solana AI Assistant. How may I help you?',
    clear: 'CLEAR_TERMINAL',
  };

  const handleCommand = async (input) => {
    setIsProcessing(true);
    setTerminalOutput((prev) => [...prev, { type: 'user', content: input }]);

    const command = input.toLowerCase().trim();

    if (command === 'clear') {
      setTerminalOutput([]);
    } else if (aiResponses[command]) {
      await simulateTyping(aiResponses[command]);
    } else {
      await simulateTyping('Processing query through neural network...');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await simulateTyping(
        `XION AI Agent: Too many requests are coming in at this moment, try again in several minutes.`
      );
    }

    setIsProcessing(false);
  };

  const simulateTyping = async (text) => {
    const lines = text.split('\n');
    for (const line of lines) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setTerminalOutput((prev) => [...prev, { type: 'system', content: line }]);
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
    <div className="relative min-h-screen bg-black text-[#0f0] font-mono overflow-hidden">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Flex Container for Content */}
      <div className="relative flex flex-col min-h-screen z-10">
        {/* Header */}
        <header className="bg-black bg-opacity-80 border-b border-[#0f0] p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              {/* Remove or comment out this <Bot /> line */}
      {/* <Bot className="w-6 h-6 mr-2 animate-pulse" /> */}
              <div>
                <h1 className="text-2xl font-bold glitch" data-text="XION">
                  XION
                </h1>
                <p className="text-xs text-neonBlue animate-pulse">SOLANA AI AGENT</p>
              </div>
            </div>

            <div className="text-sm text-[#0f0] animate-pulse hidden md:block">
              {statusMessage}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMusic}
                className={`music-button ${isMusicPlaying ? 'playing' : ''}`}
                aria-label="Toggle Music"
              >
                <Music size={20} />
              </button>

              <a
                href="https://x.com/XionAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f0] hover:text-[#00ff88] transition-colors"
              >
                <Twitter size={20} />
              </a>

              <nav className="flex gap-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-colors neon-button ${
                    activeTab === 'overview' ? 'active' : ''
                  }`}
                >
                  <TerminalIcon size={16} />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-colors neon-button ${
                    activeTab === 'upcoming' ? 'active' : ''
                  }`}
                >
                  <Clock size={16} />
                  <span>Upcoming</span>
                </button>
                <button
                  onClick={() => setActiveTab('dex')}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-colors neon-button ${
                    activeTab === 'dex' ? 'active' : ''
                  }`}
                >
                  <DollarSign size={16} />
                  <span>DEX Payments</span>
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
                {/* System Status Section */}
                <section className="bg-black border border-[#0f0] rounded-lg p-6">
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <Bot /> System Status
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black p-4 rounded border border-[#0f0]">
                      <div className="flex items-center gap-2">
                        <Network className="text-[#0f0] animate-pulse" />
                        <div>
                          <h3 className="font-medium">Network</h3>
                          <p className="text-sm text-[#0f0]">Connected to Solana</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black p-4 rounded border border-[#0f0]">
                      <div className="flex items-center gap-2">
                        <Cpu className="text-[#0f0] animate-pulse" />
                        <div>
                          <h3 className="font-medium">Processing</h3>
                          <p className="text-sm text-[#0f0]">Neural Core Active</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black p-4 rounded border border-[#0f0]">
                      <div className="flex items-center gap-2">
                        <Shield className="text-[#0f0] animate-pulse" />
                        <div>
                          <h3 className="font-medium">Security</h3>
                          <p className="text-sm text-[#0f0]">Encryption Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Neural Interface Section */}
                <section className="bg-black border border-[#0f0] rounded-lg p-6">
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <TerminalIcon /> Neural Interface
                  </h2>
                  <div
                    ref={terminalRef}
                    className="bg-black rounded border border-[#0f0] p-4 h-64 overflow-y-auto font-mono text-[#0f0] custom-scrollbar"
                  >
                    {terminalOutput.map((line, i) => (
                      <div
                        key={i}
                        className={`mb-1 ${
                          line.type === 'user'
                            ? 'text-[#00ff88]'
                            : line.type === 'warn'
                            ? 'text-yellow-500'
                            : 'text-[#0f0]'
                        }`}
                      >
                        {line.type === 'user' ? '> ' : '$ '}
                        {line.content}
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="text-[#0f0] animate-pulse">Processing...</div>
                    )}
                  </div>
                  <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-4">
                    <span className="text-[#0f0]">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="flex-grow bg-transparent border-none outline-none focus:ring-0 font-mono placeholder-[#00aa00] text-[#0f0]"
                      placeholder="Enter command or ask a question..."
                      disabled={isProcessing}
                    />
                  </form>
                </section>

                {/* XION THINKING Section */}
                <section className="bg-black border border-[#0f0] rounded-lg p-6">
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <Activity /> XION THINKING
                  </h2>
                  <div
                    ref={thinkingRef}
                    className="bg-black rounded border border-[#0f0] p-4 h-64 overflow-y-auto font-mono text-[#0f0] custom-scrollbar"
                  >
                    {thinkingCode.map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Upcoming Tab Content */}
            {activeTab === 'upcoming' && (
              <div className="bg-black border border-[#0f0] rounded-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f0] opacity-10"></div>

                <h2 className="text-xl mb-6 flex items-center gap-2 relative">
                  <Clock className="text-[#0f0] animate-pulse" /> UPCOMING TOOLS
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Users className="animate-pulse" />,
                      title: 'CHECK TOP 10 HOLDERS',
                      status: 'NEW WALLETS: 0/10',
                      desc: 'Advanced wallet analysis and risk assessment',
                      color: 'from-[#0f0] to-[#0a0]',
                    },
                    {
                      icon: <UserPlus className="animate-pulse" />,
                      title: 'TOP HOLDERS %',
                      status: '0% / 0% / 0% / 0%',
                      desc: 'Distribution analysis and monitoring',
                      color: 'from-[#0f0] to-[#0a0]',
                    },
                    {
                      icon: <Package className="animate-pulse" />,
                      title: 'CHECK SOCIALS',
                      status: 'USED BEFORE / NEW',
                      desc: 'Historical social media tracking',
                      color: 'from-[#0f0] to-[#0a0]',
                    },
                    {
                      icon: <MessageSquare className="animate-pulse" />,
                      title: 'BUNDLE CHECK',
                      status: 'YES / NO',
                      desc: 'AI-powered bundle detection',
                      color: 'from-[#0f0] to-[#0a0]',
                    },
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="group relative bg-black p-6 rounded-lg border border-[#0f0] hover:border-[#00ff88]
                                  transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0
                                    group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg text-[#0f0] flex items-center gap-2">
                            {tool.icon}
                            {tool.title}
                          </h3>
                          <div className="text-xs text-[#0f0] px-2 py-1 rounded-full border border-[#0f0] bg-[#0f0]/10 animate-pulse">
                            SOON
                          </div>
                        </div>

                        <p className="text-[#0f0] text-sm font-mono">{tool.status}</p>
                        <p className="mt-2 text-[#0f0] text-sm">{tool.desc}</p>

                        <div className="mt-4 h-1 w-full bg-[#0a0] rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-[#0f0] rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEX Payments Tab Content */}
            {activeTab === 'dex' && (
              <div className="bg-black border border-[#0f0] rounded-lg p-6">
                <h2 className="text-xl mb-6 flex items-center gap-2">
                  <DollarSign className="text-[#0f0]" /> DEX Payment Verification
                </h2>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-black p-8 rounded-lg border border-[#0f0]">
                    <div className="mb-6">
                      <h3 className="text-lg mb-2 text-[#0f0]">Token Verification</h3>
                      <p className="text-[#0f0] text-sm mb-4">
                        Enter a Solana token address to verify its payment status on DEX
                      </p>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Solana token address"
                        className="w-full bg-black border border-[#0f0] rounded px-4 py-3 text-[#0f0]
                                 placeholder-[#00aa00] focus:outline-none focus:border-[#00ff88] transition-colors
                                 hover:border-[#00ff88]"
                        value={tokenAddress}
                        onChange={(e) => setTokenAddress(e.target.value)}
                      />
                      <Search className="absolute right-3 top-3 text-[#0f0]" size={20} />
                    </div>

                    <button
                      onClick={checkTokenInfo}
                      disabled={dexLoading}
                      className={`w-full mt-4 bg-[#0f0] hover:bg-[#00ff88] text-black font-medium py-3 px-4
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
                      <div
                        className={`mt-6 text-center py-3 px-4 rounded border ${
                          result === 'Paid'
                            ? 'bg-[#0a0] border-[#0f0] text-[#0f0]'
                            : 'bg-red-900 border-red-600 text-red-500'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {result === 'Paid' ? (
                            <Shield className="text-[#0f0]" size={20} />
                          ) : (
                            <AlertCircle className="text-red-500" size={20} />
                          )}
                          <span className="font-medium">Status: {result}</span>
                        </div>
                      </div>
                    )}

                    {error && (
                      <div className="mt-6 text-red-500 bg-red-900 border border-red-600 py-3 px-4 rounded">
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

        {/* Footer */}
        <footer className="mt-auto bg-black bg-opacity-80 border-t border-[#0f0] p-4">
          <div className="max-w-7xl mx-auto text-center text-sm">
            © 2024 XION AI SYSTEMS | QUANTUM NEURAL NETWORK | POWERED BY SOLANA
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
