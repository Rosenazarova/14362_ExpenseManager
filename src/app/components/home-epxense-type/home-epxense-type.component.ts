import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceExpenseService } from '../../service-expense.service';
import { IExpenseType } from '../../GlobalTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-epxense-type',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home-epxense-type.component.html',
  styleUrl: './home-epxense-type.component.css',
})
export class HomeEpxenseTypeComponent {
  expenseService = inject(ServiceExpenseService);
  router = inject(Router);
  expenseTypes: IExpenseType[] = [];
  ngOnInit() {
    this.expenseService.getAllExpenseTypes().subscribe((result) => {
      this.expenseTypes = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Expense Type Name',
    'Actions',
  ];

  EditClicked(expenseID: number) {
    console.log(expenseID, 'From Edit');
    this.router.navigateByUrl('/editExpenseType/' + expenseID);
  }
  DetailsClicked(expenseID: number) {
    console.log(expenseID, 'From Details');
    this.router.navigateByUrl('/detailsExpenseType/' + expenseID);
  }
  DeleteClicked(expenseID: number) {
    console.log(expenseID, 'From Delete');
    this.router.navigateByUrl('/deleteExpenseType/' + expenseID);
  }
}
