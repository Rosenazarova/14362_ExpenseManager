import { Component, OnInit, inject } from '@angular/core';
import { ServiceExpenseService } from '../../service-expense.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpenseType } from '../../GlobalTypes';

@Component({
  selector: 'app-edit-epxense-type',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit-epxense-type.component.html',
  styleUrl: './edit-epxense-type.component.css'
})

export class EditEpxenseTypeComponent implements OnInit {
  expenseService = inject(ServiceExpenseService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  expenseTypeEdit: IExpenseType = {
      id: 0,
      name: '',
  };
  
  ngOnInit() {
    this.expenseService
      .getExpenseTypeByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.expenseTypeEdit = result;
      });
  }

  toHome() {
    this.router.navigateByUrl('homeExpenseType');
  }

  edit() {
    this.expenseService.editExpenseType(this.expenseTypeEdit).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('homeExpenseType');
    });
  }
}

