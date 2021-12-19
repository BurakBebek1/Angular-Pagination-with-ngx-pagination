import { Component } from '@angular/core';
import { RandomUserService } from './services/random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pagination';

  data: Array<any>;
  totalRecords: number;
  page: number = 1;

  constructor(private randomUser: RandomUserService) {
    this.data = new Array<any>();
  }
}
