import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {

        for (let i = 0; i < items.length; i++) {
            
        }

    }

}