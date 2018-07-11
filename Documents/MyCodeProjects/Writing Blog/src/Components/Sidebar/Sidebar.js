import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
           
            
        }
      
    }



    render() {

        return (
          
                <div id="sidebar"> 
                    <div class="sidebarLink" onClick={this.props.journal}>
                        Journal
                    </div>
                    <div class="sidebarLink"> 
                        Concerts and Travel
                    </div>
                    <div class="sidebarLink">
                       Articles
                    </div>
                    <div class="sidebarLink">
                       Photography
                    </div>
                    <div class="sidebarLink">
                       Code Snips
                    </div>
                    
                    
                </div>

                
           
        );
    }
}

export default Sidebar;