"use strict";
n.r(t), n.d(t, {
  mount: function() {
    return s
  },
  unmount: function() {
    return l
  }
});
var a = n("570140");

function s() {
  a.default.dispatch({
    type: "NOW_PLAYING_MOUNTED"
  })
}

function l() {
  a.default.dispatch({
    type: "NOW_PLAYING_UNMOUNTED"
  })
}