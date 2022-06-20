import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover:TrackModel = {
    name:'cancion',
    album:'primaveras',
    cover:'cover',
    url:'url',
    _id:1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimeService: MultimediaService) { }


  ngOnInit(): void {
    const observer1$: Subscription = this.multimeService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo Canción', response);
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
