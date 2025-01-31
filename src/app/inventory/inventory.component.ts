import { Component } from '@angular/core';
import { PlayerService } from '../services/playes/player.service';
import { Player } from '../models/player/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  player: Player;

  constructor(private playerService: PlayerService) {
    this.player = this.playerService.getPlayerById('1'); 
  }
} 
