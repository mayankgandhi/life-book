import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { EntityModel } from '../models/EntityModel';

interface EntityContainerProps {
  entities: EntityModel[];
}

const EntityContainer: React.FC<EntityContainerProps> = ({ entities }) => {
  return (
   <IonContent>
    <IonListHeader>
      <IonLabel>Entities</IonLabel>
    </IonListHeader>
       {/* List of Entities */}
       {entities.map((entity, index) => (
           <IonItem>
               <IonLabel>
                   <h2>{entity.name}</h2> 
                    <p>{entity.type}</p>
               </IonLabel>
           </IonItem>
       ))
    }
   </IonContent>
  );
};

export default EntityContainer;
