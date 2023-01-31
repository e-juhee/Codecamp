import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  // 페이지 번호 클릭
  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    setCurrentPage(Number(e.currentTarget.id));
    void refetch({ page: Number(e.currentTarget.id) });
  };

  // 이전 버튼 클릭
  const onClickPrevPage = (): void => {
    if (startPage - 10 < 0) return;
    setStartPage((prev) => prev - 10);
    setCurrentPage(startPage - 1);
    void refetch({ page: startPage - 1 });
  };

  // 다음 버튼 클릭
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setCurrentPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <Wrapper>
      {data?.fetchBoards.map((el) => (
        <BoardWrapper key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </BoardWrapper>
      ))}

      <PaginationWrapper>
        {/* 이전 버튼 */}
        <Btn onClick={onClickPrevPage} isActive={startPage > 10}>
          &lt;
        </Btn>
        {new Array(10).fill("").map((_, index) => {
          if (index + startPage <= lastPage)
            return (
              <PageNumber
                key={index + 1}
                id={String(index + startPage)}
                onClick={onClickPage}
                isActive={currentPage === index + startPage}
              >
                {index + startPage}
              </PageNumber>
            );
          else return <></>;
        })}
        {/* 다음 버튼 */}
        <Btn onClick={onClickNextPage} isActive={startPage < lastPage - 10}>
          &gt;
        </Btn>
      </PaginationWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  height: 350px;
`;
const BoardWrapper = styled.div`
  width: 400px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;
const Btn = styled.button`
  ${(props: { isActive: boolean }) =>
    props.isActive
      ? { cursor: "pointer", color: "#000" }
      : { cursor: "not-allowed", color: "#e4e4e4" }};
`;
const PageNumber = styled.span`
  color: ${(props: { isActive: boolean }) => (props.isActive ? "red" : "#000")};
  display: inline-block;
  width: 40px;
  padding: 10px;
  cursor: pointer;
`;
