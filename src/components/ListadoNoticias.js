import React from 'react'
import { Noticias } from './Noticias'
import PropTypes from 'prop-types';

export const ListadoNoticias = ({noticias}) => {
    return (
        <div className="row">
            {
                noticias.map( noticia =>(
                    <Noticias  
                        key={ noticia.url }
                        noticia={noticia}
                    />
                ))
            }
        </div>
    )
}
ListadoNoticias.prototype = {
    noticias : PropTypes.array.isRequired

}