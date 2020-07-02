import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actionCreators';
import { connect } from 'react-redux';

const renderSignal = signalColor => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeColor }) {
  return (
    <div>
      <div className="button-container">
        <button type="button" value="red" onClick={e => changeColor(e.target.value)}>
          Red
        </button>
        <button type="button" value="yellow" onClick={e => changeColor(e.target.value)}>
          Yellow
        </button>
        <button type="button" value="green" onClick={e => changeColor(e.target.value)}>
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = state =>
  // When reducers are combined, need to add the reducer key to state.
  // without combined reducers could be:
  //   ({ signalColor: state.singal.color }) -- exercise-one
  // with combined reducers:
  ({ signalColor: state.changeSignal.signal.color });

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeSignal(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
