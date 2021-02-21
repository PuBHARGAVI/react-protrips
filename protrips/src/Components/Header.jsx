import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <button><Link to="/">HomeComponent</Link></button>
                    <button><Link to="/AddComponents">AddComponent</Link></button>
                    <button><Link to="/ListComponents">ListComponent</Link></button>
                </div>
            </div>
        )
    }
}
export default Header;