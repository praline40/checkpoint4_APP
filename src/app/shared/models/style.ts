import { Group } from './group';
import { Musician } from './musician';


export class Style {
    id: number;
    name: string;
    musicians: Musician[];
    groups: Group[];
    
    constructor(style?: Style){
      Object.assign(this, style);
    }
}