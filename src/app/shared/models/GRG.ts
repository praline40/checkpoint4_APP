import { Group } from './group';
import { Style } from './style';


export class GRG {
    id: number;
    style: Style;
    age_moy_min: number; 
    age_moy_max: number;
    sex: boolean;
    groups: Group[];
 
    constructor(grg?: GRG){
      Object.assign(this, grg);
    }
}
  