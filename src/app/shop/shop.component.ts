import { Component } from '@angular/core';
import { PlayerService } from '../services/playes/player.service';
import { Player } from '../models/player/player.model';
import { Item } from '../models/item/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  player: Player;
  items: Item[] = [
    { id: '1', name: 'Espada de Ferro', type: 'weapon', effect: { attack: 5 }, cost: 20 },
    { id: '2', name: 'Armadura de Couro', type: 'armor', effect: { defense: 5 }, cost: 30 },
    { id: '3', name: 'Poção de Vida', type: 'potion', effect: { health: 20 }, cost: 10 },
  ];

  constructor(private playerService: PlayerService) {
    this.player = this.playerService.getPlayerById('1'); 
  }

  buyItem(item: Item) {
    console.log('Botão comprar clicando para o item:', item);
    if (this.player.gold >= item.cost) {
      this.player.gold -= item.cost;
      this.player.inventory.push(item);
      this.playerService.updatePlayer(this.player); 
    } else {
      alert('Ouro insuficiente!');
      console.log('Ouro insuficiente para comprar o item:', item);
    }
  }
} 