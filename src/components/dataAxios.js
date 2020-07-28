import React, { Component } from 'react';
import axios from 'axios';

const data = async () => await axios({
    url: 'https://ion-movies.herokuapp.com',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        query: `
        nowPlaying{
            movies{
              id
              title
              overview
            }
        }
      `,

    }
});

export default class dataAxios extends Component {

    render() {
        console.log(data, 'test code');
        return (
            <div>
                test
            </div>
        )
    }
}
