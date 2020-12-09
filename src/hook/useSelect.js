import React, { useState } from 'react'

export const useSelect = (stateInicial,opciones) => {
    const [optiones, setUpdateState] = useState(stateInicial);
    const SelectNoticia = ()=>(
        <select
            className="browser-default"
            value={optiones}
            onChange={ e => setUpdateState(e.target.value) }
        >
            <option value="">-- Select --</option>
            {
                opciones.map( ({value,label}) => (
                    <option key={value} value={value}>{label}</option>
                ))
            }
        </select>
    );
   
    return [optiones,SelectNoticia];
}
