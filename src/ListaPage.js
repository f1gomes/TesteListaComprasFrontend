import React, { useState, useEffect } from 'react';
import Header from './Header';
import api from './api';
import { useMemo } from 'react';

function ListaPage(){

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadData(){
        const response = await api.get('/');
        setProdutos(response.data);
        setLoading(false);
    }

    useMemo(loadData, []);
    
return <div>
    <Header/>
    {loading == true 
    ? <span>Carregando Lista...</span> 
    : <table>{
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
    }
</div>
}

export default ListaPage;