import styled from "@emotion/styled";
export const RedInput = styled.input`
  border: 1px solid red;
  color: ${(props) => props.myColor};
`;
export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "gray")};
`;
