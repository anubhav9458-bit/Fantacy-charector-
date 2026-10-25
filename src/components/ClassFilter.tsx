import React from 'react';
import { CharacterClass } from '../types/character';

interface ClassFilterProps {
  selectedClass: CharacterClass | 'Random';
  onSelectClass: (c: CharacterClass | 'Random') => void;
}

const CLASS_OPTIONS: { label: string; value: CharacterClass | 'Random' }[] = [
  { label: 'All Classes', value: 'Random' },
  { label: 'Warrior', value: 'Warrior' },
  { label: 'Mage', value: 'Mage' },
  { label: 'Rogue', value: 'Rogue' },
  { label: 'Archer', value: 'Archer' },
  { label: 'Paladin', value: 'Paladin' },
  { label: 'Necromancer', value: 'Necromancer' },
  { label: 'Druid', value: 'Druid' },
  { label: 'Bard', value: 'Bard' }
];

export const ClassFilter: React.FC<ClassFilterProps> = ({ selectedClass, onSelectClass }) => {
  return (
    <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto max-w-full scrollbar-none">
      {CLASS_OPTIONS.map((opt) => {
        const isActive = selectedClass === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onSelectClass(opt.value)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
              isActive
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
