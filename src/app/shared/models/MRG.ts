import { Musician } from './musician';
import { Style } from './style';


export class MRG {
    id: number;
    style: Style;
    age_moy_min: number; 
    age_moy_max: number;
    sex: boolean;
    musicians: Musician[];
 
    constructor(mrg?: MRG){
      Object.assign(this, mrg);
    }
}
  