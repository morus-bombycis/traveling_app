import React, { Component } from 'react'

export default class Cities extends Component {
    state = {
        cities: [],
        isFetching: false
    }
    fetchCities = () => {
        this.setState({...this.state, isFetching: true})
        fetch("http://127.0.0.1:5000/cities/all")
          .then(response => response.json())
          .then(result => this.setState({cities: result, 
                                         isFetching: false}))
          .catch(e => console.log(e));
    }
    componentDidMount() {
        this.fetchCities()
    }
    render() {
        return (
            <div className="cities">
                {this.state.cities.map(city => (
                    <div className="city">
                        <img src={city.image} className="img" />
                        <div>Name: {city.name}</div>
                        <div>Country: {city.country}</div>
                    </div>
                ))}
            </div>
        )
    }
}
