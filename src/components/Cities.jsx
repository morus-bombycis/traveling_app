import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/cityActions";
import { Link } from 'react-router-dom';

class Cities extends Component {
    state = {
        filter: ""
    };
    componentDidMount() {
        this.props.dispatch(fetchCities());
    }
    handleFilter = e => {
        this.setState({
            filter: e.target.value
        });
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.filter}
                    onChange={this.handleFilter}
                    placeholder="Filter by city"
                />
                <div className="cities">

                    {this.props.cities
                        .filter(city =>
                            city.name
                                .toLowerCase()
                                .startsWith(this.state.filter.toLowerCase())
                        )
                        .map(city => (
                            <div className="city">
                                <img src={city.image} className="img" />
                                <div> Name: {city.name} </div>
                                <div> Country: {city.country} </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        cities: state.cities.cities,
        isFetching: state.cities.isFetching

    }
};

export default connect(
    mapStateToProps
)(Cities);