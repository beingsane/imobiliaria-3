import React from "react";
import {Table, Row, Col, Button, Container} from "react-bootstrap";
import DialogConfirmacao from "../dialogo-confirmacao/dialogo-confirmacao.componente";

const ListaMensalidades = ({dados, handleSubmit}) => (
    <Table>
            <thead>
              <tr>
                <td>Valor</td>
                <td>Vencimento</td>
                <td>Situacao</td>                
                <td></td>
              </tr>
            </thead>
            <tbody>
              {dados.map(mensalidade => {
                return (
                  <tr key={mensalidade.id}>                                                
                    <td>
                      {parseFloat(mensalidade.valor).toLocaleString(
                        "pt-br",
                        {
                          style: "currency",
                          currency: "BRL"
                        }
                      )}
                    </td>
                    <td>{new Date(mensalidade.data_vencimento).toLocaleDateString()}</td>
                    <td>{ mensalidade.recebido === "1" ? "Recebido" : "A Receber"}</td>
                    <td>
                    { mensalidade.recebido === "0" ? (
                      <Container>
                        <Row>                                                    
                          <Col xs lg="3">
                            <DialogConfirmacao
                              titulo="Receber"
                              mensagem="Confirmar o recebimento"
                              handleDelete={handleSubmit}
                              id={mensalidade.id}
                            />
                            
                          </Col>                          
                        </Row>
                      </Container>
                      ): ("")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
);

export default ListaMensalidades;