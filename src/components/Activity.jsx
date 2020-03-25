import React, { Component } from 'react';
import { fetchActivities } from '../store/activityActions';
import { connect } from "react-redux";

class Activity extends Component {
    componentDidMount() {
        this.props.dispatch(fetchActivities(this.props.cityId));
    }
    state = {
        isOpen: false
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                Activities {this.state.isOpen ? "⬇️" : "➡️"}
                {this.state.isOpen &&
                    this.props.activities.map(activity => (
                        <div className="activity">
                            <img src={activity.image} className="img" />
                            <div> Title: {activity.title} </div>
                            <div> City: {activity.city} </div>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        activities: state.activity.activities,
        isFetching: state.activity.isFetching

    }
};

export default connect(
    mapStateToProps
)(Activity);