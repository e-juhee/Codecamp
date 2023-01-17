import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Wrapper key={el.number}>
          {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨 */}
          <span>
            <input type="checkbox" />
          </span>
          <span>{el.number}</span>
          <span>{el.title}</span>
          <span>{el.writer}</span>
          <button id={el.number} onClick={onClickDelete}>
            삭제
          </button>
        </Wrapper>
      ))}
    </>
  );
}

const Wrapper = styled.div`
  span {
    margin: 10px;
  }
`;
