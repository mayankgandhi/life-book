import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonFab, IonFabButton, 
  IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import EntityContainer from '../components/EntityContainer';
import ExploreContainer from '../components/ExploreContainer';
import { Entity, EntityType } from '../models/Entity';
import { EntityService } from '../providers/EntityService';
import './Tab3.css';
import { addCircleOutline } from 'ionicons/icons';
import EntityView from '../components/EntityView';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addCircleOutline} />
          </IonFabButton>
        </IonFab>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EntityView />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
