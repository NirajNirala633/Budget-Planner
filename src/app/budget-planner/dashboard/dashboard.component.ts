import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // Income
  lastMonthIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';

  // Expense
  lastMonthExpense = ['January: $800', 'Febuary: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';

  // Todo Trans
  todoTransactions = [
    { description: 'Pay Electricity Bill'},
    { description: 'Submit montly Report'},
    { description: 'Buy Groceries'},
    { description: 'Call Insurance Company'},
  ]

  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;

  constructor(private router: Router) {}

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }

  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }

  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
