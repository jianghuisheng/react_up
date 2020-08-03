import React from 'react';

class Welcome extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World!test...</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
export default Welcome;