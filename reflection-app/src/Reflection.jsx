import React, { Component } from 'react'

export default class Reflection extends Component {
    render() {
        return (
            <div className="prevEntries">
                <h1>My Previous Entries</h1>
                {
                    this.props.journalEntries.map((entries,index) =>{
                        return(<div>
                            <li>
                                <ul>{entries.date}
                                    <p>{entries.title}</p>
                                    <p>{entries.message}</p>
                                    <p>My confidence is {entries.confidence}.</p>
                                </ul>
                            </li>
                        </div>)
                    })
                }
            </div>
        )
    }
}
