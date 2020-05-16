import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player'
import ReactPlayer from 'react-player'


class Arts extends Component {
  render() {
    return (
      <section id="arts">
          <ReactPlayer
            //className='react-player'
            url = 'https://soundcloud.com/applebaaam/tacit-x-marrakech'
            width = '100%'
          />
          <ReactPlayer
            //className='react-player'
            url = 'https://soundcloud.com/applebaaam/a-wayprod-kiyoto'
            width = '100%'
          />
      </section>
    );
  }
}


export default Arts;
