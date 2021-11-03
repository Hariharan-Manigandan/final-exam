import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  abi(){
    this.router.navigateByUrl("about/ab1")
  }
  gt(){
    this.router.navigateByUrl("about/g1")
  }
  faq(){
    this.router.navigateByUrl("about/faq")
  }
  spk(){
    this.router.navigateByUrl("about/spk")
  }
}
