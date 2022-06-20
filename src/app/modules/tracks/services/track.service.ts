import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);


  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'level',
        album: 'dj',
        url: 'http',
        cover: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
      }


      setTimeout(()=> {
        observer.next([trackExample])
      }, 1500)


    })
  }
}
