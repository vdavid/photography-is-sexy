import React, {Component} from "react";
import PropTypes from "prop-types";
import ChallengeComponent from "./ChallengeComponent";
import Challenge from "./Challenge";

export default class ChallengeFeed extends Component {
    //noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
    static propTypes = {
        challenges: PropTypes.arrayOf(PropTypes.instanceOf(Challenge)),
    };

    //noinspection JSUnusedGlobalSymbols
    static defaultProps = {
        challenges: []
    };

    render() {
        const {challenges} = this.props;
        const challengeComponents = challenges.map((challenge, index) =>
            <ChallengeComponent challenge={challenge} key={index} />
        );
        return (
            <section>{challengeComponents}</section>
        )
    }
}