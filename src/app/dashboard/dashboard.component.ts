import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router ) {}

  ngOnInit() {
  }

  screen1()
  {
    this.router.navigate(["/screen1"]);
  }

  screen2()
  {
    this.router.navigate(["/screen2"]);
  }

  screen3()
  {
    this.router.navigate(["/screen3"]);
  }
}
