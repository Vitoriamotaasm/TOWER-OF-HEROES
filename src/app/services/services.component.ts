import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activePage = signal<string>('/home'); 

  constructor(private router: Router) {}

  navigateTo(route: '/shop' | '/models' | '/services' | '/home'): Observable<boolean> {
    return from(this.router.navigate([route])).pipe(
      tap((success) => {
        if (success) {
          this.activePage.set(route);
        }
      }),
      catchError((error) => {
        console.error('❌ Erro ao navegar:', error);
        throw error;
      })
    );
  }

  /**
   * Obtém a página ativa atual.
   */
  getActivePage(): string {
    return this.activePage();
  }

  /**
   * Verifica se a rota fornecida corresponde à página ativa armazenada.
   */
  isActivePage(route: string): boolean {
    return this.activePage() === route;
  }

  /**
   * Reseta a página ativa para o dashboard.
   */
  resetActivePage(): void {
    this.activePage.set('/dashboard');
  }
}