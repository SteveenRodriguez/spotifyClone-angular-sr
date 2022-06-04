import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  mockTrackList:Array<TrackModel> = [


  ]


  constructor() { }

  ngOnInit(): void {

    const {data}:any = (dataRaw as any).default
    console.log(data)
    this.mockTrackList = data;
  }

}
