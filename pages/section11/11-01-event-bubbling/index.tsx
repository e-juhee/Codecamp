import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target instanceof Element)
      alert(event.target.id + "님이 작성한 글입니다.");
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div onClick={onClick} id={el.writer ?? ""} key={el.number}>
          <span>{el.number}</span>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
