import { Item } from '../item/item.model';

export interface Player {
  id: string;
  name: string;
  level: number;
  experience: number;
  gold: number;
  stats: {
    health: number;
    attack: number;
    defense: number;
  };
  inventory: Item[];
} 