import React, {Component} from "react";

export default class WelcomeArticle extends Component {
    render() {
        return (
            <article>
                <p>Boldog karácsonyt! :)</p>
                <p>Ez az oldal mostantól minden héten automatikusan frissülni fog, és ad egy fotós feladatot, melynek teljesítésére 1 hét fog rendelkezésedre állni.</p>
                <p>A képeket postolhatod Facebookra, vagy csinálhatsz neki egy fotós blogot, pl. a Strikingly.com-on, ami egy nagyon egyszerű blogos oldal.</p>
                <p>Én például egy ilyet csináltam példának: <a href="http://davidsphotos.strikingly.com/" target="_blank">Minta blog</a>.</p>
                <ul>
                    <li>Menj fel a <a href="http://www.strikingly.com" target="_blank">www.strikingly.com</a> oldalra.</li>
                    <li>Regisztrálj Facebookkal.</li>
                    <li>Válassz template-et. Én a "light deck"-et választottam.</li>
                    <li>Innentől inkább segítek, mert bonyolultabb leírni, mint megcsinálni. :)</li>
                </ul>

                <p>Jó fotózást! :)</p>
            </article>
        );
    }
}
