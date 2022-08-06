import React, { useState, useRef } from 'react';
import ContactExample from '../pure/forms/contactExample';
import { v4 as uuidv4} from 'uuid'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'




const ListContact = () => {

    const nameRef = useRef('')

    const [data, setData] = useState([])
    const [showContact, setShowContact] = useState(false)



    function showContacts(){
      setShowContact(!showContact)
    }

    function submitContact(e){
      e.preventDefault()
      const value = nameRef.current.value
      if(!value) return false
      const contact = {
        'id': uuidv4(),
        'name': value,
        'connected': false
      }
      setData([contact, ...data])
      nameRef.current.value = ''
    }


    function filterContactById(id){
      const dataFilter = data.filter(contact => {return contact.id != id})
      setData(dataFilter)
    }

    function changeStateConnected(id){
      const changeConnected = data.map((contact) => {
        if(contact.id === id){
          contact.connected = !contact.connected
        }
        
        return contact

      })
      return setData(changeConnected)
    }
    
    return (
        <div>
            <h2>List Contact</h2>
            <h3>Create Contact</h3>
            <form onSubmit={submitContact}>
              <input
               placeholder='New Contact'
               ref={nameRef} />
              <button type='submit'>Create Contact</button>
            </form>



            <button onClick={showContacts}>Show Contacts</button>
            {
              !showContact
               ? (<ul>
                    {
                      data.map((contact, index) => {
                        return (
                          <ContactExample
                            filter={filterContactById}
                            change={changeStateConnected}
                            data={contact}
                            key={index}
                          />
                        )
                      })
                    }
                </ul>)
               : (<div></div>)
            }

        </div>
    );
}

export default ListContact;
