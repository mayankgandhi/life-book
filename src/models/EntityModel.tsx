
export enum EntityType{
    Person="Person",
    Home="Home",
    Business="Business"
}

export class EntityModel {
    constructor(
        public _id: string, 
        public name: string, 
        public type: EntityType
    ) {}
}