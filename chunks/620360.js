"use strict";
n.r(t);
var a = n("570140"),
  s = n("211644");
t.default = {
  init() {
    a.default.subscribe("CONNECTION_OPEN", () => {
      (0, s.reset)()
    }), a.default.subscribe("LOGOUT", () => {
      (0, s.reset)()
    })
  }
}