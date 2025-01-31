import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BattleComponent } from '../app/battle/battle.component';
import { InventoryComponent } from '../app/inventory/inventory.component';
import { ShopComponent } from '../app/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'shop', component: ShopComponent },
]; 