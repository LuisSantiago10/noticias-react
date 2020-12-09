import React from 'react';
import { useSelect } from '../hook/useSelect';
import styles from './FormNoti.module.css';
import PropTypes from 'prop-types';

export const FormNoti = ({setCategory}) => {

    const OPCIONES = [
        { value:'general',label:'General'},
        { value:'business',label:'Negocios'},
        { value:'entertainment',label:'Entretenimiento'},
        { value:'health',label:'Salud'},
        { value:'science',label:'Ciencia'},
        { value:'sports',label:'Deportes'},
        { value:'technology',label:'Tecnologia'}
    ]

    const [ categoria,SelectNoticia ] = useSelect('health',OPCIONES);

    const buscarNoticias = e =>{
        e.preventDefault();
        setCategory(categoria);
    }
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-2">
                <form 
                    onSubmit={ buscarNoticias }
                >
                    <h2 className={ styles.heading}>Busca tu noticia</h2>
                    <SelectNoticia 
                    
                    />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className= {`${ styles['btn-block'] } btn-large amber darken-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
FormNoti.prototype = {
    titulo: PropTypes.func.isRequired
}