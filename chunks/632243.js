"use strict";
n(411104);
var i = n(710845),
  r = n(358085),
  s = n(579806);
let o = new i.Z("ProgressBarManager");
t.Z = new class e {
  setProgress(e, t) {
    if (!(0, r.isDesktop)()) throw Error("cannot set progress from non-native");
    if (null != this.taskID && this.taskID !== e) {
      o.warn("".concat(this.taskID, " is already running. cannot set ").concat(e));
      return
    }
    this.taskID = e, s.Z.window.setProgressBar(t)
  }
  clearProgress(e) {
    if (!(0, r.isDesktop)()) throw Error("cannot clear progress from non-native");
    if (null == this.taskID) {
      o.warn("cannot clear progress. No current progress running.");
      return
    }
    if (this.taskID !== e) {
      o.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running"));
      return
    }
    this.taskID = null, s.Z.window.setProgressBar(-1)
  }
  constructor() {
    var e, t, n;
    e = this, n = void 0, (t = "taskID") in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}