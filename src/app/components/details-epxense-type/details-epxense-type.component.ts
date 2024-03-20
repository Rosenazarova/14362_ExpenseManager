import { Component, inject } from '@angular/core';
import { IExpenseType } from '../../GlobalTypes';
import { ServiceExpenseService } from '../../service-expense.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-epxense-type',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details-epxense-type.component.html',
  styleUrl: './details-epxense-type.component.css'
})
export class DetailsEpxenseTypeComponent {
  expenseTypeDetails: IExpenseType = {
      id: 0,
      name: '',
  };

  serviceToDo = inject(ServiceExpenseService);

  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.serviceToDo
      .getExpenseTypeByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.expenseTypeDetails = resultedItem;
      });
  }
}
