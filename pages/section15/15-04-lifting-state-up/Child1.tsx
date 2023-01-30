interface IProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function Child1(props: IProps): JSX.Element {
  function onClickCountUp(): void {
    props.setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>자식1 {props.count}</div>
      <button onClick={onClickCountUp}>Up</button>
    </div>
  );
}
