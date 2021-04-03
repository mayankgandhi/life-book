import { EntityModel } from "./EntityModel";

export enum DocType{
    aadhaar = "Aadhaar"
}

export interface DocumentModel {

         id: string, 
         entity: EntityModel, 
         type: DocType
}