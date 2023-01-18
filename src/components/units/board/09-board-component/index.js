export default function BoardComponent(props) {
  return (
    <div>
      {/* 공통 컴포넌트는 사용하는 곳의 css와 겹칠 것을 예방하여 div 태그를 사용해줍니다. */}
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목: <input type="text" />
      내용: <input type="text" />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
