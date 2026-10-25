import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  isMuted: boolean;
  onToggleAudio: () => void;
  savedCount: number;
  onOpenHistory?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMuted,
  onToggleAudio,
  savedCount,
  onOpenHistory
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
        <span className="font-fantasy font-bold text-lg md:text-xl text-amber-300 tracking-wide">
          Fantasy Character Creator
        </span>
      </div>

      {/* Zone 2: Concise single-line navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
        <a href="#creator" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
          Character Sheet
        </a>
        <a href="#stats" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
          Attributes
        </a>
        <a href="#abilities" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
          Combat & Arts
        </a>
        <a href="#lore" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
          Origin Lore
        </a>
        {savedCount > 0 && (
          <button
            onClick={onOpenHistory}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Archive ({savedCount})
          </button>
        )}
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onToggleAudio}
          className="px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          aria-label={isMuted ? 'Enable roll sound' : 'Mute roll sound'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
