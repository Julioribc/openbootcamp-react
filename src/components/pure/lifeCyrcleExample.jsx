// Ejemplo de componente de tipo clase que dispone de los
// metodosd e ciclo de vida

import React, { Component } from "react";
import { ReactPropTypes } from "react";

class LifeCyrcleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuadno se instancia el componente')
    }

    componentWillMount(){
      console.log('WillMount: Antes del montaje del componente')
    }

    componentDidMount(){
      console.log('DidMount: Justo al acabar el montaje del componente, antes de renderizarlo a la vista')
    }

    componentWillReceiveProps(nextProps){
      console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
      // Controlar si el componente debe o no actualizarse
      // return true / false
    }

    componentWillUpdate(nextProps, nextState){
      console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(nextProps, nextState){
      console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount(){
      console.log('WillMount Justo antes de desaparecer')
    }

    render(){
      return (
        <div>

        </div>
      )
    }
}

LifeCyrcleExample.propTypes = {
  
}