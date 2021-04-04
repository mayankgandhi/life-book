import { IonContent, IonListHeader, IonLabel, IonItem, IonList } from "@ionic/react";
import React from "react";
import { Entity } from "../models/Entity";
import EntityContainer from "./EntityContainer";

interface EntitySectionProps {
    type: string;
    entities: Entity[];
  }
  
  const EntitySection: React.FC<EntitySectionProps> = ({type, entities }) => {
    return (
     <IonList>
          <IonListHeader>
            <IonLabel><h1>{type}</h1></IonLabel>
          </IonListHeader>
         {/* List of Entities */}
         {entities.filter((value, index, array) => value.type === type).map((entity, index) => (
          <IonItem>
                 <IonLabel >
                     <h2>{entity.name}</h2> 
                     <p>{entity.type}</p>
                 </IonLabel>
             </IonItem>
         ))}
     </IonList>
    );
  };
  export default EntitySection;