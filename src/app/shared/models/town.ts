import { Region } from './region';
import { Concert } from './concert';
import { Group } from './group';
import { Musician } from './musician';


export class Town {
    id: number;
    region: Region; 
    concerts: Concert[]; 
    musicians: Musician[];
    groups: Group[];
    name: string;   
    
    constructor(town?: Town){
      Object.assign(this, town);
    }
}