import React from 'react';
import PropTypes from 'prop-types';

export const Noticias = ({noticia}) => {
    const { urlToImage,url,title,description,source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={ title }/>
            <span className="card-title">{ source.name }</span>
        </div>
    : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                { imagen }
                <div className="card-content">
                    <h3>{title}</h3>
                </div>
                <div className="card-action">
                    <a 
                        href={ url }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver Noticias Completa
                    </a>
                </div>
            </div>
        </div>
    )
}
Noticias.prototype = {
    noticia : PropTypes.object.isRequired
    
}