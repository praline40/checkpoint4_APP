import { Town } from './town';


export class Region {
    id: number;
    name: string;
    towns: Town[]; // villes de la région
    
    constructor(region?: Region){
      Object.assign(this, region);
    }
}