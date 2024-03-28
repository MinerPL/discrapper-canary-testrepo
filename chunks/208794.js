"use strict";
var n = r("502143"),
  i = r("65183").List;
t.exports = function(t, e) {
  return i(t.map(function(t, r) {
    var i = e[r];
    return n.create({
      style: t,
      entity: i
    })
  }))
}