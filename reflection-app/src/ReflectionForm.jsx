import React, { Component } from 'react'

export default class ReflectionForm extends Component {
    constructor(props) {
        super(props)
    //Initalizing properties in the state object so the input values have variables
        this.state = {
             title:"",
             message:"",
             confidence:"",
             date:"",
             journalEntries:[]
        }
    }
    //Capturing values to from input fields and storing them in their respective state
    handleChange = (event) =>{
        if (event.target.name ==="title"){
            this.setState({title:event.target.value})
        }
        else if (event.target.name ==="date"){
            this.setState({date:event.target.value})
        }
        else if (event.target.name ==="message"){
            this.setState({message:event.target.value})
        }
        else if (event.target.name ==="confidence"){
            this.setState({confidence:event.target.value})
        }
    }
    //Function for clicking submit button
    handleSubmission =(event) =>{
        //Stop Reloading 
        event.preventDefault();

        //Pushes values from input field into a list
        this.state.journalEntries.push({title:this.state.title,date:this.state.date,message:this.state.message,confidence:this.state.confidence})

        //Update list with values
        this.setState({journalEntries:this.state.journalEntries})

        //Santiy Check
        console.log(this.state.journalEntries);

        //For callback function so updated list can be retrieved 
        this.props.getEntries(this.state.journalEntries)
    }
    render() {
        return (
            <div>
                <form action="">
                    <div className ="form">
                        <fieldset>
                            <legend>
                                Add A New Entry
                            </legend>
                            <p>
                                <label htmlFor="title">Title: </label>
                                <input type="text" name="title" id="title" value = {this.state.title} onChange={this.handleChange} placeholder="Title"/>
                            </p>
                        
                            <p>
                                <label htmlFor="date">Date: </label>
                                <input type="date" name="date" id="date" value ={this.state.date} onChange = {this.handleChange}/>
                            </p>

                            <p>
                                <label htmlFor="message"></label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder ="Message" value ={this.state.message} onChange={this.handleChange}>Message:</textarea>
                            </p>
                            <p>
                                <select name="confidence" id="confidence" value={this.state.confidence} onChange ={this.handleChange}>
                                    <option value="">Please Select A Confidence</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </p>
                            <button onClick = {this.handleSubmission}>Submit</button>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }
}
