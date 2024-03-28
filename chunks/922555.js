"use strict";
n.r(t);
var a = n("570140");
t.default = {
  move(e, t) {
    a.default.dispatch({
      type: "INCOMING_CALL_MOVE",
      x: e,
      y: t
    })
  }
}