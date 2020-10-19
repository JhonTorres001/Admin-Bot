import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params, provideRoutes} from '@angular/router';
import { Preguntas } from '../../models/preguntas';
import { PreguntasService } from '../../Services/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
  providers: [PreguntasService]
})
export class PreguntasComponent implements OnInit {

  public title:string;
  public preguntas : Preguntas;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _preguntasService:  PreguntasService

  ) {
    this.title = "preguntas";
    this.preguntas = new Preguntas
      ( 
        "",
        "",
        ""
      )
  }

  ngOnInit(): void {  
    console.log("Componente iniciado");
  }

  onSubmit(){
      this._preguntasService.register(this.preguntas).subscribe(
        response => {
            if (response.preguntas && response.preguntas._id) {
              console.log(response.preguntas);
            }
        },
        error => {
          console.log(<any>error);
        }
      )
  
  }

}
// npm install --save rxjs-compat