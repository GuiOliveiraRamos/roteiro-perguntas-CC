import AdicionarPergunta from "./AdicionarTarefa/AdicionarTarefa";
import ListaPerguntas from "./ListaPerguntas";
import { useState } from "react";
import styled from "styled-components";

export default function RoteiroPerguntas() {
  const tarefasIniciais = [
    "Confirmar a vinda",
    "Confirmar horário de chegada",
    "Confirmar a quantidade de alunos",
    "Confirmar a quantidade de acompanhantes",
    "Confirmar atividades",
    "Confirmar a necessidade de trazer lanche",
  ];
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais);

  return (
    <>
      <Titulo>
        <h1>Roteiro de Perguntas</h1>
      </Titulo>
      <AdicionarPergunta
        listaTarefas={listaTarefas}
        setListaTarefas={setListaTarefas}
      />
      <ListaPerguntas listaTarefas={listaTarefas} />
    </>
  );
}

const Titulo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 450px;

  h1 {
    font-family: "Shantell sans";
    font-size: 78px;
    color: #800000;
  }
`;
