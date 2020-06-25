import React, { useState, useEffect } from 'react';
import Header from './Header';
import api from './api';
import { useMemo } from 'react';

function ListaPage(){

    const [produtos, setProdutos] = useState([]);

    async function loadData(){
        const response = await api.get('/');
        setProdutos(response.data);
    }

    useMemo(loadData, []);
    
return <div>
    <Header/>
    {/*<button onClick= {loadData}> Carregar dados</button>*/}
    <table>{
        produtos.map(item => (
            <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>{item.comprado}</td>
            </tr>
        ))
        }
    </table>

</div>
}

export default ListaPage;