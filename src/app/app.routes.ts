import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from '../app/battle/battle.component';
import { InventoryComponent } from '../app/inventory/inventory.component';
import { ShopComponent } from '../app/shop/shop.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'battle', component: BattleComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'shop', component: ShopComponent },
    ]),
  ]
})

.catch(err => console.error(err));