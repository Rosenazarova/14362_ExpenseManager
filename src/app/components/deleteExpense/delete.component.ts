import { Component, inject } from '@angular/core';
import { IGetExpense } from '../../GlobalTypes';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceExpenseService } from '../../service-expense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  deleteExpense: IGetExpense = {
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
  service = inject(ServiceExpenseService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getExpenseByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deleteExpense = result;
      });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('home');
  }
  onDeleteButtonClick(id: number) {
    this.service.deleteExpense(this.deleteExpense.id).subscribe((res) => {
      console.log(res);
    });
    alert('Deleted  item with ID: ' + id);
    this.router.navigateByUrl('home');
  }
}
