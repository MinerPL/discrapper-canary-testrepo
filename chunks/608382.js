"use strict";
var n = r("379846"),
  i = r("278203"),
  o = r("158225"),
  a = r("242891"),
  u = r("235767");
t.exports = function(t, e) {
  var r = u(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}