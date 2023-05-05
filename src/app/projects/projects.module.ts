import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects.component';
import { HomeComponent } from '../home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent,
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class ProjectsModule { }