import React from "react";
import {connect} from "react-redux";
const App = ({quantity}) => {
  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div id="counter-box">
        <button type="button">
          MINUS
        </button>
        <span id="number">0</span>
        <button>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong id="quantity">0</strong>
      </div>
      <div>
        <strong id="total">17500</strong>원
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { quantity:state}
}

export default connect(mapStateToProps) (App);