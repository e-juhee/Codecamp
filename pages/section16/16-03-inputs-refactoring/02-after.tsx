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
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: inputs,
    });
    console.log(result);
  };

  return (
    <div>
      작성자 <input id="writer" onChange={onChangeInputs} type="text" />
      제목 <input id="title" onChange={onChangeInputs} type="text" />
      내용 <input id="contents" onChange={onChangeInputs} type="text" />
      <button onClick={onClickSubmit}>버튼</button>
    </div>
  );
}
