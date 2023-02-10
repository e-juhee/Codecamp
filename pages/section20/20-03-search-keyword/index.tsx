import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";
import { uuidv4 } from "@firebase/util";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    setKeyword(value);
    void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(e.currentTarget.value);
  };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            {el.title
              .replaceAll(keyword, `@#$${keyword}@#$`)
              .split("@#$")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
          <span>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
