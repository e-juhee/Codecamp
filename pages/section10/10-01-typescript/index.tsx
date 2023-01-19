import { profile } from "console";

export default function TypescriptPage() {
  // 타입 추론
  let a = "문자열";
  a = 3;

  // 타입 명시
  let b: string = "문자열";
  b = 10;

  // 타입 명시가 필요한 상황
  let c: number | string = 1000;
  c = "1000원";

  // 불린타입
  let e: boolean = true;
  e = false;
  e = "false";

  // 배열 타입
  let f: number[] = [1, 2, 3, "문자"];
  let h: (string | number)[] = [1, 2, 3, "문자"];

  // 객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }
  const porfile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
  };
  porfile.age = "8살";
  porfile.hobby = "수영";

  // 함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  add(1000, 2000, "원");

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  add2(1000, 2000, "원");

  // any 타입 : JS와 동일하게 쓸 수 있다.
  let q: any = "문자";
  q = 123;
  q = true;

  return <></>;
}
