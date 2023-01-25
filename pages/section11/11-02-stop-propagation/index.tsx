import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CheckboxPage from "./checkbox";

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

  const onClick1 = (): void => {
    alert("1번 클릭");
  };

  const onClick4 = (): void => {
    alert("4번 클릭");
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div onClick={onClick1} id={el.writer ?? ""} key={el.number}>
          <CheckboxPage />
          <span onClick={onClick4}>{el.number}</span>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
