"use strict";
n.d(t, {
  bA: function() {
    return s
  },
  hP: function() {
    return o
  },
  hY: function() {
    return l
  },
  xv: function() {
    return a
  }
});
var i = n(570140);
let r = {
  menubar: !1,
  toolbar: !1,
  location: !1,
  directories: !1
};

function s(e, t, n) {
  return i.Z.dispatch({
    type: "POPOUT_WINDOW_OPEN",
    key: e,
    features: {
      ...r,
      ...n
    },
    render: t
  })
}

function o(e) {
  return i.Z.dispatch({
    type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
    channel: e
  })
}

function a(e) {
  return i.Z.dispatch({
    type: "POPOUT_WINDOW_CLOSE",
    key: e
  })
}

function l(e, t) {
  return i.Z.dispatch({
    type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
    alwaysOnTop: t,
    key: e
  })
}