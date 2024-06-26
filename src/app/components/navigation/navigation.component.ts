import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  router = inject(Router);
  CreateExpense() {
    this.router.navigateByUrl('createExpense');
  }
  CreateExpenseType() {
    this.router.navigateByUrl('createExpenseType');
  }
  toExpenses() {
    this.router.navigateByUrl('home');
  }
  toExpensesTypes() {
    this.router.navigateByUrl('homeExpenseType');
  }
}
