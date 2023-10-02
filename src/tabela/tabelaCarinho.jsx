import { Button, Container, Table } from "react-bootstrap";

export default function tabelaCarinho(props) {
    

    return (
        <Container>
            <Button type="button" onClick={() => { 
                props.exibirCarrinho(true);
            }}>Voltar a loja</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listadeProdutos.map((produto) => {
                        return (<tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.title}</td>
                            <td>{produto.price}</td>
                            <td>{produto.qtd}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </Table>
        </Container>
    );
}