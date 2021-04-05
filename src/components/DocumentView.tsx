import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import firebase from './Firebase';
import React from 'react';   
import { DocumentModel } from '../models/Document';
import * as Collections from 'typescript-collections';
import DocumentSection from './DocumentSection';

interface DocumentViewProps {
    name: string
    documents: DocumentModel[];
}

class DocumentView extends React.Component<{},{documentsRecord:  DocumentViewProps[]}> {
    
    documentsRecord: DocumentViewProps[]

    constructor(props: string) {
        super(props)
        this.documentsRecord = new Array()
        this.state = { documentsRecord: this.documentsRecord }
    }
    
    componentDidMount(){
        this.fetchdocumentsRecord()
    }
    
    fetchdocumentsRecord() {
        const ref = firebase.firestore().collection("/entities")
        ref.get().then ( (querySnapshot) => {
            querySnapshot.forEach( (doc)=> {
                let entityName = doc.data().name
                this.fetchDocuments(entityName, doc.id)
            });
        });
    }
    
    fetchDocuments(name: string, entityID: string) {
        let collectionAddress: string = "/entities/"+entityID+"/documents"
        const ref = firebase.firestore().collection(collectionAddress)
        ref.get().then ( (querySnapshot) => {
            var documents: DocumentModel[] = new Array()
            querySnapshot.forEach( (doc) => {
                let data = doc.data()
                let document: DocumentModel = {
                    id: doc.id,
                    name: data.name,
                    type: data.type,
                    doc1ID: data.doc1ID ,
                    doc2ID: data.doc2ID
                }
                documents.push(document)
            })
            if (documents.length > 0) {
                this.addDocumentRecord(name, documents)
            }
        });
    }

    addDocumentRecord(name: string, documents: DocumentModel[]) {
        let entityDocuments: DocumentViewProps = {
            name: name,
            documents: documents
        }
        this.state.documentsRecord.push(entityDocuments)
        let record = this.state.documentsRecord
        this.setState({
            documentsRecord: record
        })
    }
    
    render() {
        return (
            <IonContent>
                    {this.state.documentsRecord.map( (record: DocumentViewProps, index) => {
                        return <DocumentSection name={record.name} documents={record.documents}/>
                    } )}
                <DocumentSection name="Mayank" documents={new Array()}/>
            </IonContent>
            );
        }
    }
    
    export default DocumentView;
    