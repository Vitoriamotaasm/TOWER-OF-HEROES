import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToBattle() {
    console.log('Navegando para Batalha');
    this.router.navigate(['/battle']);
  }

  navigateToInventory() {
    console.log('Navegando para Inventário');
    this.router.navigate(['/inventory']);
  }

  navigateToShop() {
    console.log('Navegando para Loja');
    this.router.navigate(['/shop']);
  }
} 