import styled from "@emotion/styled";
export const RedInput = styled.input`
  border: 1px solid red;
  color: ${(props:IProps) => props.myColor};
`;
export const SubmitBtn = styled.button`
  background-color: ${(props:IProps) => (props.isActive ? "yellow" : "gray")};
`;

interface IProps {
  myColor?:string;
  isActive?:boolean
}