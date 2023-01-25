import { MouseEvent } from "react";

export default function CheckboxPage(): JSX.Element {
  const onClick3 = (event: MouseEvent<HTMLDivElement>): void => {
    event?.stopPropagation();
    alert("3번 클릭");
  };
  const onClick2 = (): void => {
    alert("2번 클릭");
  };

  return (
    <span onClick={onClick2}>
      <input type="checkbox" onClick={onClick3} />
    </span>
  );
}
