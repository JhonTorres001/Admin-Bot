import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from  '@angular/common/http';
import { GLOBAL } from '../Services/global';
import {Preguntas } from '../models/preguntas';
import { Observable } from 'rxjs';
import { TagContentType } from '@angular/compiler';


@Injectable()
export class PreguntasService{
    public url:string;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(preguntas: Preguntas): Observable<any> {
       let params = JSON.stringify(preguntas);
       let headers = new HttpHeaders().set('Content-Type', 'application/json');
       console.log(params);
       return this._http.post(this.url , params, {headers:headers});
    }
    
}