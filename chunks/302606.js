"use strict";
var n = r("812762"),
  i = r("122526"),
  o = r("292489"),
  a = r("480931"),
  u = r("685536"),
  s = r("831080");
t.exports = function(t, e) {
  var r, c = t._latestEditorState,
    l = c.getSelection(),
    f = e.target;
  if (l.isCollapsed()) {
    e.preventDefault();
    return
  }
  s(f) && (r = u(o.getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p), t.setMode("cut"), setTimeout(function() {
    t.restoreEditorDOM(r), t.exitCurrentMode(), t.update(function(t) {
      var e = n.removeRange(t.getCurrentContent(), t.getSelection(), "forward");
      return i.push(t, e, "remove-range")
    }(c))
  }, 0)
}