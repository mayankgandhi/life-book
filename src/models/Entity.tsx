
export enum EntityType{
    Person="Person",
    Home="Home",
    Business="Business"
}

export interface Entity {
         id: string, 
         name: string, 
         type: string
}