import React, { useEffect , useState } from 'react';
import Header from './Header';
import api from './api';

/*const produtos = [
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
]*/

function ListaPage(){

    const [produtos, setProdutos] = useState([]);

    async function loadData(){
        const response = await api.get('/');
        const produtos = response.data;
        setProdutos(produtos);
        
    }

    useEffect(loadData, []);
    

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