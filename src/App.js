import RoteiroPerguntas from "./components/RoteiroPerguntas";
import "./styles/style.css";
import styled from "styled-components";

function App() {
  return (
    <Conteudo>
      <RoteiroPerguntas />
    </Conteudo>
  );
}

export default App;

const Conteudo = styled.div`
  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
`;
