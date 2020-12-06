import React from 'react';

class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        
    }

    render () {
        return (
      
                <div className='followers-container'>   
                <a href={this.props.hurl}><img src={this.props.pic} width='25px'/></a>
        <a href={this.props.hurl}><span className='followers-text'>{this.props.uname}</span></a>
                </div>
  
        );

    }



};

export default GithubUser;