import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { MetricasComponent } from './componentes/metricas/metricas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'metricas', component: MetricasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
