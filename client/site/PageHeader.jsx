import React from 'react'
import {Link} from "react-router-dom";

function PageHeader() {
    return (
        <div>
            <h1>Fotós feladatok</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default PageHeader;