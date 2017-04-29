import challenges from "./data/challenges";
import Challenge from "./Challenge";

export default class ChallengeRepository {
    getChallenge(index) {
        if (index >= 0 && index < challenges.length) {
            return this._convertDataToChallenge(challenges[index]);
        } else {
            throw new RangeError('Challenge ' + index + ' not found. Valid indexes: 0 to ' + (challenges.length - 1));
        }
    }

    getAllChallengesAscending() {
        return challenges.map(challenge => this._convertDataToChallenge(challenge));
    }

    getAllChallengesDescending() {
        return this.getAllChallengesAscending().reverse();
    }

    _convertDataToChallenge(challengeData) {
        return new Challenge(challengeData.title, challengeData.body);
    }
}