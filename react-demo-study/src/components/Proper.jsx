import React from 'react';

class Proper extends React.Component {
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }
    
    

    propHandler(name,e){
        e.preventDefault();
        alert(name)
    }
    
    render(){
        return (
            <div>
                <p>hello</p>
                <a href="http:www.baidu.com" onClick={this.propHandler.bind(this,this.state.name)}>Click</a>
                {/* 通过 bind() 方法传递参数。 */}
            </div>
        );
    }
}


export default Proper;