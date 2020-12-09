import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a className="brand-logo center" href="#!">{titulo}</a>
        </nav>
    )
}
Header.prototype = {
    titulo: PropTypes.string.isRequired
}