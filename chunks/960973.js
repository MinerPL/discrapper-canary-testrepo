"use strict";
var n = r("122526"),
  i = r("733359"),
  o = r("256096"),
  a = r("553822");
t.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = t.getCurrentContent(),
      n = e.getAnchorKey(),
      a = e.getAnchorOffset(),
      u = r.getBlockForKey(n).getText()[a - 1];
    return o(t, u ? i.getUTF16Length(u, 0) : 1)
  }, "backward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "backspace-character" : "remove-range")
}