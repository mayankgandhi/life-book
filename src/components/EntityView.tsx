import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import firebase from './Firebase';
import React from 'react';   
import { DocType, DocumentModel } from '../models/Document';
import DocumentContainer from './DocumentsContainer';
import { Entity, EntityType } from '../models/Entity';
import EntityContainer from './EntityContainer';

class EntityView extends React.Component<{}, {entities: Entity[]}> {
    
    constructor(props: string) {
        super(props)
        this.state = { entities: new Array() }
        this.fetchEntities()
    }
    
    fetchEntities() {
        const ref = firebase.firestore().collection("/entities")
        ref.onSnapshot ( (querySnapshot) => {
            var entities = new Array()
            querySnapshot.forEach( (doc)=> {
                var model: Entity = {
                    id: doc.id,
                    name: doc.data().name,
                    type: doc.data().EntityType
                }
                entities.push(model)
                this.setState({
                    entities: entities
                })
            });
        });
    }
    
    render() { 
        return (
            <IonContent fullscreen>
            <EntityContainer entities = {this.state.entities}/>
            </IonContent>
            );
        }
    }
    
    export default EntityView;
    