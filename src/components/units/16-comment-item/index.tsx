import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface ICommentItemProps {
  el: IBoard;
}

export default function CommentItem(props: ICommentItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit ? (
        <div>
          <span>{props.el.title}</span>
          <span>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text"></input>
      )}
    </>
  );
}
