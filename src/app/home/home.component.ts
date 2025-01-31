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
    this.router.navigate(['/battle']);
  }

  navigateToInventory() {
    this.router.navigate(['/inventory']);
  }

  navigateToShop() {
    this.router.navigate(['/shop']);
  }
} 