import { useState, useEffect, useCallback, useTransition } from 'react';
import { Character, CharacterClass } from './types/character';
import { generateCharacter } from './utils/characterGenerator';
import { playRollSound, toggleAudioMute, getAudioMuted } from './utils/audio';
import { Header } from './components/Header';
import { CharacterCard } from './components/CharacterCard';
import { ClassFilter } from './components/ClassFilter';
import { HistorySidebar } from './components/HistorySidebar';
import { Dices, Sparkles, History, Bookmark } from 'lucide-react';

const STORAGE_KEY = 'fantasy_characters_archive';

export default function App() {
  const [character, setCharacter] = useState<Character>(() => generateCharacter('Random'));
  const [history, setHistory] = useState<Character[]>([]);
  const [selectedClassFilter, setSelectedClassFilter] = useState<CharacterClass | 'Random'>('Random');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(getAudioMuted());
  const [isRolling, setIsRolling] = useState(false);
  const [, startTransition] = useTransition();

  // Load history from localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setHistory(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Sync history to localStorage
  const saveHistoryToStorage = (updatedList: Character[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList.slice(0, 50)));
    } catch {
      // Ignore localStorage quota errors
    }
  };

  // Primary Generate Character Handler
  const handleGenerateCharacter = useCallback(() => {
    setIsRolling(true);
    playRollSound();

    startTransition(() => {
      const newChar = generateCharacter(selectedClassFilter);
      setCharacter(newChar);
      setHistory((prev) => {
        // Prepend current character to history so user can navigate back
        const updated = [newChar, ...prev.filter((c) => c.id !== newChar.id)].slice(0, 40);
        saveHistoryToStorage(updated);
        return updated;
      });
    });

    setTimeout(() => {
      setIsRolling(false);
    }, 280);
  }, [selectedClassFilter]);

  // Keyboard shortcut: Space or 'g' to generate character
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.code === 'Space' || e.key.toLowerCase() === 'g') {
        e.preventDefault();
        handleGenerateCharacter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerateCharacter]);

  const handleToggleFavorite = (id: string) => {
    if (character.id === id) {
      setCharacter((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
    }
    setHistory((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c));
      saveHistoryToStorage(updated);
      return updated;
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleToggleAudio = () => {
    const muted = toggleAudioMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Header */}
      <Header
        isMuted={isMuted}
        onToggleAudio={handleToggleAudio}
        savedCount={history.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-10 space-y-8">
        {/* Generator Controls Hero */}
        <section className="text-center space-y-6 pt-2">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/90 font-mono-numbers">
              Procedural Adventurer Engine
            </span>
            <h1 className="font-fantasy text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Forge Your Champion
            </h1>
            <p className="text-sm md:text-base text-slate-400 text-pretty">
              Roll unique names, legendary classes, combat attributes, armaments, and origin chronicles with a single click.
            </p>
          </div>

          {/* Class Filter Bar */}
          <div className="flex justify-center">
            <ClassFilter
              selectedClass={selectedClassFilter}
              onSelectClass={(cls) => setSelectedClassFilter(cls)}
            />
          </div>

          {/* Core Action: Generate Character Button */}
          <div className="flex flex-col items-center justify-center gap-3 pt-2">
            <button
              onClick={handleGenerateCharacter}
              disabled={isRolling}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-bold font-fantasy tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-500/50 ${
                isRolling
                  ? 'bg-amber-600 text-slate-950 scale-95 shadow-amber-500/40 ring-4 ring-amber-400/30'
                  : 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 hover:shadow-amber-500/30 hover:shadow-2xl'
              }`}
              style={{
                boxShadow: isRolling
                  ? '0 0 35px rgba(245, 158, 11, 0.6)'
                  : '0 10px 25px -5px rgba(245, 158, 11, 0.35)'
              }}
              title="Click or press Space / G"
            >
              <Dices
                className={`w-6 h-6 transition-transform duration-300 ${
                  isRolling ? 'rotate-180 scale-110' : 'group-hover:rotate-12'
                }`}
              />
              <span className="font-extrabold">Generate Character</span>
              <Sparkles className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Quick helper tip */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 text-[11px] font-mono-numbers bg-slate-900 border border-slate-800 rounded text-slate-300">
                Space
              </kbd>
              <span>or</span>
              <kbd className="px-1.5 py-0.5 text-[11px] font-mono-numbers bg-slate-900 border border-slate-800 rounded text-slate-300">
                G
              </kbd>
              <span>to reroll instantly</span>
            </div>
          </div>
        </section>

        {/* Character Card Showcase */}
        <section aria-label="Character Sheet" className="transition-all duration-300">
          <CharacterCard
            character={character}
            isFavorite={character.isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>

        {/* Recent Roster Quick Bar (when user has created multiple characters) */}
        {history.length > 1 && (
          <section className="space-y-3 pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-numbers">
                <History className="w-4 h-4 text-amber-400" />
                <span>Recent Generations</span>
              </div>
              <button
                onClick={() => setIsHistoryOpen(true)}
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
              >
                View All ({history.length})
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {history.slice(0, 4).map((item) => {
                const isCurrent = item.id === character.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCharacter(item)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? 'border-amber-500/60 bg-amber-500/10'
                        : 'border-slate-800/80 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white truncate font-fantasy">
                        {item.name}
                      </span>
                      {item.isFavorite && (
                        <Bookmark className="w-3 h-3 text-amber-400 shrink-0 fill-amber-400" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {item.characterClass} · {item.race}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* History Archive Sidebar Drawer */}
      <HistorySidebar
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        characters={history}
        currentId={character.id}
        onSelectCharacter={(char) => setCharacter(char)}
        onClearHistory={handleClearHistory}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Clean Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Fantasy Character Creator · Procedural Hero Generator</span>
          <div className="flex items-center gap-4 text-slate-400">
            <span>D&D 5e Inspired Mechanics</span>
            <span>·</span>
            <span>Web Audio Synthesizer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
