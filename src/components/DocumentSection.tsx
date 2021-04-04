import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonItemSliding, IonLabel, IonList, IonListHeader, IonNav, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { image } from 'ionicons/icons';
import React from 'react';
import { DocumentModel } from '../models/Document';

interface DocumentSectionProps {
    name: string
    documents: DocumentModel[];
}

const DocumentSection: React.FC<DocumentSectionProps> = ({name, documents }) => {
    return (
        <IonContent>
        <h1>{name}</h1>
        {/* List of Documents */}
        { documents.map((document: DocumentModel) => (
            <IonCard>
            <img src={document.doc1ID} />
            <IonCardHeader>
            <IonCardSubtitle>{document.type.toUpperCase()}</IonCardSubtitle>
            <IonCardTitle>{document.name}</IonCardTitle>
            </IonCardHeader>
            </IonCard>
            )) }
        </IonContent>
        );
    };
    
    export default DocumentSection;