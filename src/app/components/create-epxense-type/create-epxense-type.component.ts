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

@Component({
  selector: 'app-create-epxense-type',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,],
  templateUrl: './create-epxense-type.component.html',
  styleUrl: './create-epxense-type.component.css'
})
export class CreateEpxenseTypeComponent {
  expenseService = inject(ServiceExpenseService);

  router = inject(Router);

  expenseTypeCreate: IExpenseType = {
    id: 0,
    name: '',
  };
  create() {
    this.expenseService
      .createExpenseType(this.expenseTypeCreate)
      .subscribe((result) => {
        alert('Expense Saved');
        this.router.navigateByUrl('homeExpenseType');
      });
  }
}
