import { Musician } from './musician';
import { Instrument } from './instrument';
import { Style } from './style';


export class MRM {
    id: number;
    instrument: Instrument;
    style: Style;
    age_min: number; 
    age_max: number;
    sex: boolean;
    musicians: Musician[];
 
    constructor(mrm?: MRM){
      Object.assign(this, mrm);
    }
}
  