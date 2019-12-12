import React, {PureComponent} from 'react';
import axios from "axios";

class CountryInfo extends PureComponent {
    state = {
      countryInfo: {},
    };

    async componentDidUpdate(prevProps) {
        if(this.props.alpha3Code !== prevProps.alpha3Code){
            const resp = await axios({
                method: 'get',
                url: `alpha/${this.props.alpha3Code}`,
                transformResponse: [async function (data) {
                    data = JSON.parse(data);
                    const counties = await Promise.all(data.borders.map(async country => {
                        return await axios.get(`alpha/${country}?fields=name`);
                    }));
                    const names = counties.map(country => country.data.name);
                    data.borders = names;
                    return data;
                }],
            });
            const data = await resp.data;
            this.setState({countryInfo: data});
        }
    }

    render() {
        const {alpha3Code} = this.props;
        const country = this.state.countryInfo;
        return (
            <div style={{maxHeight: 'calc(100vh - 1px)'}} className='border p-3 w-100 d-flex flex-column'>
                {!alpha3Code && <h1 className='m-auto text-uppercase'>Country information</h1>}
                {alpha3Code && <>
                    <div className='d-flex justify-content-center flex-grow-0 h-50'>
                        <div>
                            <h1>{country.name} ({country.nativeName})</h1>
                            <h4 className='font-weight-bold'>Capital: <span className='font-weight-normal'>{country.capital}</span></h4>
                            <h4 className='font-weight-bold'>Popular: <span className='font-weight-normal'>{country.population}</span></h4>
                            <h4 className='font-weight-bold'>Region: <span className='font-weight-normal'>{country.region}</span></h4>
                        </div>
                        <img className='w-auto h-25 ml-auto' src={country.flag} alt=""/>
                    </div>
                    <div className='flex-grow-1'>
                        <h6>Border with:</h6>
                        <ul>
                            {country.borders && this.state.countryInfo.borders.map(cntr => <li key={cntr}>{cntr}</li>)}
                        </ul>
                    </div>
                </>}
            </div>
        );
    };
}

export default CountryInfo;