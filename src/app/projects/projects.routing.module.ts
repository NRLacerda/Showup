import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];// poderia ter rotas pra projetos em específico, tipo, projeto X ou Y
// localhost:4200/projetos/ProjetoTal

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [
		RouterModule
	]
})
export class ProjectsRoutingModule { }