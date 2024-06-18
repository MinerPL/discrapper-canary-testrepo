"use strict";
n.d(t, {
  Ig: function() {
    return s
  },
  UU: function() {
    return o
  },
  ZY: function() {
    return r
  }
});
var i = n(392711);

function r(e) {
  return e.__DISCORD_WINDOW_ID
}

function s(e) {
  let t = (0, i.uniqueId)("window-");
  return e.__DISCORD_WINDOW_ID = t, t
}

function o() {
  return r(window)
}