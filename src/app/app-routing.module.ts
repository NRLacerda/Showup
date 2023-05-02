import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    // usa o lazy load para não carregar todos arquivos de uma vez e poder 
    // otimizar a inicialização das rotas
    path:'aboutme',
    loadChildren:()=>import('./about-me/about-me.module').then(m=>m.AboutmeModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'projects',
    loadChildren:()=>import('./projects/projects.module').then(m=>m.ProjectsModule)
  },
  {
		path: '',
		loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
	},
  {
		path: '**',
		component: NotFoundComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
