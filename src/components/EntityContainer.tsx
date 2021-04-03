import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNav, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';
import { EntityModel } from '../models/EntityModel';
import { inject, injectable } from '../../node_modules/inversify';


interface EntityContainerProps {
  entities: EntityModel[];
}

const EntityContainer: React.FC<EntityContainerProps> = ({ entities }) => {
  return (
   <IonContent fullscreen>
    <IonListHeader>
      <IonLabel>Entities</IonLabel>
    </IonListHeader>
       {/* List of Entities */}
       {entities.map((entity, index) => (
           <IonItem button onClick={()=> { console.log("name")}}>
               <IonLabel >
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
