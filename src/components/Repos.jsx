import React from 'react';
import UserRepo from './UserRepo';


class Repos extends React.Component {

constructor() {
    super();
    this.state={};
}


componentDidMount() {
    console.log('The Repos component just mounted.');
    this.setState({loading:true});
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
    .then (data => data.json())
    .then (
            data => {
                this.setState({
                    data: data
                });
            }

    );
   


  


}


componentDidUpdate () {
    console.log('The Repos component just updated');
}


render () {
    if(!this.state.data) {
        return (<div>LOADING.. REPOSITORIE(S)</div>);
    }
    console.log(this.state.data);

    const userRepoData = this.state.data;
    
    return (
        <div className='repos-page'>
            <h3>Repositorie(s) of {this.props.params.username}</h3>
            {/* values of the json format */}
            {userRepoData.map(
            (val,i) =>
                <UserRepo
                keys={i}
                repoName={val.name}
                repoUrl={val.html_url}
                />
            )}


        </div>

    );
  

}




};


export default Repos;