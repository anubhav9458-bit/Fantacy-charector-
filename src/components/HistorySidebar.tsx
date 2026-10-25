import React from 'react';
import { Character } from '../types/character';
import { CLASS_DEFINITIONS } from '../data/fantasyData';
import { ClassIcon } from './ClassIcon';
import { Trash2, X, ChevronRight, Bookmark } from 'lucide-react';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  characters: Character[];
  currentId?: string;
  onSelectCharacter: (char: Character) => void;
  onClearHistory: () => void;
  onToggleFavorite: (id: string) => void;
}

export const HistorySidebar: React.FC<HistorySidebarProps> = ({
  isOpen,
  onClose,
  characters,
  currentId,
  onSelectCharacter,
  onClearHistory,
  onToggleFavorite
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className="relative w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div>
            <h3 className="font-fantasy text-lg font-bold text-white">Character Archive</h3>
            <p className="text-xs text-slate-400">
              {characters.length} character{characters.length === 1 ? '' : 's'} recorded this session
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close archive"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {characters.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No previous characters yet. Click &quot;Generate Character&quot; to begin your roster.
            </div>
          ) : (
            characters.map((char) => {
              const isCurrent = char.id === currentId;
              const classDef = CLASS_DEFINITIONS[char.characterClass];

              return (
                <div
                  key={char.id}
                  onClick={() => {
                    onSelectCharacter(char);
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCurrent
                      ? 'border-amber-500/50 bg-amber-500/10'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${classDef.borderColor} bg-slate-900`}
                    >
                      <ClassIcon
                        characterClass={char.characterClass}
                        size={20}
                        className={classDef.accentColor}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white truncate font-fantasy">
                          {char.name}
                        </span>
                        {char.isFavorite && (
                          <Bookmark className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 truncate">
                        <span className={classDef.accentColor}>{char.characterClass}</span>
                        <span>·</span>
                        <span>{char.race}</span>
                        <span>·</span>
                        <span className="font-mono-numbers">HP {char.hp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(char.id);
                      }}
                      className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors"
                      title={char.isFavorite ? 'Remove favorite' : 'Mark favorite'}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${char.isFavorite ? 'text-amber-400 fill-amber-400' : ''}`}
                      />
                    </button>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {characters.length > 0 && (
          <div className="p-4 border-t border-slate-800 flex items-center justify-between gap-4 bg-slate-950/80">
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
