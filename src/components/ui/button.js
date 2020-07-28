import styled from "styled-components"

export const MainButton = styled.button`
  background: ${props => (props.primary ? "red" : "blue")};
  color: orange;
  font-size: 2rem;
`
