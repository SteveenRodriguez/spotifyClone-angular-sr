import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // Traemos la api desde enviroment
  private readonly URL = environment.api;

  // Inyectamos en el contructor el HttpClient para hacer las peticiones al backend
  constructor(private httpClient: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    // Traemos todas las canciones con el método Get()
    return this.httpClient.get(`${this.URL}/tracks`)
  }



}
