
export enum EntityType{
    Person="Person",
    Home="Home",
    Business="Business"
}

export interface Entity {
         id: number, 
         name: string, 
         type: EntityType
}