import { Entity } from "../models/Entity";
import { injectable } from '../../node_modules/inversify';

@injectable()
export class EntityService {
    constructor(
        public entities: Array<Entity>
    ) {}
}