import { Entity, EntityType } from "./Entity";

export enum DocType{
    aadhaar = "AADHAAR"
}

export interface DocumentModel {
         id: string, 
         name: string, 
         type: string,
         doc1ID: string, 
         doc2ID: string

}

