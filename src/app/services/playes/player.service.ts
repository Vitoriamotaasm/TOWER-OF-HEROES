import { Injectable } from '@angular/core';
import { FirestoreCrudService } from 'firestore-crud-lib';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Player } from '../../models/player/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService extends FirestoreCrudService<Player> {
  read: any;
  constructor(db: AngularFirestore) {
    super('players', db); 
  }

  createInitialPlayer(player: Player) {
    return this.create(player);
  }

  getPlayerById(id: string) {
    return this.read(id);
  }

  updatePlayer(player: Player) {
    return this.update(player.id, player);
  }
} 