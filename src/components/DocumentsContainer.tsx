import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonItemSliding, IonLabel, IonList, IonListHeader, IonNav, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { image } from 'ionicons/icons';
import React from 'react';
import { DocumentModel } from '../models/DocumentModel';

interface DocumentContainerProps {
    documents: DocumentModel[];
}

const DocumentContainer: React.FC<DocumentContainerProps> = ({ documents }) => {
    return (
        <IonContent fullscreen>
        {/* List of Documents */}
        {documents.map((document, index) => (
            <IonItem>
            <IonCard>
            <IonCardHeader>
            <IonThumbnail slot="start">
            <img src='logo-aadhaar.png' />
            </IonThumbnail>
            <IonCardSubtitle>{document.type.toUpperCase()}</IonCardSubtitle>
            <IonCardTitle>{document.entity.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            This is a document
            </IonCardContent>
            </IonCard>
            </IonItem>
            ))
        }
        </IonContent>
        );
    };
    
    export default DocumentContainer;
    