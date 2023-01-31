import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GrqphqlMutationPage(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: { writer, title, contents },
    });
    console.log(result);
  };

  return (
    <div>
      작성자 <input onChange={onChangeWriter} type="text" />
      제목 <input onChange={onChangeTitle} type="text" />
      내용 <input onChange={onChangeContents} type="text" />
      <button onClick={onClickSubmit}>버튼</button>
    </div>
  );
}
