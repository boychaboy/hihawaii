import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var research = this.props.data.research;
      var music = this.props.data.music;
      var design = this.props.data.design;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h1>About Me</h1>
            <h2>Researcher</h2>
            <p>{research}</p>
            <h2>Musician</h2>
            <p>{music}</p>
            <h2>Designer</h2>
            <p>{design}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
