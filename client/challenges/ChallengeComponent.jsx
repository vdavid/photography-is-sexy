import React, {Component} from "react";
import PropTypes from "prop-types";
import Challenge from "./ChallengeComponent";

export default class ChallengeComponent extends Component {
    //noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
    static propTypes = {
        challenge: PropTypes.instanceOf(Challenge),
    };

    render() {
        const {challenge} = this.props;
        return (
            <article>
                <h1>{challenge.title}</h1>
                <div>{challenge.body}</div>
            </article>
        )
    }
}