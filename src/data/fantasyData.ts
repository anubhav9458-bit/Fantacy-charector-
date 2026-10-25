import { CharacterClass, ClassDefinition } from '../types/character';

export const CLASS_DEFINITIONS: Record<CharacterClass, ClassDefinition> = {
  Warrior: {
    name: 'Warrior',
    title: 'Vanguard of Iron & Steel',
    description: 'Masters of arms and physical fortitude who hold the front line and break enemy ranks with devastating force.',
    accentColor: 'text-rose-400',
    badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    borderColor: 'border-rose-500/30',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    primaryStat: 'strength',
    secondaryStat: 'constitution',
    hitDie: 10,
    signatureWeapons: [
      'Tempered Valyrian Greatsword',
      'Dragon-Forged Battleaxe',
      'Crested Halberd of the Vanguard',
      'Twin Flanged Maces',
      'Heavy Bastard Sword & Spiked Pavise'
    ],
    signatureAbilities: [
      { name: 'Whirlwind Cleave', description: 'Sweeps weapon in a devastating arc, tearing through all adjacent adversaries.', type: 'Combat Action' },
      { name: 'Seismic Stomp', description: 'Slams foot into the earth, sending a shockwave that destabilizes enemies.', type: 'Crowd Control' },
      { name: 'Unyielding Rampart', description: 'Hardens stance to absorb lethal strikes without yielding a single pace.', type: 'Defensive Stance' },
      { name: 'Battle Cry of Oakhaven', description: 'Roars a rally cry that bolsters allies and strikes fear into foes.', type: 'Rallying Roar' }
    ]
  },
  Mage: {
    name: 'Mage',
    title: 'Weaver of Arcane Realities',
    description: 'Scholars of esoteric mysteries capable of bending reality, conjuring elemental fury, and unraveling space.',
    accentColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    borderColor: 'border-indigo-500/30',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    primaryStat: 'intelligence',
    secondaryStat: 'wisdom',
    hitDie: 6,
    signatureWeapons: [
      'Starlight Prism Staff',
      'Tome of Celestial Equations',
      'Arcane Focus Orb of Solitude',
      'Carved Runewood Wand',
      'Crystalline Dagger of Leylines'
    ],
    signatureAbilities: [
      { name: 'Astral Supernova', description: 'Focuses cosmic energy into a blinding vortex that vaporizes magical wards.', type: 'Arcane Evocation' },
      { name: 'Chrono-Stasis Rift', description: 'Temporarily fractures the local timeline, freezing targets in suspended seconds.', type: 'Temporal Manipulation' },
      { name: 'Glacial Monolith', description: 'Summons a barrier of eternal frost to redirect attacks and freeze oncoming foes.', type: 'Cryomancy' },
      { name: 'Prismatic Mirror Aegis', description: 'Weaves kaleidoscopic shields that reflect hostile hexes back upon the caster.', type: 'Abjuration' }
    ]
  },
  Rogue: {
    name: 'Rogue',
    title: 'Shadowstalker & Blade Dancer',
    description: 'Infiltrators and tacticians who strike from unseen angles, disabling traps and delivering surgical strikes.',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    primaryStat: 'dexterity',
    secondaryStat: 'charisma',
    hitDie: 8,
    signatureWeapons: [
      'Twin Serpent Obsidian Daggers',
      'Silenced Hand Crossbow',
      'Serrated Nightshade Stiletto',
      'Throwing Needles of the Black Lotus',
      'Flexible Garrote & Shadow Dirk'
    ],
    signatureAbilities: [
      { name: 'Shadowstep Leap', description: 'Merges seamlessly into shadows to re-emerge instantly behind an unsuspecting mark.', type: 'Infiltration' },
      { name: 'Venomous Fan of Blades', description: 'Unleashes a synchronized storm of poisoned blades in a wide perimeter.', type: 'Precision Attack' },
      { name: 'Smoke Veil Mirage', description: 'Detonates an alchemical flash that leaves behind an illusory decoy while vanishing.', type: 'Evasion' },
      { name: 'Severing Hemorrhage', description: 'Targets anatomical weak points for sustained vital bleeding.', type: 'Execution' }
    ]
  },
  Archer: {
    name: 'Archer',
    title: 'Hawkeye Warden of the Wilds',
    description: 'Marksmen of peerless precision who track their quarry across perilous terrains and loose arrows with fatal accuracy.',
    accentColor: 'text-teal-400',
    badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    borderColor: 'border-teal-500/30',
    glowColor: 'rgba(20, 184, 166, 0.25)',
    primaryStat: 'dexterity',
    secondaryStat: 'wisdom',
    hitDie: 8,
    signatureWeapons: [
      'Yew Recurve Bow of the Deep Canopy',
      'Composite Elven Greatbow',
      'Heavy Repeating Arbalest',
      'Quiver of Phoenix-Feather Shafts',
      'Falconer Longbow & Hunting Dirk'
    ],
    signatureAbilities: [
      { name: 'Piercing Gale Shot', description: 'Looses an arrow shrouded in compressed air that penetrates multiple targets.', type: 'Piercing Strike' },
      { name: 'Rain of Embers', description: 'Fires an ignition payload into the heavens, raining down fiery splinters.', type: 'Area Barrage' },
      { name: 'Snare of Bramblethorn', description: 'Plants a spring-loaded thorny trap that roots charging beasts in place.', type: 'Tactical Trapping' },
      { name: 'Eagle Eye Trance', description: 'Slows sensory perception to target micro-vulnerabilities through thick armor.', type: 'Focus Ability' }
    ]
  },
  Paladin: {
    name: 'Paladin',
    title: 'Radiant Oathkeeper of the Dawn',
    description: 'Holy champions bound by ancient vows who channel celestial luminance to heal the wounded and banish darkness.',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    borderColor: 'border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    primaryStat: 'strength',
    secondaryStat: 'charisma',
    hitDie: 10,
    signatureWeapons: [
      'Sun-Blessed War Hammer',
      'Gilded Dawn Claymore',
      'Tower Shield of the Archon',
      'Silver Flanged Mace of Lumina',
      'Holy Broadsword of the Silver Vigil'
    ],
    signatureAbilities: [
      { name: 'Radiant Smite', description: 'Channels blinding solar wrath into weapon strikes, purging unholy entities.', type: 'Holy Evocation' },
      { name: 'Aura of Sanctuary', description: 'Projects a luminous dome that restores vigor and repels dark sorceries.', type: 'Divine Ward' },
      { name: 'Touch of Restoration', description: 'Channels pure divine light through palms, mending shattered bones and cleansing poisons.', type: 'Sacred Healing' },
      { name: 'Judgment of the Just', description: 'Marks a foe with celestial fire, preventing deceit and amplifying retaliation.', type: 'Solemn Condemnation' }
    ]
  },
  Necromancer: {
    name: 'Necromancer',
    title: 'Sovereign of the Restless Crypt',
    description: 'Scholars of the forbidden threshold who command the chill of the grave, siphon vital spirits, and reanimate the fallen.',
    accentColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    primaryStat: 'intelligence',
    secondaryStat: 'constitution',
    hitDie: 6,
    signatureWeapons: [
      'Scythe of the Abyssal Harvest',
      'Cranial Bone Wand of the Lich',
      'Lantern of Wandering Phantoms',
      'Grimoire Bound in Basilisk Hide',
      'Obsidian Sickle of Graves'
    ],
    signatureAbilities: [
      { name: 'Grasp of the Crypt', description: 'Skeletal hands erupt from the ground, restraining foes and chilling their blood.', type: 'Necromancy' },
      { name: 'Soul Siphon Vortex', description: 'Drains the living essence of nearby enemies to replenish personal life force.', type: 'Vital Drain' },
      { name: 'Bone Armor Fortress', description: 'Coats the body in reinforced skeletal plates that shatter upon taking fatal blows.', type: 'Defensive Hex' },
      { name: 'Spectral Marionette', description: 'Binds a fleeting ethereal shade to execute strikes and confound adversaries.', type: 'Summoning' }
    ]
  },
  Druid: {
    name: 'Druid',
    title: 'Guardian of the Verdant Balance',
    description: 'Keepers of primaeval groves who wield the elements of nature, commune with beasts, and assume wild forms.',
    accentColor: 'text-lime-400',
    badgeBg: 'bg-lime-500/10 text-lime-300 border-lime-500/20',
    borderColor: 'border-lime-500/30',
    glowColor: 'rgba(132, 204, 22, 0.25)',
    primaryStat: 'wisdom',
    secondaryStat: 'constitution',
    hitDie: 8,
    signatureWeapons: [
      'Staff of the Elder Bough',
      'Petrified Amber Scythe',
      'Yew Totem of the Forest Spirit',
      'Bone-Carved Sickle of Seasons',
      'Living Bark Shield & Club'
    ],
    signatureAbilities: [
      { name: 'Primal Beastform', description: 'Morphs flesh into an armored dire bear or swift spectral wolf.', type: 'Shapeshifting' },
      { name: 'Thornbloom Entanglement', description: 'Summons violent vines from the moss to crush and restrict intruders.', type: 'Nature Control' },
      { name: 'Soothing Dew of Yggdrasil', description: 'Calls down a restorative mist that slowly cleanses wounds.', type: 'Restoration' },
      { name: 'Call of the Tempest', description: 'Summons ozone-heavy stormclouds to call down jagged lightning strikes.', type: 'Weather Magic' }
    ]
  },
  Bard: {
    name: 'Bard',
    title: 'Troubadour of the Starlight Choir',
    description: 'Weavers of resonant chords and spoken verses whose performances inspire armies, trick sovereigns, and warp wills.',
    accentColor: 'text-yellow-400',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    primaryStat: 'charisma',
    secondaryStat: 'dexterity',
    hitDie: 8,
    signatureWeapons: [
      'Rosewood Lute with Mithril Strings',
      'Gilded Rapier of the Duelist',
      'Silver-Keyed Flute of Hypnosis',
      'Ivory Horn of the Skalds',
      'Concealed Stiletto in a Mandolin Neck'
    ],
    signatureAbilities: [
      { name: 'Anthem of the Unconquered', description: 'Plays a rousing cadence that dispels fear and surges adrenaline in companions.', type: 'Inspiration' },
      { name: 'Dissonant Cacophony', description: 'Emits a pitch that shatters crystal and scrambles the concentration of mages.', type: 'Sonic Disruption' },
      { name: 'Ballad of the Silver Tongue', description: 'Weaves hypnotic suggestions into everyday prose, disarming suspicious guards.', type: 'Enchantment' },
      { name: 'Echo of the Starlight Court', description: 'Splits personal image into harmonic duplicates while stepping aside.', type: 'Illusion' }
    ]
  }
};

