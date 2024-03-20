import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceExpenseService } from '../../service-expense.service';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { IExpenseType, ICreateExpense } from '../../GlobalTypes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  expenseService = inject(ServiceExpenseService);

  router = inject(Router);

  exoenseTypes: IExpenseType[] = [];

  tID: number = 0;

  createExpense: ICreateExpense = {
    title: '',
    description: '',
    amount: 0,
    expenseTypeId: 0,
  };

  ngOnInit() {
    this.expenseService.getAllExpenseTypes().subscribe((result) => {
      this.exoenseTypes = result;
    });
  }
  create() {
    this.createExpense.expenseTypeId = this.tID;
    this.expenseService
      .createExpense(this.createExpense)
      .subscribe((result) => {
        alert('Expense Saved');
        this.router.navigateByUrl('home');
      });
  }
}
