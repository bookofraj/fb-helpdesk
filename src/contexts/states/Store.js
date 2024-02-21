import { useState } from 'react'
import StatesContext from './StatesContext'

const Store = (props) => {
    const states = {
        "string" : "test0"
    }

    const [show, setShow] = useState('register');

    const handleShowRegister = ()=>{
        console.log("show = reg")
        setShow("register");
    }
    const handleShowLogin = () => {
        console.log("show = login")
        setShow("login");
    }
    const handleShowConnectPages = () => {
        console.log("show = connPgs")
        setShow("connect_pages");
    }
    const handleShowDisconnectPages = () => {
        console.log("show = disConnPgs")
        setShow("disconnect_pages");
    }
    const handleShowAgentScreen = () => {
        console.log("show = Agnt")
        setShow("agent_screen");
    }

    const handleString = (props) => {
        console.log("String handle")
        states.string = {props};
    }

    return(
        <StatesContext.Provider
        value={{states, show, handleShowRegister,
        handleShowLogin, handleShowConnectPages,
        handleShowDisconnectPages, handleShowAgentScreen, handleString}}>
            {props.children}
        </StatesContext.Provider>
    )
}

export default Store