export const FANTASY_FIRST_NAMES = [
  'Aeloria', 'Thorgar', 'Kaelen', 'Lyra', 'Valerius', 'Sylas', 'Morrigan',
  'Zephyr', 'Branok', 'Vesper', 'Isolde', 'Dorian', 'Seraphina', 'Malakor',
  'Faelynn', 'Rowan', 'Gareth', 'Xanthe', 'Orin', 'Balthazar', 'Danica',
  'Korin', 'Wynne', 'Raiden', 'Elyse', 'Torvald', 'Cassian', 'Mirielle',
  'Jaxen', 'Vaelin', 'Caelum', 'Sariel', 'Eldrin', 'Talia', 'Oakhaven',
  'Fintan', 'Darian', 'Aurelia', 'Ragnar', 'Kallista', 'Theron', 'Gwendolyn',
  'Vespera', 'Einar', 'Brina', 'Alden', 'Cora', 'Fenris', 'Nyx', 'Drakon'
];

export const FANTASY_SURNAMES = [
  'Duskwalker', 'Ironforge', 'Nightweaver', 'Emberstride', 'Frostpeak',
  'Shadowbane', 'Silverleaf', 'Runebreaker', 'Whisperwind', 'Goldmantle',
  'Deepdelver', 'Sunwatcher', 'Moonvale', 'Voidstrider', 'Stormchaser',
  'Ashford', 'Bramblethorn', 'Brightblade', 'Ravencrest', 'Ironwood',
  'Winterfell', 'Stonehaven', 'Grimward', 'Highwind', 'Silverspear',
  'Ebonflame', 'Oakhaven', 'Starling', 'Vanguard', 'Blackthorn'
];

