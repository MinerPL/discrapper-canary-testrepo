"use strict";
var n = r("812762"),
  i = r("122526");
t.exports = function(t) {
  var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
  return i.push(t, e, "split-block")
}