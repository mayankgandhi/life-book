import { EntityModel } from "../models/EntityModel";

export class EntityService {
    constructor(
        public entities: Array<EntityModel>
    ) {}
}