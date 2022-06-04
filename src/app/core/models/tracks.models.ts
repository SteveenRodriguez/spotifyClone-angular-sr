import { ArtisModel } from "./artists.models";

export interface TrackModel {
  name:string,
  album:string,
  cover:string,
  url:string,
  _id:string | number,
  artis?:ArtisModel;
}
