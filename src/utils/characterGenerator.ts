import { Character, CharacterClass, CharacterStats } from '../types/character';
import {
  CLASS_DEFINITIONS,
  FANTASY_FIRST_NAMES,
  FANTASY_SURNAMES,
  FANTASY_TITLES,
  RACES,
  ALIGNMENTS,
  ORIGINS,
  QUIRKS,
  BACKSTORY_TEMPLATES,
  FANTASY_LOCATIONS
} from '../data/fantasyData';

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3d6 roll simulation with slight hero bias (drop lowest of 4d6 standard RPG roll)
function rollAttribute(): number {
  const rolls = [
    getRandomInt(1, 6),
    getRandomInt(1, 6),
    getRandomInt(1, 6),
    getRandomInt(1, 6)
  ].sort((a, b) => a - b);
  return rolls[1] + rolls[2] + rolls[3]; // drop the lowest
}

export function generateCharacterName(): { name: string; title: string } {
  const firstName = getRandomElement(FANTASY_FIRST_NAMES);
  const surname = getRandomElement(FANTASY_SURNAMES);
  const title = getRandomElement(FANTASY_TITLES);

  const styleChoice = Math.random();
  let fullName = '';

  if (styleChoice < 0.45) {
    // Aeloria Duskwalker
    fullName = `${firstName} ${surname}`;
  } else if (styleChoice < 0.8) {
    // Kaelen Emberstride the Unbroken
    fullName = `${firstName} ${surname}`;
  } else {
    // Morrigan the Silent
    fullName = `${firstName}`;
  }

  return { name: fullName, title };
}

export function generateCharacter(lockedClass?: CharacterClass | 'Random'): Character {
  const classesList: CharacterClass[] = [
    'Warrior',
    'Mage',
    'Rogue',
    'Archer',
    'Paladin',
    'Necromancer',
    'Druid',
    'Bard'
  ];

  const selectedClass: CharacterClass =
    lockedClass && lockedClass !== 'Random'
      ? lockedClass
      : getRandomElement(classesList);

  const classDef = CLASS_DEFINITIONS[selectedClass];
  const { name, title } = generateCharacterName();
  const race = getRandomElement(RACES);
  const alignment = getRandomElement(ALIGNMENTS);
  const origin = getRandomElement(ORIGINS);
  const quirk = getRandomElement(QUIRKS);
  const weapon = getRandomElement(classDef.signatureWeapons);
  const ability = getRandomElement(classDef.signatureAbilities);
  const location = getRandomElement(FANTASY_LOCATIONS);

  // Generate base stats
  const baseStats: CharacterStats = {
    strength: rollAttribute(),
    dexterity: rollAttribute(),
    constitution: rollAttribute(),
    intelligence: rollAttribute(),
    wisdom: rollAttribute(),
    charisma: rollAttribute()
  };

  // Add class primary & secondary stat bonuses to ensure believable archetypes
  baseStats[classDef.primaryStat] = Math.min(20, baseStats[classDef.primaryStat] + getRandomInt(2, 4));
  baseStats[classDef.secondaryStat] = Math.min(19, baseStats[classDef.secondaryStat] + getRandomInt(1, 3));

  const level = 3; // Starting seasoned adventurer
  const conMod = Math.floor((baseStats.constitution - 10) / 2);
  const dexMod = Math.floor((baseStats.dexterity - 10) / 2);
  const primeMod = Math.floor((baseStats[classDef.primaryStat] - 10) / 2);

  const maxHp = Math.max(12, classDef.hitDie + conMod + (level - 1) * (Math.floor(classDef.hitDie / 2) + 1 + conMod));
  const hp = maxHp;
  const mana = Math.max(15, 20 + primeMod * 8);

  let armorClass = 10 + dexMod;
  if (selectedClass === 'Warrior' || selectedClass === 'Paladin') {
    armorClass += 6; // heavy armor + shield
  } else if (selectedClass === 'Rogue' || selectedClass === 'Archer') {
    armorClass += 3; // studded leather
  } else {
    armorClass += 1; // mage robes / mystic barrier
  }

  // Generate backstory
  const template = getRandomElement(BACKSTORY_TEMPLATES);
  const backstory = template
    .replace('{name}', name)
    .replace('{class}', selectedClass)
    .replace('{weapon}', weapon)
    .replace('{race}', race)
    .replace('{location}', location)
    .replace('{title}', title);

  return {
    id: `char_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name,
    title,
    characterClass: selectedClass,
    race,
    alignment,
    level,
    hp,
    maxHp,
    mana,
    armorClass,
    stats: baseStats,
    signatureAbility: ability,
    weapon,
    origin,
    backstory,
    quirk,
    createdAt: Date.now(),
    isFavorite: false
  };
}

export function formatStatModifier(value: number): string {
  const mod = Math.floor((value - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function formatCharacterAsText(char: Character): string {
  return `========================================
${char.name} ${char.title ? `(${char.title})` : ''}
Class: ${char.characterClass} · Level ${char.level}
Race: ${char.race} · Alignment: ${char.alignment}
========================================

ATTRIBUTES:
- STR: ${char.stats.strength} (${formatStatModifier(char.stats.strength)})
- DEX: ${char.stats.dexterity} (${formatStatModifier(char.stats.dexterity)})
- CON: ${char.stats.constitution} (${formatStatModifier(char.stats.constitution)})
- INT: ${char.stats.intelligence} (${formatStatModifier(char.stats.intelligence)})
- WIS: ${char.stats.wisdom} (${formatStatModifier(char.stats.wisdom)})
- CHA: ${char.stats.charisma} (${formatStatModifier(char.stats.charisma)})

COMBAT VITALS:
- HP: ${char.hp}/${char.maxHp}
- Mana/Focus: ${char.mana}
- Armor Class: ${char.armorClass}

EQUIPMENT & ARTS:
- Primary Armament: ${char.weapon}
- Signature Technique: ${char.signatureAbility.name} [${char.signatureAbility.type}]
  ${char.signatureAbility.description}

BACKGROUND & ORIGIN:
- Origin: ${char.origin}
- Quirk: ${char.quirk}

LORE:
${char.backstory}
========================================`;
}
