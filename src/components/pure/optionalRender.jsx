import React, { useState } from 'react';


// Estilo para usuario logeado
const loggedStyle = {
  backgroundColor: 'green',
  color: 'white',
  fontWeight: 'bold'
}

// Estilo para usuario no logeado
const unLoggedStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  fontWeight: 'bold'
}





// Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>Login</button>
  )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>Logout</button>
  )
}











const OptionalRender = () => {

    const [access, setAccess] = useState(true)
    const [nMessages, setNMesages] = useState(0)


    // const updateAccess = () => {
    //   setAccess(!access);
    // }

    const loginAction = () => {
      setAccess(true)
    }

    const logoutAction = () => {
      setAccess(false)
    }

    let optionalButton;

    if(access){
      optionalButton = <LogoutButton propStyle={ unLoggedStyle } logoutAction={logoutAction}></LogoutButton>
    } else {
      optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }


    let addMessages = () => {
      setNMesages(nMessages + 1)
    }


    return (
        <div>
        {/* Optional Button */}
            {optionalButton}

        {/* N Mesagges unread */}
        {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
        {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
        {nMessages === 0 && <p>There are no new Message</p>}

        {/* Ternay Operator */}
        {nMessages > 0
         ? <p>You have {nMessages} new message...</p>
         : <p>There are no new Message</p>}
        <button onClick={addMessages}>{nMessages === 0 ? 'add your first message' : 'Add new Message'}</button>


        </div>
    );
}

export default OptionalRender;
