export interface Enemy {
    id: string;
    name: string;
    stats: {
      health: number;
      attack: number;
      defense: number;
    };
    reward: {
      experience: number;
      gold: number;
    };
  } 