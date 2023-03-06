import styled from "styled-components";

export default function Tarefa({ task }) {
  return <ItemPergunta>{task}</ItemPergunta>;
}

const ItemPergunta = styled.li`
  color: black;
  padding: 22px;
  display: flex;
  align-items: center;
  font-size: 22px;
  background-color: #f3f3f3;
  text-decoration: none;
  &:not(:last-child) {
    border-bottom: 1px solid #e7e7e7;
  }
`;
