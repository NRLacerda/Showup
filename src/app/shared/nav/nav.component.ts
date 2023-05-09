import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  currentRoute: string= "";
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      //this.currentRoute = this.activatedRoute.snapshot.firstChild.routeConfig.path;
    });
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
      SideNav.style.width="180px"
      SideNav.classList.toggle("sidenavOpen");
    }
  }
}
