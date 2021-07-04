import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleChange(e) {
  //     //console.log(this);
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: "",
  //   });
  // }

  //transform-class-properties 문법 사용
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      message: "",
      username: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          text="text"
          name="username"
          placeholder="사용자 명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          // constructor로 바인딩 하기 전
          //   {(e) => {
          //     this.setState({
          //       message: e.target.value,
          //     });
          //     //console.log(e.target.value);
          //   }}
        />
        <br />
        <input
          text="text"
          name="message"
          placeholder="아무거나 입력하시오"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.handleClick}
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
        >
          확인
        </button>
        {/*<div>{this.state.message}</div>*/}
      </div>
    );
  }
}

export default EventPractice;
