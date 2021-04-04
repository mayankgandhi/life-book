import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNav, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Entity } from '../models/Entity';
import { inject, injectable } from '../../node_modules/inversify';
import React from 'react';
import EntitySection from './EntitySection';


interface EntityContainerProps {
  entities: Entity[];
}


const EntityContainer: React.FC<EntityContainerProps> = ({ entities }) => {
  return (
   <IonContent fullscreen>
       {/* List of Entities */}
       <EntitySection  type="PERSON" entities={entities}/>
       <EntitySection  type="HOME" entities={entities}/>
   </IonContent>
  );
};


export default EntityContainer;
