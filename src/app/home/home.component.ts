import { Component, OnInit } from '@angular/core';
// Import the router from angular router.
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// Create a router by constructor.
  constructor(private router: Router) { }

  ngOnInit() {
  }
  /* Create the method for Event Binding in home.component.html file.*/
onLoadServers() {
  //complex calculation
  this.router.navigate(['/servers']);
}
}
