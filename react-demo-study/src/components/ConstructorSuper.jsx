import React from 'react'
class Main extends React.Component {
    constructor() {
        super();
        this.state = { count: 1 }
    }

    render() {
        return (
            <div>
                {this.state.count}
                <ChildComponent count={this.state.count} />
            </div>
        )
    }
}

class ChildComponent extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor() {
    //     super();
    constructor(props) {
        super(props);
        this.state = {
            c:this.props.count
        }
    }
    render() {
        return (
            <div>
                {/* {this.props.count} */}
                {this.state.c}
            </div>
        )
    }
}

export default Main;