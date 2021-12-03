import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


 const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'acerca',component:AboutComponent},
   {path:'contacto',component:ContactoComponent},
   {path:'**',redirectTo:'home'}
   
 ]

@NgModule({
  imports: [
  RouterModule.forRoot(routes)  
  ],
  exports:[
    RouterModule
  ]
})


