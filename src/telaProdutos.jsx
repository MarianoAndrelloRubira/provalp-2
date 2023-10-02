import { useState } from "react";
import { Container } from "react-bootstrap";

import GradeProdutos from "./componentes/GradeProdutos";
import tabelaCarrinho from "./tabela/tabelaCarinho";
import Produto from "./templates/Produto";
import Carrinho from "./templates/Carrinho";

export default function telaProdutos(props){
    const [exibirCarrinho, setExibirCarrinho] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [qtdCarrinho,setQtdCarrinho] = useState(0);
    const [produtoInicial,setProdutoInical] = useState({
        id:'',
        title:'',
        price:'',
        description:'',
        category:'',
        image:''
    })

    return(
        <>
            <Container>
                exibirCarrinho ? <GradeProdutos exibirCarrinho={setExibirCarrinho}
                                    listadeProdutos={listaProdutos}
                                    setListaProdutos={setListaProdutos}/>
                                    <Produto listadeProdutos={listaProdutos}
                                    setListaProdutos={setListaProdutos}
                                    produtoIicial={produtoInicial}/>
                                    <Carrinho exibirCarrinho={setExibirCarrinho}
                                    qtdCarrinho={qtdCarrinho}/>
                :
                <tabelaCarrinho exibirCarrinho={setExibirCarrinho}
                                listadeProdutos={listaProdutos}
                                setListaProdutos={setListaProdutos}/>
            </Container>
        </>
    )
     
}