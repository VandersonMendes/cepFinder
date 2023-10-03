import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Cep } from './cep';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http :HttpClient) { }

  getAll(cep: string | number): Observable <Cep>{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
