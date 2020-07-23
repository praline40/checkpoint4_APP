import { Concert } from './concert';
import { Musician } from './musician';
 

export class MusicianPicture {
    id: number;
    musician: Musician;
    lieu: String; 
    date: Date; 
    concert: Concert; 

    constructor(musicianPicture?: MusicianPicture){
      Object.assign(this, musicianPicture);
    }
}
  