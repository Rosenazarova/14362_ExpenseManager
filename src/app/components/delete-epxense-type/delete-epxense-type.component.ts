import { Component, inject } from '@angular/core';
import { IExpenseType } from '../../GlobalTypes';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceExpenseService } from '../../service-expense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-epxense-type',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete-epxense-type.component.html',
  styleUrl: './delete-epxense-type.component.css'
})
export class DeleteEpxenseTypeComponent {
  deleteExpenseType: IExpenseType = {
      id: 0,
      name: '',
  };
  service = inject(ServiceExpenseService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getExpenseTypeByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deleteExpenseType = result;
      });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('homeExpenseType');
  }

  onDeleteButtonClick(id: number) {
    this.service.deleteExpenseType(this.deleteExpenseType.id).subscribe((res) => {
      console.log(res);
    });
    alert('Deleted  item with ID: ' + id);
    this.router.navigateByUrl('homeExpenseType');
  }
}
