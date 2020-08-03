import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    请选择您最喜欢的网站
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="gg">Google</option>
                        <option value="rn">Runoob</option>
                        <option value="tb">Taobao</option>
                        <option value="fb">Facebook</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default Reservation;