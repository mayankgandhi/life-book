import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EntityContainer from '../components/EntityContainer';
import ExploreContainer from '../components/ExploreContainer';
import { EntityModel, EntityType } from '../models/EntityModel';
import { EntityService } from '../providers/EntityService';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EntityContainer entities={ new Array(
      new EntityModel("1","Mayank",EntityType.Person),
      new EntityModel("2","Mayank",EntityType.Person)
  )
  }/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
