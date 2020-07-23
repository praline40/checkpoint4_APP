import { Group } from './group';
import { Instrument } from './instrument';
import { Style } from './style';


export class GRM {
    id: number;
    instrument: Instrument;
    style: Style;
    age_min: number; 
    age_max: number;
    sex: boolean;
    groups: Group[];
 
    constructor(grm?: GRM){
      Object.assign(this, grm);
    }
}
  