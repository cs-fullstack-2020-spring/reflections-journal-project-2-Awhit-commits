import React, { Component } from 'react'
import ReflectionForm from './ReflectionForm'
import Reflection from './Reflection'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             reflectionList:[],
        }
    }
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
