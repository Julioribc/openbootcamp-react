import React from 'react';



const ContactStatus = ({ contact }) => {
    return (
        <div>
            {contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </div>
    );
};


export default ContactStatus;
