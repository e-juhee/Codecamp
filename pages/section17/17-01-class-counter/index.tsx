import { Component } from "react";

// state 등의 기능을 사용하기 위해서 Component를 상속받습니다. (Class에는 기본으로 내장되어 있지 않습니다.)
export default class ClassCounterPage extends Component {
  // state 만들기
  state = {
    count: 0, // 초기값
  };

  onClickCountUp(): void {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  }

  // 화면에 그리는 부분은 render 안에 작성해줘야 합니다.
  render(): JSX.Element {
    return (
      <div>
        {/* 
        this: Class 자기 자신을 의미한다. 
        Class 안의 값에 접근하려면 항상 this를 붙여야 한다.
        Component를 상속받았으므로 this 안에 Component의 기능들도 있다.
        */}
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 Up</button>
      </div>
    );
  }
}
