import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
// import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { ContactoComponent } from './componentes/pregunta/pregunta.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { MetricasComponent } from './componentes/metricas/metricas.component';
import { GridModule, FilterService, PageService, GroupService} from '@syncfusion/ej2-angular-grids';


import { EditService, ToolbarService, SortService } from '@syncfusion/ej2-angular-grids';
import { MensajebotComponent } from './componentes/mensajebot/mensajebot.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagenesComponent,
    ContactoComponent,
    PreguntasComponent,
    MetricasComponent,
    MensajebotComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule,
    GridModule
  ] ,
  providers: [
    NgModule,
    PageService,
    SortService,
    FilterService,
    EditService, ToolbarService, SortService,
    GroupService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
