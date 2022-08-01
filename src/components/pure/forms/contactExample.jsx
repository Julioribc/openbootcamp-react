import React from 'react';

const ContactExample = ({ data, filter, change }) => {

    function changeConnected(e){
      change(data.id)
    }

    function removeContact(e){
      filter(data.id)
    }


    return (
      <div id={data.id}>
        <li style={{ 'listStyleType': 'none' }}>
        {data.name}
        <button 
          style={{ 'margin': '5px 10px', 'border': 'none' }}
          onClick={changeConnected}>
          <i className='bi-toggle-on'
            style={data.connected ? {color: 'green'} : {color: 'gray'}}></i>
        </button>
        <button
         style={ { 'margin': '5px 10px', 'border': 'none' } }
         onClick={removeContact}>
          <i className='bi-trash' style={{color: 'tomato'}}></i>
        </button>
        </li>
      </div>
    );
}

export default ContactExample;
