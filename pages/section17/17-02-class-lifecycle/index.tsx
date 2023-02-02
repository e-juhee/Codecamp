import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // ex) 채팅방 나가기 API
    // 채팅방을 나갈 때 나의 접속 상태가 offline으로 변경되도록 백엔드에 전달해줘야 한다.
    // 채팅방을 나갈 때 어떤 방식으로 나갈 지 알 수 없기 때문에 componentWillUnmount를 사용한다.
  }

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 Up</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