export const FANTASY_TITLES = [
  'the Undying', 'the Unbroken', 'the Silent', 'of the North Wind',
  'the Spellbound', 'the Shadowveil', 'the Dawn Herald', 'the Ashen',
  'the Gilded', 'the Relentless', 'the Starlight Sovereign', 'the Ironborn',
  'the Sunforged', 'the Whisperer', 'the Unforgiven', 'of the High Spire',
  'the Warden of the Eclipse', 'the Resolute', 'the Flamekeeper'
];

export const RACES = [
  'High Elf', 'Mountain Dwarf', 'Valen Human', 'Shadow-touched',
  'Dragonkin', 'Wood Elf', 'Celestial-born', 'Deep Gnome', 'Tiefling',
  'Frostborne Human', 'Sylphid (Air Genasi)', 'Stone Goliath'
];

export const ALIGNMENTS = [
  'Lawful Good', 'Neutral Good', 'Chaotic Good',
  'Lawful Neutral', 'True Neutral', 'Chaotic Neutral'
];

export const ORIGINS = [
  'Disgraced Heir of a Sunken Citadel',
  'Monastery Scribe Who Read Forbidden Glyphs',
  'Veteran of the Siege of Grimcrag',
  'Hermit Astrologer from the Shattered Observatory',
  'Former Shadow Guild Infiltrator Seeking Redemption',
  'Guardian of the Whispering Boughs',
  'Alchemist Apprentice Escaped from a Floating Laboratory',
  'Wandering Pilgrim of the Twin Constellations',
  'Bounty Tracker for the High Barons',
  'Survivor of the Void Well Incursion'
];

