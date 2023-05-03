import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  showFiller:boolean;
  tipo : MatDrawerMode;
  unset:boolean;
  showNavSid:boolean;
  SideNav: HTMLElement | null = document.getElementById('nav');
  constructor(){
    this.showFiller= false;
    this.tipo='push'
    this.unset=false
    this.showNavSid=false
  }
butSideMenu(){
  if(this.showNavSid){
  //  this.showNavSid=false;
    this.ShowSideNav(true);
  }else{
   // this.showNavSid=true
    this.ShowSideNav(false);

  }
}
ShowSideNav(open:boolean){
  
  if(open){
    this.SideNav?.classList.add('SideNav');
  }else{
    this.SideNav?.classList.remove('SideNav')
  }
}
}
