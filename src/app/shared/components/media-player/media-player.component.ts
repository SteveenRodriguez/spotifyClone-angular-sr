import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:TrackModel = {
    name:'cancion',
    album:'primaveras',
    cover:'cover',
    url:'url',
    _id:1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
