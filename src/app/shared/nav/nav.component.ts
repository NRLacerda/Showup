import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  tipo : MatDrawerMode;
  unset:boolean;
  showNavSid:boolean;
  constructor(){
    this.tipo='push'
    this.unset=false
    this.showNavSid=false
  }
butSideMenu(){
  if(this.showNavSid){
    this.showNavSid=false
  }else{
    this.showNavSid=true
   //drawer.toggle()
  }
}
}
