import React, { Component } from 'react';
import './Journal.css';


class Journal extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div id="journalDiv">

                <div id='submitDiv'>
                    <div id='submitDivTitle'>Submit an article</div>
                    <div>Name:
                            <input id='titleInput' name='Title' placehodler='Title' />
                    </div>

                    <div>Body:
                            <input id='bodyInput' name='body' placehodler='Body' />
                    </div>

                    <div id='submitBtn' type='submit'>Submit</div>
                </div>
                <div id='entries'>
                    <div id='entryDivTitle'>Your Entries</div>
                    <div id='entryTitle'>

                    </div>
                    <div id='entryBody'>

                    </div>
                </div>

            </div>
        );
    }
}

export default Journal;