import { Component, OnInit } from '@angular/core';
//import { routes } from '../app-routing/routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Links = {};
  constructor() { }

  ngOnInit() {
    this.Links = [
      { 'page': 'teams' , 'route': '/teams-list' },
      { 'page': 'challenges' , 'route': '/challenges-list' }
    ];
  }

}
