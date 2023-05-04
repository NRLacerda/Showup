import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(){
  }
  closeNav(){
    var SideNav = document.getElementById("nav")

    if(SideNav){
      SideNav.style.width="0"
    }
  }
  openNav(){
    var SideNav = document.getElementById("nav")

    if(SideNav){
      SideNav.style.width="250px"
    }

  }
  
}
