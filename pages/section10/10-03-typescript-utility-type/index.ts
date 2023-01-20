export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입: 모두 선택값으로 바꿔준다.
type IPartialProfile = Partial<IProfile>;

// 2. Required 타입: 모두 필수값으로 바꿔준다.
type IRequiredProfile = Required<IProfile>;

// 3. Pick 타입: 사용할 타입을 지정할 수 있다.
type IPickProfile = Pick<IProfile, "name" | "age">;

// 4. Omit 타입: 제외할 타입을 지정할 수 있다.
type IOmitProfile = Omit<IProfile, "school">;

// 5. Record 타입
type IUnion = "철수" | "영희" | "훈이"; // Union 타입
type IRecordProfile = Record<IUnion, IProfile>;

// 6. keyof: key만 뽑아오기
type IKeyofProfile = keyof IProfile;
const key: IKeyofProfile = "age";

// 7. type vs interface
// interface는 선언병합이 가능하다.
export interface IProfile {
  candy: number;
}

const profile: Partial<IProfile> = {
  name: "",
  candy: 1,
};

// type은 불가능
type IName = "주희" | "이쥐";
// type IName = "주이";
