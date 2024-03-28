"use strict";
n.r(t), n("47120");
var s = n("570140");
t.default = {
  setEnabled(e) {
    this.update({
      enabled: e
    })
  },
  update(e) {
    for (let t of Object.keys(e)) s.default.dispatch({
      type: "STREAMER_MODE_UPDATE",
      key: t,
      value: e[t]
    })
  }
}