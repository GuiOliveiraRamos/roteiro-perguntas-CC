import Pergunta from "./Tarefa";
import styled from "styled-components";

export default function ListaPerguntas({ listaTarefas }) {
  return (
    <ContainerLista>
      {listaTarefas.map((task) => (
        <Pergunta key={task} task={task} />
      ))}
    </ContainerLista>
  );
}

const ContainerLista = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  overflow: hidden;
`;
