import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import ContactStatus from '../../container/contact_status';


const ContactComponent = () => {
    const defaultContact = new Contact('julio', 'bolivar', 'julioribc@gmail.com', false)
    return (
        <ContactStatus contact={defaultContact}/>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
