import React from 'react';
import { NavLink } from 'react-router-dom';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';

import './style.scss';

const Nav = () => (
    <nav className="nav">
        <NavLink className="nav-link-home" to="/">
            <FlashAutoIcon style={{ fontSize: 80 }}  />
        </NavLink>
        <NavLink className="nav-link" to="/">
            Home
        </NavLink>
        <NavLink className="nav-link" to="/parcours">
            Parcours
        </NavLink>
        <NavLink className="nav-link" to="/competences">
            Compétences
        </NavLink>
        <NavLink className="nav-link" to="/projets">
            Projets
        </NavLink>
        <NavLink className="nav-link" to="/contact">
            Contact
        </NavLink>
    </nav>
)

export default Nav;