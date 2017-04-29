import React from "react";
import WelcomeArticle from "./WelcomeArticle";
import ChallengeFeed from "../challenges/ChallengeFeed";
import ChallengeRepository from "../challenges/ChallengeRepository";

function HomePage() {
    return (
        <div>
            <header>
                <h2>Üdvözöl a 2015-ös karácsonyi ajándékod! :)</h2>
            </header>
            <WelcomeArticle/>
            <ChallengeFeed challenges={(new ChallengeRepository()).getAllChallengesDescending()}/>
        </div>
    );
}

export default HomePage;