export const QUIRKS = [
  'Carries an ancient brass key that hums whenever near unworked iron.',
  'Refuses to enter stone vaults without leaving an open window to the starlight.',
  'Speaks to ravens and claims they deliver secret correspondence from ancestors.',
  'Has a subtle golden constellation mark across the left forearm that glows in the dark.',
  'Carries a small leather pouch filled with crushed lavender and dried sea salt.',
  'Never accepts coins forged during the reign of the Fallen Emperor.',
  'Always checks door hinges for poison traps three times before crossing a threshold.',
  'Compulsively cleans weapons until the steel reflects candlelight like a mirror.',
  'Maintains a meticulous journal written entirely in a personal cipher.',
  'Can accurately predict heavy thunderstorms hours before the first cloud appears.'
];

export const BACKSTORY_TEMPLATES = [
  'Trained in the secluded spires of {location}, {name} mastered the arts of the {class} under the watchful guidance of master tutors. When calamity struck and their homeland was cast into shadow, they took up their {weapon} and set out to restore balance.',
  'Born during the celestial conjunction of two blood moons, {name} displayed uncanny aptitude from childhood. Chosen by the elders to defend the ancestral borders, this {race} now walks the overland realms seeking the fragments of a shattered prophecy.',
  'Once a trusted guardian within the high courts, {name} was framed for a crime they did not commit. Stripped of honors but armed with indomitable grit and their trusty {weapon}, they now wander the wild marches as a legendary {class}.',
  'Drawn from the quiet fringes of the realm, {name} answered the call when ancient ruins began stirring with unnatural energy. Recognized across towns as {title}, their name has become synonymous with daring escapades and unwavering resolve.',
  'Having survived the devastating collapse of {location}, {name} made a solemn oath to never permit innocence to fall prey to darkness again. Equipped with {weapon}, they venture forth into perilous dungeons and forgotten catacombs.'
];

export const FANTASY_LOCATIONS = [
  'the Obsidian Spire of Kaer-Dun',
  'the Sunken Valley of Silverwood',
  'the Frostpeak Citadel',
  'the Sun-Drenched Sanctum of Sol-Kael',
  'the Whispering Catacombs of Mor-Drak',
  'the Emerald Glade of Eldenmere',
  'the Ironhold Bastion of Grimcrag'
];
