import React from 'react';
import { CharacterClass } from '../types/character';

interface ClassIconProps {
  characterClass: CharacterClass;
  className?: string;
  size?: number;
}

export const ClassIcon: React.FC<ClassIconProps> = ({ characterClass, className = '', size = 24 }) => {
  switch (characterClass) {
    case 'Warrior':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Crossed Broadswords with central shield contour */}
          <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
          <path d="M13 19l6 2 2-6-2-2-4 4" />
          <path d="M9.5 17.5L21 6V3h-3L6.5 14.5" />
          <path d="M11 19l-6 2-2-6 2-2 4 4" />
        </svg>
      );

    case 'Mage':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Celestial arcane orb and radiant star rays */}
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      );

    case 'Rogue':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Twin daggers / stealth blades */}
          <path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
          <path d="M13 6l5 5" />
          <path d="M4 14l6 6" />
        </svg>
      );

    case 'Archer':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Recurve Bow and notched arrow */}
          <path d="M4 4c7 0 16 9 16 16" />
          <path d="M4 4l16 16" />
          <path d="M14 4h6v6" />
          <path d="M7 17l-3 3" />
        </svg>
      );

    case 'Paladin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Holy Shield with cross of dawn */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 7v8" />
          <path d="M8 10h8" />
        </svg>
      );

    case 'Necromancer':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Crypt skull / spectral bone */}
          <circle cx="9" cy="10" r="1.5" />
          <circle cx="15" cy="10" r="1.5" />
          <path d="M8 16h8" />
          <path d="M10 16v3" />
          <path d="M14 16v3" />
          <path d="M12 2a9 9 0 0 0-9 9c0 3.8 2.3 6.9 5.6 8.2L9 22h6l.4-2.8C18.7 17.9 21 14.8 21 11a9 9 0 0 0-9-9z" />
        </svg>
      );

    case 'Druid':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Elder Oak Leaf & Roots */}
          <path d="M11 20A7 7 0 0 1 4 13a7.5 7.5 0 0 1 12-6 8 8 0 0 1 4 13z" />
          <path d="M4 13c3.5 1 7.5-.5 9-4" />
          <path d="M2 22l6-4" />
        </svg>
      );

    case 'Bard':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Lyre / Harp of the Starlight Choir */}
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
};
