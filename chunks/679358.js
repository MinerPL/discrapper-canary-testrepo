"use strict";
var n = r(198392),
  i = r(310176),
  o = r(379846),
  a = r(100066),
  u = r(488959),
  s = r(952616),
  c = r(880353),
  l = r(519827),
  f = r(121868),
  p = r(467159);

function h(t) {
  t._internalDrag = !1;
  var e = t.editorContainer;
  if (e) {
    var r = new MouseEvent("mouseup", {
      view: l(e),
      bubbles: !0,
      cancelable: !0
    });
    e.dispatchEvent(r)
  }
}

function d(t, e, r) {
  var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
  return o.push(t, n, "insert-fragment")
}
t.exports = {
  onDragEnd: function(t) {
    t.exitCurrentMode(), h(t)
  },
  onDrop: function(t, e) {
    var r = new n(e.nativeEvent.dataTransfer),
      l = t._latestEditorState,
      g = function(t, e) {
        var r = null,
          n = null,
          i = u(t.currentTarget);
        if ("function" == typeof i.caretRangeFromPoint) {
          var o = i.caretRangeFromPoint(t.x, t.y);
          r = o.startContainer, n = o.startOffset
        } else {
          if (!t.rangeParent) return null;
          r = t.rangeParent, n = t.rangeOffset
        }
        r = p(r), n = p(n);
        var s = p(a(r));
        return c(e, s, n, s, n)
      }(e.nativeEvent, l);
    if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != g) {
      var y = r.getFiles();
      if (y.length > 0) {
        if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, y))) return;
        s(y, function(e) {
          e && t.update(d(l, g, e))
        });
        return
      }
      var v = t._internalDrag ? "internal" : "external";
      t.props.handleDrop && f(t.props.handleDrop(g, r, v)) || (t._internalDrag ? t.update(function(t, e) {
        var r = i.moveText(t.getCurrentContent(), t.getSelection(), e);
        return o.push(t, r, "insert-fragment")
      }(l, g)) : t.update(d(l, g, r.getText()))), h(t)
    }
  }
}