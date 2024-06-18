"use strict";
n.d(t, {
  IH: function() {
    return r
  },
  qC: function() {
    return s
  }
}), n(653041);
let i = [];

function r(e) {
  for (i.push(e); i.length > 10;) i.shift()
}

function s() {
  return i.join(" -> ")
}