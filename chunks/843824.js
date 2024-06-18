"use strict";
var n = r(310176),
  i = r(297326),
  o = r(379846),
  a = r(118658),
  u = r(786834).notEmptyKey,
  s = r(100066),
  c = r(110599),
  l = r(467159),
  f = a.isEngine("Gecko");
t.exports = function(t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r, a, p, h, d = t.editor.ownerDocument.defaultView.getSelection(),
    g = d.anchorNode,
    y = d.isCollapsed;
  if ((null == g ? void 0 : g.nodeType) === Node.TEXT_NODE || (null == g ? void 0 : g.nodeType) === Node.ELEMENT_NODE) {
    if (g.nodeType === Node.TEXT_NODE && (null !== g.previousSibling || null !== g.nextSibling)) {
      var v = g.parentNode;
      g.nodeValue = v.textContent;
      for (var m = v.firstChild; null !== m; m = m.nextSibling) m !== g && v.removeChild(m)
    }
    var _ = g.textContent,
      b = t._latestEditorState,
      S = l(s(g)),
      w = i.decode(S),
      k = w.blockKey,
      x = w.decoratorKey,
      C = w.leafKey,
      E = b.getBlockTree(k).getIn([x, "leaves", C]),
      D = E.start,
      O = E.end,
      K = b.getCurrentContent(),
      T = K.getBlockForKey(k),
      M = T.getText().slice(D, O);
    if (_.endsWith("\n\n") && (_ = _.slice(0, -1)), _ === M) {
      var A = e.nativeEvent.inputType;
      if (A) {
        var I = function(t, e) {
          if ("deleteContentBackward" === t) return c(e);
          return e
        }(A, b);
        I !== b && (t.restoreEditorDOM(), t.update(I))
      }
      return
    }
    var B = b.getSelection(),
      L = B.merge({
        anchorOffset: D,
        focusOffset: O,
        isBackward: !1
      }),
      R = T.getEntityAt(D),
      N = u(R) ? K.getEntity(R) : null,
      F = "MUTABLE" === (null != N ? N.getMutability() : null),
      z = n.replaceText(K, L, _, T.getInlineStyleAt(D), F ? T.getEntityAt(D) : null);
    if (f) r = d.anchorOffset, h = (p = D + Math.min(r, a = d.focusOffset)) + Math.abs(r - a), r = p, a = h;
    else {
      var P = _.length - M.length;
      p = B.getStartOffset(), h = B.getEndOffset(), r = y ? h + P : p, a = h + P
    }
    var j = z.merge({
      selectionBefore: K.getSelectionAfter(),
      selectionAfter: B.merge({
        anchorOffset: r,
        focusOffset: a
      })
    });
    t.update(o.push(b, j, F ? "spellcheck-change" : "apply-entity"))
  }
}