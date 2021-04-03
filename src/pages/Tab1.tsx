import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React from 'react';
import DocumentContainer from '../components/DocumentsContainer';
import ExploreContainer from '../components/ExploreContainer';
import { DocType, Document } from '../models/Document';
import { Entity , EntityType } from '../models/Entity';
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
          new Array()
        } />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
