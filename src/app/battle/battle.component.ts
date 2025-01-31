import { Component } from '@angular/core';
import { PlayerService } from '../services/playes/player.service';
import { Player } from '../models/player/player.model';
import { Enemy } from '../models/enemy/enemy.model';

@Component({
  selector: 'app-battle',
  standalone: true,
  imports: [],
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent {
  player: Player;
  enemy: Enemy;

  constructor(private playerService: PlayerService) {
    this.player = this.playerService.getPlayerById('198765439757'); 
    this.enemy = this.generateEnemy();
  }

  generateEnemy(): Enemy {
    return {
      id: '1',
      name: 'Goblin',
      stats: {
        health: 50,
        attack: 10,
        defense: 5,
      },
      reward: {
        experience: 20,
        gold: 10,
      },
    };
  }

  attack() {
    const playerAttack = this.player.stats.attack - this.enemy.stats.defense;
    this.enemy.stats.health -= playerAttack;

    if (this.enemy.stats.health <= 0) {
      this.defeatEnemy();
    } else {
      this.enemyAttack();
    }
  }

  enemyAttack() {
    const enemyAttack = this.enemy.stats.attack - this.player.stats.defense;
    this.player.stats.health -= enemyAttack;

    if (this.player.stats.health <= 0) {
      this.gameOver();
    }
  }

  defeatEnemy() {
    this.player.experience += this.enemy.reward.experience;
    this.player.gold += this.enemy.reward.gold;
    this.enemy = this.generateEnemy();
  }

  gameOver() {
    alert('Game Over!');
    this.player.stats.health = 100; 
  }
} 