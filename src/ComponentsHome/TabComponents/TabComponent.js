import React, { Component } from 'react'
import { Tab,Tabs,TabList, TabPanel } from 'react-tabs'
import TabDoor from "./tabs_nav/TabDoor";
import TabPrice from "./tabs_nav/TabPrice";
import "../TabComponents/tabs_nav/TabsNav.css";
import TabContentOne from "./tabs_nav/TabContentOne";
import TabContentTwo from "./tabs_nav/TabContentTwo";


 class TabComponent extends Component {
     
    state =
    {
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex ={this.state.tabIndex} 
                onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                         <Tab className={`${this.state.tabIndex === 0 ? '.tab-selected active' : null}`} >
                            <TabDoor/> 
                             <p><strong> ¿Qué es PlayUp? </strong></p>
                                </Tab>
                                <Tab className={`${this.state.tabIndex === 1 ? '.tab-selected active' : null}`}>
                            <TabPrice/>
                        <p><strong> ¿Cuánto cuesta PlayUp? </strong></p>
                        </Tab>
                    </TabList>
                    {/*Tabs content*/}
                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent;