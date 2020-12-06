import React from 'react';
import GithubUser from '../components/GithubUser';

class Following extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

 

    componentDidMount() {
        console.log('The followers component just mounted');
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
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
            return (<div>LOADING.. FOLLOWING</div>);
        }

        const userFollowingData = this.state.data;

       


        return (
            <div className="followers-page">
            <h3>Followings of {this.props.params.username}</h3>
            
                {userFollowingData.map(
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


export default Following;