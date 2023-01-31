import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [myIndex, setMyIndex] = useState([
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const temp = [...myIndex];
    temp[Number(event.currentTarget.id)] = true;
    setMyIndex(temp);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <button onClick={onClickEdit} id={String(index)}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id}></input>
        )
      )}
    </div>
  );
}
