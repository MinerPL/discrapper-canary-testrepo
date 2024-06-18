"use strict";
n.d(t, {
  _: function() {
    return r
  },
  y: function() {
    return s
  }
});
var i = n(570140);

function r(e) {
  i.Z.dispatch({
    type: "APP_LAUNCHER_SHOW",
    entrypoint: e
  })
}

function s() {
  i.Z.dispatch({
    type: "APP_LAUNCHER_DISMISS"
  })
}