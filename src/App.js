import React, {Component} from 'react';
import axios from 'axios';
import CountryList from "./components/countryList/countryList";
import CountryInfo from "./components/CountryInfo/countryInfo";
import CatsApp from "./components/catsApp/catsApp";

class App extends Component {
    state = {
        countries: [],
        countryName: null,
    };

    async componentDidMount() {
        await this.countryRequest();
    }

    countryRequest = async () => {
        const resp = await axios.get('all?fields=name;alpha3Code');
        this.setState({countries: resp.data})
    };
    requestForCountryInformation = alpha3Code => {
        this.setState({countryName: alpha3Code});
    };

    render() {
        return (
            <>
                <div style={{maxHeight: 'calc(100vh - 1px)'}} className='border d-flex'>
                    <CountryList
                        counties={this.state.countries}
                        request={this.requestForCountryInformation}
                    />
                    <CountryInfo
                        alpha3Code={this.state.countryName}
                    />
                </div>
                <CatsApp/>
            </>
        );
    }
}

export default App;