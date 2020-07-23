import { Musician } from './musician';
import { GRM } from './GRM';
import { GRG } from './GRG';
import { Town } from './town';
import { Style } from './style';
import { Concert } from './concert';
import { GroupPicture } from './groupPicture';

export class Group {
    id: number;
    name: string;
    musicians: Musician[];
    towns: Town[];
    styles: Style[];
    musicians_researches: GRM[];
    groups_researches: GRG[];
    concerts: Concert[];
    pictures: GroupPicture[];
 
    constructor(group?: Group){
      Object.assign(this, group);
    }
}
  