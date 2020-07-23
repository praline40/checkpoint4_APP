import { Instrument } from './instrument';
import { Style } from './style';
import { Group } from './group';
import { Town } from './town';
import { MRM } from './MRM';
import { MRG } from './MRG';

export class Musician {
    id: number;
    surname: string;
    email: string; 
    password: string; 
    created: Date; 
    age: number; 
    sex: boolean;
    towns: Town[];
    styles: Style[];
    instruments: Instrument[];
    groups: Group[];
    mrms: MRM[]; // liste des recherches de musiciens du musicien  - MRM = Musicien qui Recherche un Musicien
    mrgs: MRG[]; // liste des recherches de groupes du musicien - MRG = Musicien qui Recherche un Groupe
    
    constructor(musician?: Musician){
      Object.assign(this, musician);
    }
}