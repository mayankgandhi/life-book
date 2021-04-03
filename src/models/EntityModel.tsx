
export enum EntityType{
    Person="Person",
    Home="Home",
    Business="Business"
}

export interface EntityModel {
         id: string, 
         name: string, 
         type: EntityType
}