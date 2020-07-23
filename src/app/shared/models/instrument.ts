import { Musician } from './musician';


export class Instrument {
    id: number;
    name: string;
    musicians: Musician[]; // musiciens qui jouent de cet instrument
    
    constructor(instrument?: Instrument){
      Object.assign(this, instrument);
    }
}