import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React from 'react';
import DocumentContainer from '../components/DocumentSection';
import DocumentView from '../components/DocumentView';
import ExploreContainer from '../components/ExploreContainer';
import { DocType, DocumentModel } from '../models/Document';
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
        <DocumentView />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
