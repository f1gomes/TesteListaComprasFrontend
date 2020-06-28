import React, { useState, useMemo } from 'react';
import Header from './Header';
import api from './api';
import {Table, TableRow, TableCell } from '@material-ui/core';


//yarn add @material-ui/core

function ListaPage(){

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadData(){
        const response = await api.get('/');
        setProdutos(response.data);
        setLoading(false);
    }

    useMemo(loadData, []);
    
return <>
    <Header/>
    {loading == true 
    ? <span>Carregando Lista...</span> 
    :
     <Table style ={{marginTop:'80px'}}>
       {
       produtos.map(item => (
            <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.quantidade}</TableCell>
                <TableCell>{item.comprado}</TableCell>
            </TableRow>
        ))
        }
    </Table>
     }
</>
}
export default ListaPage;