interface IProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function Child2(props: IProps): JSX.Element {
  function onClickCountUp(): void {
    props.setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>자식2 {props.count}</div>
      <button onClick={onClickCountUp}>Up</button>
    </div>
  );
}
