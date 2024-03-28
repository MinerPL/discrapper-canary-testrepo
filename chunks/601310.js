"use strict";
var n = r("122526"),
  i = r("525270"),
  o = r("321737"),
  a = r("256096"),
  u = r("553822");
t.exports = function(t, e) {
  var r = u(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}