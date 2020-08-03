import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PropTypes from 'prop-types'
import Toggle from './components/Toggle'
import Proper from './components/Proper'
import Page from './components/Page'
// import HelloMount from './components/HelloMount'
import Button from './components/Button'
import HelloMessage from './components/HelloMessage'
import FlavorForm from './components/FlavorForm'
import ConstructorSuper from './components/ConstructorSuper'

class WebSite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "菜鸟教程",
            site: "https://www.runoob.com"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        )
    }
}

class Name extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}

const title = 'haha';
class MyTitle extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.title}</h1>
        );
    }
}
MyTitle.defaultProps = {
    title: 'hahah'
}
// MyTitle.propTypes = {
//     title:PropTypes.string
// }
MyTitle.propTypes = {
    // title:PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.number
    // ]),
    title: PropTypes.string.isRequired
}

function LoginHandler() {
    return <h1>欢迎回来</h1>
}

function RegisterHandler() {
    return <h1>请先注册</h1>
}

function IsLogin(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LoginHandler />
    }
    return <RegisterHandler />
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            登陆
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            退出
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }


        return (
            <div>
                <IsLogin isLoggedIn={isLoggedIn} />
                <div>
                    {isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick} />) : (<LoginButton onClick={this.handleLoginClick} />)}
                </div>
                {button}
            </div>
        );
    }
}

ReactDOM.render(<WebSite />, document.getElementById('example'));
ReactDOM.render(<MyTitle title={title} />, document.getElementById('example'));
ReactDOM.render(<Toggle />, document.getElementById('example'));
ReactDOM.render(<Proper />, document.getElementById('example'));

ReactDOM.render(<IsLogin isLoggedIn={true} />, document.getElementById('example'))
ReactDOM.render(<LoginControl />, document.getElementById('example'))

function Mailbox(props) {
    // let HHH = 'test';
    // console.log('%c' + HHH + '', "color:#036;font-size:20px");
    // console.warn(HHH)
    // console.error(HHH)
    // console.log('%c' + HHH + '', "color:green;font-size:20px");
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 2 &&
                <h2>
                    您有 {unreadMessages.length} 条未读信息。
          </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('example')
);




ReactDOM.render(
    <Page />,
    document.getElementById('example')
);

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//     <li>{numbers}</li>
// );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('example')
// );

function NumberList(prps) {
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList number={numbers} />,
    document.getElementById('example')
)


function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}



const posts = [
    { id: 1, title: 'Hello World', content: 'welcome' },
    { id: 2, title: 'Installation', content: 'use npm!' }
]


ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('example')
)


// ReactDOM.render(
//     <HelloMount name="world" />,
//     document.getElementById('example')
// )

ReactDOM.render(
    <Button />,
    document.getElementById('example')
)

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
)

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('example')
)

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;


        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            [title]: value
        });
    }

    render() {
        console.log(document.getElementsByTagName('input'));
        return (
            <form>
                <label>
                    是否离开:
            <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    访客数:
            <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
ReactDOM.render(
    <Reservation />,
    document.getElementById('example')
);

class Test1 extends React.Component {
    // 构造函数，es6默认方法，用来新建父类的this对象，必须要有，没写会默认添加空的constructor()方法
    constructor(props) {
        console.log(props)
        // 子类没有自己的方法继承父元素this
        super(props);
        this.state = { value: 'Hello Runoob!' };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ value: '菜鸟教程' })
    }
    // handleChange=(e)=>{
    //     this.setState({value:'菜鸟教程'})
    // }

    render() {
        var value = this.state.value;
        return (
            <div>
                <button onClick={this.handleChange}>点我</button>
                <h4>{value}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <Test1 />,
    document.getElementById('example')
)

ReactDOM.render(
    <ConstructorSuper />,
    document.getElementById('example')
)

class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>点我</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Hello Runoob!'
        }
    }

    handleChange = (e) => {
        this.setState({
            value: '菜鸟教程！'
        })
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <Content myDataProp={value} updateStateProp={this.handleChange} />
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('example')
)

class MyComponent extends React.Component {


    handleClick() {
        this.refs.myInput.focus();
        let _val = this.refs.myInput.value;
        console.log('%c'+_val+'','color:#039;font-size:20px');
        
    }

    render() {
        return (
            <div>
                <input type="text" ref="myInput" />
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick.bind(this)} />
            </div>
        )

    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
)