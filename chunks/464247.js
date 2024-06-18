"use strict";
var n = r(310176),
  i = r(379846),
  o = r(118658),
  a = r(563751),
  u = r(121868),
  s = r(653635),
  c = r(467159),
  l = r(843260),
  f = o.isBrowser("Firefox");

function p(t, e, r, o, a) {
  var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
  return i.push(t, u, "insert-characters", a)
}
t.exports = function(t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r, n = t._latestEditorState,
    o = e.data;
  if (!!o) {
    if (t.props.handleBeforeInput && u(t.props.handleBeforeInput(o, n, e.timeStamp))) {
      e.preventDefault();
      return
    }
    var h = n.getSelection(),
      d = h.getStartOffset(),
      g = h.getAnchorKey();
    if (!h.isCollapsed()) {
      e.preventDefault(), t.update(p(n, o, n.getCurrentInlineStyle(), a(n.getCurrentContent(), n.getSelection()), !0));
      return
    }
    var y = p(n, o, n.getCurrentInlineStyle(), a(n.getCurrentContent(), n.getSelection()), !1),
      v = !1;
    if (v = s(t._latestCommittedEditorState), !v) {
      var m = n.getBlockTree(g),
        _ = y.getBlockTree(g);
      v = m.size !== _.size || m.zip(_).some(function(t) {
        var e = t[0],
          r = t[1],
          n = e.get("start"),
          i = n + (n >= d ? o.length : 0),
          a = e.get("end"),
          u = a + (a >= d ? o.length : 0),
          s = r.get("start"),
          c = r.get("end"),
          l = r.get("decoratorKey");
        return e.get("decoratorKey") !== l || e.get("leaves").size !== r.get("leaves").size || i !== s || u !== c || null != l && c - s != a - n
      })
    }
    if (!v) {
      ;
      r = o, v = f && ("'" == r || "/" == r)
    }
    if (!v && (v = c(y.getDirectionMap()).get(g) !== c(n.getDirectionMap()).get(g)), v) {
      e.preventDefault(), y = i.set(y, {
        forceSelection: !0
      }), t.update(y);
      return
    }
    y = i.set(y, {
      nativelyRenderedContent: y.getCurrentContent()
    }), t._pendingStateFromBeforeInput = y, l(function() {
      void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0)
    })
  }
}