import React from 'react';

class Content extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>{this.props.myDataProp}</h4>
        </div>;
    }
}

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello Runoob!'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                {/* <input type="text" value={value} onChange={this.handleChange} />
                <h4>{value}</h4> */}

                <Content myDataProp={value} updateStateProp={this.handleChange}></Content>
            </div>
        )
    }
}


export default HelloMessage;