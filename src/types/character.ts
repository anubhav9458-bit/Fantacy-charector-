export type CharacterClass =
  | 'Mage'
  | 'Rogue'
  | 'Warrior'
  | 'Archer'
  | 'Paladin'
  | 'Necromancer'
  | 'Druid'
  | 'Bard';

export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  characterClass: CharacterClass;
  race: string;
  alignment: string;
  level: number;
  hp: number;
  maxHp: number;
  mana: number;
  armorClass: number;
  stats: CharacterStats;
  signatureAbility: {
    name: string;
    description: string;
    type: string;
  };
  weapon: string;
  origin: string;
  backstory: string;
  quirk: string;
  createdAt: number;
  isFavorite?: boolean;
}

export interface ClassDefinition {
  name: CharacterClass;
  title: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  primaryStat: keyof CharacterStats;
  secondaryStat: keyof CharacterStats;
  hitDie: number; // e.g. 6, 8, 10, 12
  signatureWeapons: string[];
  signatureAbilities: {
    name: string;
    description: string;
    type: string;
  }[];
}
