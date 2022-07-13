import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { map, Observable, mergeMap, tap } from 'rxjs';
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

  // función que permite filtrar por el id que le pasemos y no mostrarlo en la lista
    // recibe dos parámetros de tipo  TrackModel[] y id:number
  private skipById(listTracks:TrackModel[], id:number):
  Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      // lista temporal aplicando el filtro
      const listTemp = listTracks.filter(a => a._id !== id)
      resolve(listTemp)
    })
  }


  // este método retorna un observable de tipo HttpClien
  // los observables le podemos hacer uso de (pipe)
  getAllTracks$(): Observable<any> {
    // Traemos todas las canciones con el método Get()
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        // utilizando destructuración llamamos la propiedad data
        map(({data}:any) => {
          return data
        })
      )
  }


  getAllRandom$(): Observable<any> {
    // Traemos todas las canciones con el método Get()
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        // utilizando destructuración llamamos la propiedad data
        mergeMap(({data}:any) => this.skipById(data, 1)),
        // map((dataRevertida) => {
        //   // devolvemos la data con el filtro que le apliquemos
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        tap(data  => console.log('✔✔✔✔',data))

      )
  }

}
