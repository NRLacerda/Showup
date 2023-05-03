import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }