"use strict";

function i(e) {
  let t = document.createElement("a");
  return t.href = e, t.hostname
}

function r(e) {
  let t = document.createElement("a");
  return t.href = e, t.protocol
}
n.d(t, {
  E: function() {
    return r
  },
  F: function() {
    return i
  }
})