import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, ChevronRight, ShieldCheck, Github, BookOpen, UserPlus, Trophy, Skull } from 'lucide-react';
import { TEAM_NAME, MOTTO, ASCII_ART, HELP_TEXT, MEMBERS, GITHUB_URL, WRITEUPS_URL, APPLICATION_URL, CTFTIME_URL } from '../constants';

interface LogEntry {
  type: 'command' | 'response' | 'error' | 'success' | 'system';
  content: string | string[];
}

const Dashboard: React.FC<{ members: typeof MEMBERS }> = ({ members }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-12 w-full max-w-6xl mx-auto p-6 md:p-12 pb-24"
    >
      {/* Hero Section */}
      <header className="text-center space-y-6 pt-8">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-4 border-4 border-[#00d4ff] rounded-full mb-4 shadow-[0_0_30px_rgba(0,212,255,0.4)] bg-[#00d4ff]/10"
        >
          <Skull className="w-16 h-16 text-[#00d4ff]" />
        </motion.div>
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter glow-text italic uppercase leading-none">{TEAM_NAME}</h1>
          <p className="text-xl md:text-2xl text-[#00d4ff] font-mono tracking-[0.3em] uppercase opacity-80">{MOTTO}</p>
        </div>
      </header>

      {/* Dashboard Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-y border-[#00d4ff]/20 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00d4ff]/5 pointer-events-none" />
        <div className="space-y-6 relative z-10">
          <h2 className="text-3xl font-black flex items-center gap-3 uppercase tracking-tighter italic">
            <ShieldCheck className="text-[#00d4ff] w-8 h-8" />
            Operational Directives
          </h2>
          <ul className="space-y-4 text-[#00d4ff]/80 text-lg font-mono">
            <li className="flex gap-3 items-start"><span className="text-[#00d4ff] font-bold">[0x01]</span> Dominate global CTFs and secure a top position on CTFTime.</li>
            <li className="flex gap-3 items-start"><span className="text-[#00d4ff] font-bold">[0x02]</span> Develop cutting-edge exploitation techniques and tooling.</li>
            <li className="flex gap-3 items-start"><span className="text-[#00d4ff] font-bold">[0x03]</span> Maintain a repository of elite security research and writeups.</li>
            <li className="flex gap-3 items-start"><span className="text-[#00d4ff] font-bold">[0x04]</span> Foster the next generation of cryptographic and RE specialists.</li>
          </ul>
        </div>
        <div className="bg-[#00d4ff]/5 p-10 border border-[#00d4ff]/30 rounded-sm italic text-center relative group">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff]" />
          <p className="text-2xl font-serif text-white leading-relaxed">"The digital ocean is infinite, our exploitation is absolute. We cross the borders they haven't even mapped yet."</p>
          <cite className="block mt-6 text-[#00d4ff] font-mono not-italic tracking-widest">— CAPTAIN ADVAY, TBP LEAD</cite>
        </div>
      </section>

      {/* Team Grid */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold uppercase tracking-tight">The Elite Crew</h2>
          <span className="text-[10px] opacity-40 uppercase tracking-widest">Active Members: {members.length}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gradient-to-br from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/20 hover:border-[#00d4ff]/60 transition-all group relative overflow-hidden"
            >
              <div className="absolute -bottom-4 -right-4 p-2 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
                <Skull className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1 uppercase italic tracking-tighter">{member.name}</h3>
              <p className="text-xs text-[#00d4ff] font-bold mb-4 uppercase tracking-[0.2em]">{member.role}</p>
              <p className="text-sm text-[#00d4ff]/70 leading-relaxed">"{member.bio}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <ActionButton icon={<Trophy />} label="CTFTime" href={CTFTIME_URL} />
        <ActionButton icon={<BookOpen />} label="Intel/Writeups" href={WRITEUPS_URL} />
        <ActionButton icon={<UserPlus />} label="Join the Crew" href={APPLICATION_URL} />
      </div>

      <footer className="mt-24 text-center space-y-4">
        <div className="text-[10px] opacity-30 uppercase tracking-[0.5em] flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-white opacity-20"></span>
          Authorized Fleet Portal access only
          <span className="w-12 h-[1px] bg-white opacity-20"></span>
        </div>
        <p className="text-[9px] opacity-20">{TEAM_NAME.toUpperCase()} © 2024 - NO RIGHTS RESERVED. CODE IS FREE.</p>
      </footer>
    </motion.div>
  );
};

const ActionButton: React.FC<{ icon: React.ReactNode, label: string, href: string }> = ({ icon, label, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] font-black uppercase tracking-widest hover:bg-[#00d4ff] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    { type: 'system', content: ASCII_ART },
    { type: 'system', content: `[SYSTEM] CONNECTION ESTABLISHED TO TB-V1.0-PIRATE_CORE` },
    { type: 'system', content: `[SYSTEM] STATUS: STOWAWAY DETECTED. ENFORCING SANDBOX.` },
    { type: 'system', content: `Type 'help' to find a way in.` },
  ]);
  const [isLogged, setIsLogged] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const args = trimmed.split(' ');
    const baseCmd = args[0];

    const newHistory: LogEntry[] = [...history, { type: 'command', content: `${isLogged ? 'captain' : 'guest'}@tbp:~$ ${cmd}` }];

    switch (baseCmd) {
      case 'help':
        newHistory.push({ type: 'response', content: HELP_TEXT });
        break;
      case 'about':
        newHistory.push({ type: 'response', content: [
          TEAM_NAME,
          MOTTO,
          '',
          "We are a group of security enthusiasts sailing the digital seas.",
          "Specializing in Crypto, Rev, and Web Exploitation.",
          "Est. 2024",
          "",
          "   ☠️   SETTING SAIL FOR EXPLOITS   ☠️",
          "          _.._......_.._",
          "        .' .-'      '-. '.",
          "       /  /            \\  \\",
          "      |  |              |  |",
          "      \\  \\            /  /",
          "       '. '._      _.' .'",
          "         '.._''--''_..'"
        ].join('\n') });
        break;
      case 'ls':
        newHistory.push({ type: 'response', content: 'manifesto.txt  links.lnk  ship_logs.db  SECURITY.md  README.md' });
        break;
      case 'cat':
        if (args[1] === 'manifesto.txt') {
          newHistory.push({ type: 'response', content: "In a world of closed gates, we choose the open sea. Knowledge should be free, and security should be robust. We hunt vulnerabilities because we care about the structure." });
        } else if (args[1] === 'security.md') {
          newHistory.push({ type: 'response', content: "Our team focuses on vulnerability research. Report issues via recruitment form." });
        } else if (args[1] === 'readme.md') {
          newHistory.push({ type: 'response', content: "PIRATE'S NOTE: ship_logs.db holds the key to the captain's quarters." });
        } else if (args[1] === 'links.lnk') {
          newHistory.push({ type: 'response', content: `[+] GITHUB: ${GITHUB_URL}\n[+] WRITEUPS: ${WRITEUPS_URL}\n[+] CTFTIME: ${CTFTIME_URL}` });
        } else if (args[1] === 'ship_logs.db') {
          newHistory.push({ type: 'response', content: "LOG_01: Voyage started. Weather clear.\nLOG_02: Encountered heavy crypto-storms.\nLOG_03: Secret key stashed in the binary. \n\nENCODED_PASS: dGhlLWJsdWUtY2FwdGFpbg==" });
        } else if (!args[1]) {
          newHistory.push({ type: 'error', content: 'Usage: cat <filename>' });
        } else {
          newHistory.push({ type: 'error', content: `File not found: ${args[1]}` });
        }
        break;
      case 'members':
        if (isLogged) {
          const memberList = MEMBERS.map(m => `[${m.role}] ${m.name}: ${m.bio}`).join('\n');
          newHistory.push({ type: 'success', content: `SECURE ACCESS GRANTED - THE CREW:\n\n${memberList}` });
        } else {
          newHistory.push({ type: 'error', content: 'ACCESS DENIED: Required role "Commander". Authenticate first.' });
        }
        break;
      case 'links':
        newHistory.push({ type: 'response', content: [
          `GitHub: ${GITHUB_URL}`,
          `Writeups: ${WRITEUPS_URL}`,
          `CTFTime: ${CTFTIME_URL}`,
          `Apply: ${APPLICATION_URL}`
        ].join('\n') });
        break;
      case 'whoami':
        newHistory.push({ type: 'response', content: isLogged ? "USER: Captain advay. Rank: Commander. IP: 127.0.0.1 (MASQUERADED)" : "USER: Anonymous. Rank: Stowaway. IP: [REDACTED]" });
        break;
      case 'hack':
        newHistory.push({ type: 'system', content: 'INITIALIZING BYPASS SEQUENCE...' });
        newHistory.push({ type: 'error', content: 'SECURITY BREACH DETECTED. ANTI-CHEAT ACTIVATED.' });
        newHistory.push({ type: 'system', content: 'Tip: We don\'t hack our own ship. Try to login properly.' });
        break;
      case 'dashboard':
        if (isLogged) {
          setShowDashboard(true);
        } else {
          newHistory.push({ type: 'error', content: 'ACCESS DENIED: Command reserved for authorized crew.' });
        }
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'login':
        if (args[1] === 'the-blue-captain') {
          setIsLogged(true);
          newHistory.push({ type: 'success', content: 'AUTH SUCCESSFUL. SYNCING FLEET DATA...' });
          newHistory.push({ type: 'system', content: "Type 'dashboard' to enter the main hub or continue using terminal." });
          setTimeout(() => setShowDashboard(true), 1200);
        } else if (!args[1]) {
          newHistory.push({ type: 'system', content: 'Usage: login [password]. Did you find the encoded key yet?' });
        } else {
          newHistory.push({ type: 'error', content: 'INVALID PASSCODE. ALARM TRIGGERED.' });
        }
        break;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', content: `Unknown command: ${baseCmd}. Type 'help' for command list.` });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (input) { handleCommand(input); setInput(''); } };

  if (showDashboard) {
    return (
      <div className="fixed inset-0 bg-[#050b15] text-[#00d4ff] font-mono overflow-y-auto z-[100] selection:bg-[#00d4ff] selection:text-black">
        {/* CRT Scanlines and Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[110] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
        
        {/* Global Glow */}
        <div className="pointer-events-none fixed inset-0 z-[109] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,212,255,0.05)_100%)]" />

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDashboard(false)}
          className="fixed top-8 left-8 z-[120] flex items-center gap-3 px-5 py-2 bg-[#00d4ff] text-black text-[12px] font-black hover:bg-white transition-all uppercase tracking-widest shadow-lg"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Terminal Shell
        </motion.button>
        <Dashboard members={MEMBERS} />
        
        <style>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #050b15;
          }
          ::-webkit-scrollbar-thumb {
            background: #00d4ff22;
            border: 1px solid #00d4ff44;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #00d4ff66;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div 
      className="flex flex-col h-screen bg-[#050b15] text-[#00d4ff] font-mono p-4 md:p-8 overflow-hidden selection:bg-[#00d4ff] selection:text-black shadow-[inset_0_0_100px_rgba(0,212,255,0.1)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,11,21,0.2)_100%)]" />

      <div className="flex items-center gap-4 mb-4 border-b border-[#00d4ff]/30 pb-2">
        <TerminalIcon className="w-6 h-6 animate-pulse text-[#00d4ff]" />
        <div className="flex-1">
          <h1 className="text-xl font-bold tracking-widest uppercase glow-text">{TEAM_NAME}</h1>
          <p className="text-[10px] opacity-60 tracking-[0.2em]">{MOTTO}</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[10px] opacity-40 font-bold">NODE: TB-PIRATE-HOST</p>
          <p className="text-[10px] opacity-40">ENCRYPTION: QUANTUM_SEC</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto mb-4 custom-scrollbar space-y-2 pr-2 scroll-smooth"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {history.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={`whitespace-pre-wrap glow-text ${
              entry.type === 'error' ? 'text-red-400' : 
              entry.type === 'success' ? 'text-green-400' : 
              entry.type === 'command' ? 'text-white font-bold' : 
              'text-[#00d4ff]'
            }`}
          >
            {entry.content}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 group relative border-t border-[#00d4ff]/10 pt-4">
        <span className="text-[#00d4ff] font-bold">{isLogged ? 'captain' : 'guest'}@tbp:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 py-1 text-white placeholder-[#00d4ff]/20 caret-[#00d4ff]"
          placeholder=""
          autoFocus
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input"
        />
      </form>

      <div className="mt-4 pt-2 border-t border-[#00d4ff]/10 flex justify-between items-end">
        <div className="text-[10px] opacity-30 italic">
          {isLogged 
            ? "CMD: Type 'dashboard' to enter mission control." 
            : "INFILTRATE: Decode PASS from ship_logs.db."}
        </div>
        <div className="flex gap-4 text-[9px] opacity-50 uppercase tracking-tighter">
          <span className="hidden sm:inline">SECTOR: BLUE_HARBOR</span>
          <span>{new Date().toISOString()}</span>
          <span className={`${isLogged ? 'text-green-500 font-bold' : 'animate-pulse text-blue-500'}`}>
            {isLogged ? '[ SECURE_CHANNEL_V1 ]' : '● SYNCING_...'}
          </span>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 212, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 212, 255, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
};
