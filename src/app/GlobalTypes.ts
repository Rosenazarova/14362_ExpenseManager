export interface IGetExpense {
  id: number;
  title: string;
  description: string;
  amount: number;
  expenseTypeId: number;
  expenseType: {
    id: number;
    name: string;
  };
}

export interface ICreateExpense {
  title: string;
  description: string;
  amount: number;
  expenseTypeId: number;
}

export interface IExpenseType {
  id: number;
  name: string;
}
