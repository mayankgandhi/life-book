import { EntityModel } from "./EntityModel";

export enum DocType{
    aadhaar = "Aadhaar"
}

export class DocumentModel {
    constructor(
        public _id: string, 
        public entity: EntityModel, 
        public type: DocType
    ) {}
}