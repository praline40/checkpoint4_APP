import { Town } from './town';
import { Group } from './group';
import { GroupPicture } from './groupPicture';
import { MusicianPicture } from './musicianPicture';

export class Concert {
    id: number;
    title: string;
    date: Date;
    groups: Group[];
    town: Town; 
    address: String; 
    groupPictures: GroupPicture[];
    musicianPictures: MusicianPicture[];
    
    constructor(concert?: Concert){
      Object.assign(this, concert);
    }
  }
  