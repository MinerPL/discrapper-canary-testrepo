"use strict";
n.r(t), n.d(t, {
  mount: function() {
    return s
  },
  unmount: function() {
    return l
  }
});
var a = n("913144");

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