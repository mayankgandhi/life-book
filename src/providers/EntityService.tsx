import { EntityModel } from "../models/EntityModel";
import { injectable } from '../../node_modules/inversify';

@injectable()
export class EntityService {
    constructor(
        public entities: Array<EntityModel>
    ) {}
}