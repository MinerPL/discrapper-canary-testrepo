"use strict";
s.r(t);
var a = s("570140");
t.default = {
  startSpeedTest() {
    a.default.dispatch({
      type: "RTC_SPEED_TEST_START_TEST"
    })
  },
  stopSpeedTest() {
    a.default.dispatch({
      type: "RTC_SPEED_TEST_STOP_TEST"
    })
  }
}