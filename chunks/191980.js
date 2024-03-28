"use strict";
l.r(t), l.d(t, {
  hide: function() {
    return u
  },
  show: function() {
    return s
  }
});
var n = l("570140");

function s() {
  n.default.dispatch({
    type: "SHOW_KEYBOARD_SHORTCUTS"
  })
}

function u() {
  n.default.dispatch({
    type: "HIDE_KEYBOARD_SHORTCUTS"
  })
}