"use strict";
var n = r("646689");
t.exports = function(t) {
  var e = t.getSelection();
  return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
}