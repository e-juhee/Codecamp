import { RedInput, SubmitBtn } from "./BoardWrite.styles.js";
import { IBoardWriteUIProps } from "./BoardWrite.types.js";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        myColor="blue"
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <SubmitBtn
        isActive={props.isActive}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </SubmitBtn>
    </div>
  );
}
