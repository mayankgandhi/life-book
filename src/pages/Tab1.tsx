import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const DocsList: React.FC = () => {
  return (
    <IonContent>
      <IonList>
        <IonListHeader>
          Mayank
        </IonListHeader>
        <IonItem>
          <IonLabel>
            Aadhar Card
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  )
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Documents</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DocsList />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
