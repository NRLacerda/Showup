import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    // usa o lazy load para não carregar todos arquivos de uma vez e poder 
    // otimizar a inicialização das rotas
    path:'home',
    loadChildren:()=>import('./about-me/about-me.module').then(m=>m.AboutmeModule)
  },
  {
    path:'aboutme',
    loadChildren:()=>import('./about-me/about-me.module').then(m=>m.AboutmeModule)
  },
  {
    path:'projects',
    loadChildren:()=>import('./about-me/about-me.module').then(m=>m.AboutmeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
