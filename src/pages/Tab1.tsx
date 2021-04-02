import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React from 'react';
import DocumentContainer from '../components/DocumentsContainer';
import ExploreContainer from '../components/ExploreContainer';
import { DocType, DocumentModel } from '../models/DocumentModel';
import { EntityModel, EntityType } from '../models/EntityModel';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Documents</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DocumentContainer documents={
          new Array(
            new DocumentModel("this", new EntityModel("a","aasd",EntityType.Home), DocType.aadhaar),
            new DocumentModel("athis", new EntityModel("a","aasd",EntityType.Home), DocType.aadhaar)
            )
        } />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
