import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import firebase from './Firebase';
import React from 'react';   
import { DocType, DocumentModel } from '../models/Document';
import DocumentContainer from './DocumentsContainer';
import { EntityType } from '../models/Entity';

class DocumentView extends React.Component<{}, {documents: DocumentModel[]}> {

    documents: DocumentModel[]

    constructor(props: string) {
        super(props)
        this.documents = new Array()        
        this.state = { documents: this.documents }
        this.fetchDocuments()
    }

    fetchDocuments() {
        const ref = firebase.firestore().collection("/entities/yPUYfqGWU05jbiftN74y/documents/")
        ref.get().then ( (querySnapshot) => {
            querySnapshot.forEach( (doc)=> {
                var model: DocumentModel = {
                    id: doc.id, 
                    name: doc.data().name, 
                    type: doc.data().type, 
                    doc1ID: doc.data().doc1ID, 
                    doc2ID: doc.data().doc2ID
                }
                this.documents.push(model)
                this.setState({
                    documents: this.documents
                })
            });
        });
    }
    
    render() { 
        return (
            <IonContent fullscreen>
            <DocumentContainer documents = {this.state.documents}/>
            </IonContent>
            );
        }
    }
    
    export default DocumentView;
