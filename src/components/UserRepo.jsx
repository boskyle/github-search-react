import React from 'react';

class UserRepo extends React.Component {


constructor() {
    super();
    this.state = {};
}
    
componentDidMount() {
    
    }
    
componentDidUpdate() {
        
    }


render() {
    return (
      

    <a href={this.props.repoUrl}><span style={{display: "block"}}>{this.props.repoName}</span></a>
     
    );
}
    



};

export default UserRepo;