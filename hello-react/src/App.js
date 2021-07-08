import React, { Component } from "react";
//import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPracticeFunc from "./EventPracticeFunc";
//import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    // return <Counter />;
    //return <Say />;
    //return <ValidationSample />;
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.ScrollBox = ref;
          }}
        />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
