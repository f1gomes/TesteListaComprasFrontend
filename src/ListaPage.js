import React from 'react';
import Header from './Header';

const produtos = [
    {
        id:1,
        nome:"Arroz",
        quantidade:10,
        comprado:false
    },
     {
        id:2,
        nome:"Feijão",
        quantidade:2,
        comprado:true
    },
]

function ListaPage(){
return <div>
    <Header/>
    <table>{
        produtos.map(item=>(
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