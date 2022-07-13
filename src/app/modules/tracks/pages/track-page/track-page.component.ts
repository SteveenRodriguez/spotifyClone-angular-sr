import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending:Array<TrackModel> = []
  tracksRandom:Array<TrackModel> = []

  listObservers$: Array<Subscription> =[]

  constructor(private trackService: TrackService) { }


  ngOnInit(): void {

    this.loadDataAll();
    this.loadDataRandom();

  }

  async loadDataAll():Promise<any> {
   // se llama el metodo getAllTracks$ el cual retorn un observable, por tanto nos suscribimos para  obtener la data
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  }


  loadDataRandom():void {
     // se llama al método getAllRandom$ return un observable
     this.trackService.getAllRandom$()
       .subscribe((response:TrackModel[]) => {
         this.tracksRandom = response;
         // this.tracksRandom = response;
         console.log(response)
       })
   }

  ngOnDestroy(): void {

  }

}
