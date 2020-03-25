import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/cityActions";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { Link } from 'react-router-dom';

class Cities extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCities());
    }
    render() {
        return (
            <div>
                <CarouselProvider
                    isIntrinsicHeight={true}
                    totalSlides={this.props.cities.length}
                    visibleSlides={Math.min(4, this.props.cities.length)}
                >
                    <Slider>
                        {
                            this.props.cities
                                .map((city, index) => (
                                    <Slide index={index}>
                                        <Link to={`/itineraries/${city._id}`}>
                                            <div className="city">
                                                <img src={city.image} className="img" />
                                                <div> Name: {city.name} </div>
                                                <div> Country: {city.country} </div>
                                            </div>
                                        </Link>
                                    </Slide>
                                ))
                        }
                    </Slider>
                    <DotGroup dotNumbers={false} />
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
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