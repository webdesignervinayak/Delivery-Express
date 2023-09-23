import React from "react";

class User extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            count : 0,
        };
    }

    render(){
        return(
            <div>
                <h1> Count : {this.state.count}</h1>
                <button onClick= {() => {
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}
                >Count Increaser</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h3>Contact: @VinayakpunithR</h3>
            </div>
        )
    }
}

export default User;