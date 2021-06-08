import React, { Component } from 'react'
import Home from "../Home/Home";
import TabComponent from "../TabComponents/TabComponent";


 class Main extends Component {
    render() {
        return (
            <div>
                <Home/>
                <TabComponent/>
             
            </div>
        )
    }
}
export default Main;