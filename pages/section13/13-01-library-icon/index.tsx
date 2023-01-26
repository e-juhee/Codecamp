import { StepBackwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";
export default function LibraryIconPage(): JSX.Element {
  const onClick = (e: MouseEvent<HTMLDivElement>): void => {
    console.log(e?.currentTarget.id);
  };
  return <MyIcon id="ㅇㅇ" onClick={onClick} />;
}
const MyIcon = styled(StepBackwardOutlined)`
  color: red;
`;
