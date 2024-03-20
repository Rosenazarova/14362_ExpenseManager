import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceExpenseService } from '../../service-expense.service';
import { IGetExpense } from '../../GlobalTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  expenseService = inject(ServiceExpenseService);
  router = inject(Router);
  expenses: IGetExpense[] = [];
  ngOnInit() {
    this.expenseService.getAllExpenses().subscribe((result) => {
      console.log(result);

      this.expenses = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Description',
    'Amount',
    'Expense Type',
    'Actions',
  ];

  EditClicked(expenseID: number) {
    console.log(expenseID, 'From Edit');
    this.router.navigateByUrl('/editExpense/' + expenseID);
  }
  DetailsClicked(expenseID: number) {
    console.log(expenseID, 'From Details');
    this.router.navigateByUrl('/detailsExpense/' + expenseID);
  }
  DeleteClicked(expenseID: number) {
    console.log(expenseID, 'From Delete');
    this.router.navigateByUrl('/deleteExpense/' + expenseID);
  }
}
