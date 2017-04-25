var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          this.pauseTimer();
          break;
        case 'stopped':
          this.stopTimer();
          break;
      }
    }
  },
  componentWillUnmount: function () {
    console.log('component did unmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count +1
      });
    }, 1000);
  },
  pauseTimer: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  stopTimer: function () {
    clearInterval(this.timer);
    this.timer = undefined;
    this.setState({
      count: 0
    });
  },
  handleSetTimer: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function () {
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;