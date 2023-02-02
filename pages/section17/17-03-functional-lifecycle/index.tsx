import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);

  // componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidMount와 componentDidUpdate를 합친 것
  // 처음에 실행되고 나서 한번 실행 + 변경사항 있을 때 실행
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  /* 1. useEffect 하나로 합치기 */
  useEffect(() => {
    console.log("그려지고 나서 실행");
    console.log("변경되고 나서 실행");
    return () => {
      console.log("사라지기 전에 실행");
    };
  });

  /* 2. dependency array(의존성 배열) */
  // 의존성 배열 안에 적어준 state가 바뀌면 다시 실행된다.
  useEffect(() => {
    console.log("변경되고 나서 실행");
  }, [count]);

  // 의존성 배열이 아예 없으면 어떤 state가 바뀌든 다시 실행된다.
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // 3. useEffect 잘못된 사용법
  useEffect(() => {
    // 의존성 배열에 넣은 state가 아닌 state를 setState 하면 추가 렌더링이 일어난다.
    // 가급적이면 피해야 한다.
    // setWriter();

    // 의존서 배열에 넣은 state를 setState하면
    // 무한 루프에 빠진다.
    setCount((prev) => prev++);
  }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const router = useRouter();
  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 Up</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
