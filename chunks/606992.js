"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(470079),
  r = n(40851),
  s = n(590921);

function o(e) {
  let {
    editorHeight: t,
    type: n,
    state: o,
    isInPopoutExperiment: a = !1
  } = e, [l, u] = i.useState(void 0), _ = null == o ? void 0 : o.query, d = null == o ? void 0 : o.isVisible, {
    renderWindow: c
  } = i.useContext(r.ZP), E = i.useCallback(() => {
    var e, t, i, r;
    if (null != o && (null == _ || !d)) {
      u(void 0);
      return
    }
    if ((null == _ ? void 0 : _.type) === s.eq.GIFS || null != n && !a && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
      u(null);
      return
    }
    let l = c.document.getSelection(),
      E = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
    if (null == E) return;
    let I = E.startContainer,
      T = E.startOffset;
    for (; null != I;) {
      if (I.nodeType !== Node.TEXT_NODE || null == I.nodeValue) {
        u(null);
        return
      }
      if ((null === (t = I.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
        T = null !== (r = null == (I = I.previousSibling) ? void 0 : null === (i = I.nodeValue) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0;
        continue
      }
      null != _ && (T >= _.queryText.length ? T -= _.queryText.length : T = 0);
      break
    }
    if (null == I) return;
    let h = c.document.createRange();
    h.setStart(I, T), h.setEnd(I, T);
    let S = h.getBoundingClientRect();
    if ((null == S ? void 0 : S.height) !== 0) u(null != S ? S : null)
  }, [a, c.document, o, d, _, n]);
  return i.useEffect(() => (c.document.addEventListener("selectionchange", E), () => c.document.removeEventListener("selectionchange", E)), [c.document, E]), i.useEffect(() => {
    E()
  }, [E, t]), l
}