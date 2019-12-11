import React, {Component} from 'react';
import axios from 'axios';
import CountryList from "./components/countryList/countryList";

class App extends Component {
    state = {
        countries: []
    };
    async componentDidMount() {
        await this.countryRequest();
    }
    countryRequest = async () => {
        const resp = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
        this.setState({countries: resp.data})
    };
    render() {
        return (
            <div style={{maxHeight: 'calc(100vh - 1px)'}} className='border'>
              <CountryList
                counties={this.state.countries}
              />
            </div>
        );
    }
}

export default App;