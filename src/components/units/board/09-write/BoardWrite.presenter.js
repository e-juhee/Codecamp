import { RedInput, SubmitBtn } from "./BoardWrite.styles.js";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:{" "}
      <RedInput type="text" onChange={props.onChangeWriter} myColor="blue" />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <SubmitBtn
        isActive={props.isActive}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </SubmitBtn>
    </div>
  );
}
