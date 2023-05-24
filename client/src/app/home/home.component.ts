import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMood = false;
  users: any;

  constructor() {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMood = !this.registerMood;
  }

  cancelRegisterMood(event: boolean) {
    this.registerMood = event;
  }
}
