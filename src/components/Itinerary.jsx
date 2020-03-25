import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/itineraryActions";
import Activity from './Activity'

class Itineraries extends Component {
    componentDidMount() {
        this.props.dispatch(fetchItineraries(this.props.match.params.cityId));
    }
    handleFilter = e => {
        this.setState({
            filter: e.target.value
        });
    };
    render() {
        return (
            <div>
                <div className="itinerary">
                    {this.props.itineraries.length === 0 &&
                        <h2>The selected city has no itineraries.</h2>
                    }
                    {this.props.itineraries
                        .map(itinerary => (
                            <div className="itinerary">
                                <img src={itinerary.profile_picture} className="img" />
                                <div> Title: {itinerary.title} </div>
                                <div> Rating: {itinerary.rating} </div>
                                <div> Duration: {itinerary.duration} </div>
                                <div> Price: {itinerary.price} </div>
                                <div> Hashtag: {itinerary.hashtag} </div>
                            </div>
                        ))}
                    <Activity cityId={this.props.match.params.cityId} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        itineraries: state.itinerary.itineraries,
        isFetching: state.itinerary.isFetching

    }
};

export default connect(
    mapStateToProps
)(Itineraries);