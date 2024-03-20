import { Component, OnInit, inject } from '@angular/core';
import { ServiceExpenseService } from '../../service-expense.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetExpense } from '../../GlobalTypes';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  todoService = inject(ServiceExpenseService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editExpense: IGetExpense = {
    id: 0,
    title: '',
    description: '',
    amount: 0,
    expenseTypeId: 0,
    expenseType: {
      id: 0,
      name: '',
    },
  };
  expenseObject: any;
  selected: any;
  tID: number = 0;
  ngOnInit() {
    this.todoService
      .getExpenseByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editExpense = result;
        this.selected = this.editExpense.expenseTypeId;
        console.log(this.editExpense);
      });
    this.todoService.getAllExpenseTypes().subscribe((result) => {
      this.expenseObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    this.editExpense.expenseTypeId = this.tID;
    this.editExpense.expenseType =
      this.expenseObject[findIndexByID(this.expenseObject, this.tID)];
    this.todoService.editExpense(this.editExpense).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('home');
    });
  }
}
