import { Concert } from './concert';
import { Group } from './group';
 

export class GroupPicture {
    id: number;
    group: Group;
    lieu: String; 
    date: Date; 
    concert: Concert; 

    constructor(groupPicture?: GroupPicture){
      Object.assign(this, groupPicture);
    }
}
  