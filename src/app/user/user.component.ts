import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  data: Array<any>;
  totalRecords: String;
  page: number = 1;

  constructor(private randomUser: RandomUserService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {

      this.data = data.results;
      this.totalRecords = data.results.length;
    })
  }

}
