import React from 'react';

export const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a class="brand-logo center" href="#!">{titulo}</a>
        </nav>
    )
}