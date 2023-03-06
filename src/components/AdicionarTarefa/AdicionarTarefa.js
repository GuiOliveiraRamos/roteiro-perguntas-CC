import { useState } from "react";
import { ContainerAdicionar, InputQuestions, BotaoMais } from "./styled";

export default function AdicionarPergunta({ listaTarefas, setListaTarefas }) {
  const [textoInput, setTextoInput] = useState("");

  function adicionarPergunta() {
    const novoArray = [...listaTarefas, textoInput];
    setListaTarefas(novoArray);
    setTextoInput("");
  }

  return (
    <ContainerAdicionar>
      <InputQuestions
        type="text"
        placeholder="Digite uma nova pergunta"
        value={textoInput}
        onChange={(e) => setTextoInput(e.target.value)}
      />
      <BotaoMais onClick={adicionarPergunta}>+</BotaoMais>
    </ContainerAdicionar>
  );
}
