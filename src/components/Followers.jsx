import React from 'react';
import GithubUser from '../components/GithubUser';




class Followers extends React.Component {
    constructor() {
        // to be able to use 'this'
        super();
        // state initiliazation
        this.state = {};
    }

 

    componentDidMount() {
        console.log('The followers component just mounted');
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(data => data.json())
        // at this point data is now json format
        .then(
            data => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    data: data
                });
            }
        );
    }

    componentDidUpdate() {
        console.log('The component just updated');
    }




    render () {
        if (!this.state.data) {
            return (<div>LOADING.. FOLLOWERS</div>);
        }

        const userFollowerData = this.state.data;
        console.log(userFollowerData);
       


        return (
            <div className="followers-page">
            <h3>Followers of {this.props.params.username}</h3>
            
                {userFollowerData.map(
                (val, i) =>
                <GithubUser
                key={i}
                uname={val.login}
                pic={val.avatar_url}
                hurl={val.html_url}
                />                   
                )}
          
          </div>
        );  
    }
};


export default Followers;