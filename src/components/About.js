import User from "./User";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name : "Dummy",
                location : "DummyLocation",
            },  
        };

    }

    async componentDidMount(){
            const data = await fetch("https://api.github.com/users/webdesignervinayak");
            const json = await data.json();
            console.log(json);

            this.setState({
                userInfo : json,
            })
        
    }

    render(){
        return(
            <div>
                <h1>Figgy is an Indian Food Ordering App</h1>
                <h3>This is created by Vinayak</h3>
                <User name={this.state.userInfo.name} location={this.state.userInfo.location}/>
            </div>
        );
    }
}

export default About;