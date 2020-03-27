import React, { Component } from 'react'
import ReflectionForm from './ReflectionForm'
import Reflection from './Reflection'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    //Initializing list that will update entries and pass journal entries to child component
        this.state = {
             reflectionList:[],
        }
    }
    //Callback function so list could be retrieve from form component and passed down to reflection component to be rendered
    getEntries =(updatedEntries)=>{
        this.setState({reflectionList:updatedEntries})
    }
    render() {
        return (
            <div className="container">
                <h1>Reflection Journal</h1>
                <ReflectionForm getEntries = {this.getEntries}/>
                <Reflection journalEntries = {this.state.reflectionList}/>
            </div>
        )
    }
}
