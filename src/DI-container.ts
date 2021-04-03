
import { Container } from '../node_modules/inversify'
import { EntityService } from './providers/EntityService'

var diContainer = new Container()
diContainer.bind<EntityService>(EntityService).toSelf();

export default diContainer;