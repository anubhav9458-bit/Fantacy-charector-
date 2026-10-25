import React, { useState } from 'react';
import { Character } from '../types/character';
import { CLASS_DEFINITIONS } from '../data/fantasyData';
import { ClassIcon } from './ClassIcon';
import { formatStatModifier, formatCharacterAsText } from '../utils/characterGenerator';
import { Copy, Check, Download, Bookmark, BookmarkCheck, Shield, Heart, Zap, Sparkles } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onToggleFavorite,
  isFavorite = false
}) => {
  const [copied, setCopied] = useState(false);
  const classDef = CLASS_DEFINITIONS[character.characterClass];

  const handleCopy = async () => {
    try {
      const text = formatCharacterAsText(character);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const text = formatCharacterAsText(character);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name.replace(/\s+/g, '_')}_Character_Sheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const statsList: { key: keyof typeof character.stats; label: string; full: string }[] = [
    { key: 'strength', label: 'STR', full: 'Strength' },
    { key: 'dexterity', label: 'DEX', full: 'Dexterity' },
    { key: 'constitution', label: 'CON', full: 'Constitution' },
    { key: 'intelligence', label: 'INT', full: 'Intelligence' },
    { key: 'wisdom', label: 'WIS', full: 'Wisdom' },
    { key: 'charisma', label: 'CHA', full: 'Charisma' }
  ];

  return (
    <article
      id="creator"
      className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 relative"
      style={{
        boxShadow: `0 20px 45px -15px ${classDef.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.05)`
      }}
    >
      {/* Subtle top crest glow banner */}
      <div
        className="h-1.5 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${classDef.glowColor.replace('0.25', '0.8')}, transparent)`
        }}
      />

      <div className="p-6 md:p-8 space-y-8">
        {/* Top Section: Character Identity (Name & Class display) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-start gap-4 md:gap-5">
            {/* Class Icon Emblem */}
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0 border ${classDef.borderColor} bg-slate-950/80 transition-all duration-300 shadow-inner`}
              style={{ boxShadow: `0 0 25px -5px ${classDef.glowColor}` }}
              aria-label={`${character.characterClass} Crest`}
            >
              <ClassIcon
                characterClass={character.characterClass}
                size={38}
                className={classDef.accentColor}
              />
            </div>

            {/* Character Name & Class Details */}
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Character Class Label - Displayed prominently */}
                <span className={`text-xs font-semibold tracking-wider uppercase ${classDef.accentColor}`}>
                  {character.characterClass}
                </span>
                <span className="text-slate-600 text-xs" aria-hidden="true">·</span>
                <span className="text-xs text-slate-400">
                  Level {character.level}
                </span>
                <span className="text-slate-600 text-xs" aria-hidden="true">·</span>
                <span className="text-xs text-slate-400">
                  {character.race}
                </span>
                <span className="text-slate-600 text-xs" aria-hidden="true">·</span>
                <span className="text-xs text-slate-400">
                  {character.alignment}
                </span>
              </div>

              {/* Character Name - Prominently Displayed */}
              <h2 className="font-fantasy text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {character.name}
              </h2>

              {/* Epithet / Title */}
              <p className="text-sm text-amber-200/80 italic font-serif">
                "{character.title}"
              </p>

              {/* Class Subtitle */}
              <p className="text-xs text-slate-400 pt-0.5">
                {classDef.title} — {classDef.description}
              </p>
            </div>
          </div>

          {/* Quick Actions (Copy, Download, Bookmark) */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 pt-1">
            <button
              onClick={handleCopy}
              className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              title="Copy Character Sheet"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              title="Download Character Sheet (.txt)"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Download</span>
            </button>

            {onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(character.id)}
                className={`p-2 text-xs font-medium border rounded-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                  isFavorite
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
                title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
                aria-label="Toggle favorite"
              >
                {isFavorite ? (
                  <BookmarkCheck className="w-4 h-4 text-amber-400" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Vitals Strip (HP, Mana, Armor Class) */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Health Points</div>
              <div className="text-lg font-bold font-mono-numbers text-slate-100">
                {character.hp} <span className="text-xs text-slate-500 font-normal">/ {character.maxHp}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Energy / Mana</div>
              <div className="text-lg font-bold font-mono-numbers text-slate-100">
                {character.mana}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Armor Class</div>
              <div className="text-lg font-bold font-mono-numbers text-slate-100">
                {character.armorClass}
              </div>
            </div>
          </div>
        </div>

        {/* Attributes Section (STR, DEX, CON, INT, WIS, CHA) */}
        <div id="stats" className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-fantasy text-sm uppercase tracking-wider text-slate-300 font-semibold">
              Ability Scores & Modifiers
            </h3>
            <span className="text-xs text-slate-500 font-mono-numbers">D&D 5e Standard Roll (4d6 drop lowest)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {statsList.map(({ key, label, full }) => {
              const val = character.stats[key];
              const isPrimary = classDef.primaryStat === key;
              const isSecondary = classDef.secondaryStat === key;

              return (
                <div
                  key={key}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isPrimary
                      ? `${classDef.borderColor} bg-slate-950/90 shadow-sm`
                      : isSecondary
                      ? 'border-slate-700/80 bg-slate-950/60'
                      : 'border-slate-800/80 bg-slate-950/40'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className={`text-xs font-bold tracking-wider ${isPrimary ? classDef.accentColor : 'text-slate-400'}`}>
                      {label}
                    </span>
                    {isPrimary && (
                      <span className="text-[9px] uppercase tracking-tighter text-amber-400 font-semibold" title="Primary Class Stat">
                        ★
                      </span>
                    )}
                  </div>
                  <div className="text-xl font-bold text-white font-mono-numbers mt-0.5">
                    {val}
                  </div>
                  <div className="text-xs font-medium font-mono-numbers text-amber-400/90">
                    {formatStatModifier(val)}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {full}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weapons & Signature Abilities */}
        <div id="abilities" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Armament */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Primary Armament
            </div>
            <div className="text-sm font-medium text-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{character.weapon}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Balanced for high-velocity offensive execution and ritual channeling.
            </p>
          </div>

          {/* Signature Technique */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Signature Technique
              </div>
              <span className="text-[11px] text-slate-500">
                {character.signatureAbility.type}
              </span>
            </div>
            <div className={`text-sm font-semibold ${classDef.accentColor} flex items-center gap-2`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{character.signatureAbility.name}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {character.signatureAbility.description}
            </p>
          </div>
        </div>

        {/* Origin Lore & Quirk */}
        <div id="lore" className="space-y-4 pt-2 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">Origin Background</span>
              <p className="text-slate-200 font-medium">{character.origin}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">Character Quirk</span>
              <p className="text-slate-300 italic">{character.quirk}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-2">
            <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">Heroic Chronicle</span>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              {character.backstory}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
