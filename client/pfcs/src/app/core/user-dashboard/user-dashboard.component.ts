import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  // TODO: init to zero and storage amount should be set dynamically after
  //Temporary placeholder value for styling
  storageAmountInGB: number = 0;
  storageAmountPercentage: number = 50;
}
