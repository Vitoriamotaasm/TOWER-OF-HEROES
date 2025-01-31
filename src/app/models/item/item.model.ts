export interface Item {
    id: string;
    name: string;
    type: 'weapon' | 'armor' | 'potion';
    effect: {
      attack?: number;
      defense?: number;
      health?: number;
    };
    cost: number;
  } 