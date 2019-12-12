import React, {Component} from 'react';
import axios from 'axios';
import Button from "reactstrap/es/Button";

class CatsApp extends Component {
    state = {
      cat: '',
    };

    createNewImg = async () => {
        axios.defaults.headers.common['x-api-key'] = '0c9f5f5f-aa56-451d-9ce1-3433d425545f';
        let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } );
        this.setState({cat: response.data[0].url});
    };
    render() {
        return (
            <div style={{height: '600px'}} className='d-flex flex-column align-items-center p-3'>
                <Button className='mb-4' onClick={this.createNewImg}>Get new cat</Button>
                {this.state.cat && <img src={this.state.cat} style={{with: 'auto', height: '500px'}} className="rounded mx-auto d-block" alt="..."/>}
            </div>
        );
    }
}

export default CatsApp;