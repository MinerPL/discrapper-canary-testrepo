"use strict";
var i = n(570140);
t.Z = {
  show(e, t, n, r, s) {
    i.Z.dispatch({
      type: "NOTICE_SHOW",
      notice: {
        id: s,
        type: e,
        message: t,
        buttonText: n,
        callback: r
      }
    })
  },
  dismiss(e) {
    i.Z.dispatch({
      type: "NOTICE_DISMISS",
      ...e
    })
  }
}