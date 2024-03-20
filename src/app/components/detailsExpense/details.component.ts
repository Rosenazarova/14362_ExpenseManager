import { Component, inject } from '@angular/core';
import { IGetExpense } from '../../GlobalTypes';
import { ServiceExpenseService } from '../../service-expense.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  expenseDetails: IGetExpense = {
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

  serviceToDo = inject(ServiceExpenseService);

  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceToDo
      .getExpenseByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.expenseDetails = resultedItem;
      });
  }
}
