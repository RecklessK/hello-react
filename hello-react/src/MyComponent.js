// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다.
//       <br></br>children 값은 {children}
//       입니다.
//       <br />
//       내가 좋아하는 숫자는 {favoriteNumber || 7} 이다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다.
        <br></br>children 값은 {children}
        입니다.
        <br />
        내가 좋아하는 숫자는 {favoriteNumber || 7} 이다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;