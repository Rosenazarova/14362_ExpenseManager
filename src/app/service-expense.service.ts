import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IGetExpense, IExpenseType, ICreateExpense } from './GlobalTypes';

@Injectable({
  providedIn: 'root',
})
export class ServiceExpenseService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllExpenses() {
    return this.httpClient.get<IGetExpense[]>(
      'https://localhost:7074/api/Expenses'
    );
  }

  getExpenseByID(id: number) {
    return this.httpClient.get<IGetExpense>(
      'https://localhost:7074/api/Expenses/' + id
    );
  }
  editExpense(expense: ICreateExpense) {
    return this.httpClient.put('https://localhost:7074/api/Expenses', expense);
  }
  deleteExpense(id: number) {
    return this.httpClient.delete('https://localhost:7074/api/Expenses/' + id);
  }
  createExpense(expense: ICreateExpense) {
    return this.httpClient.post<ICreateExpense>(
      'https://localhost:7074/api/Expenses',
      expense
    );
  }
  getAllExpenseTypes() {
    return this.httpClient.get<IExpenseType[]>(
      'https://localhost:7074/api/ExpenseTypes'
    );
  }

  getExpenseTypeByID(id: number) {
    return this.httpClient.get<IExpenseType>(
      'https://localhost:7074/api/ExpenseTypes/' + id
    );
  }
  editExpenseType(expenseType: IExpenseType) {
    return this.httpClient.put(
      'https://localhost:7074/api/ExpenseTypes',
      expenseType
    );
  }
  deleteExpenseType(id: number) {
    return this.httpClient.delete(
      'https://localhost:7074/api/ExpenseTypes/' + id
    );
  }
  createExpenseType(expenseType: IExpenseType) {
    return this.httpClient.post<IExpenseType>(
      'https://localhost:7074/api/ExpenseTypes',
      expenseType
    );
  }
}
