import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

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
    const observer1$ = this.trackService.dataTracksTrending$
      .subscribe( response => {
        this.tracksTrending = response;
        this.tracksRandom = response;
        console.log(response)
      })

      const observer2$ = this.trackService.dataTracksRandom$
      .subscribe( response => {
        this.tracksRandom = [...this.tracksTrending, ...response]
        console.log(response)
      })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(observer => observer.unsubscribe());
  }

}
