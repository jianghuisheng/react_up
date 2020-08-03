import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    } else {
        return (
            <div>
                {props.name}
            </div>
        )
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} name='ahhah' />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'show' : 'hide'}
                </button>
            </div>
        )
    }
}


export default Page;