import { Entity } from "./Entity";

export enum DocType{
    aadhaar = "Aadhaar"
}

export interface Document {
         id: number, 
         entity: Entity, 
         type: DocType
}