"use strict";
n.r(t), n.d(t, {
  hasDomParent: function() {
    return s
  },
  normalizeDOMPoint: function() {
    return o
  }
}), n(411104), n(47120);
var i = n(519953);
let r = !1;
{
  i.F3.toSlateRange = (e, t, n) => {
    let r, s, o, a, l, {
      exactMatch: u,
      suppressThrow: d
    } = n;
    if (function(e) {
        let t = e && e.anchorNode && _(e.anchorNode);
        return null != t && e instanceof t.Selection
      }(t) ? (r = t.anchorNode, s = t.anchorOffset, o = t.focusNode, a = t.focusOffset, l = t.isCollapsed) : (r = t.startContainer, s = t.startOffset, o = t.endContainer, a = t.endOffset, l = t.collapsed), null == r || null == o || null == s || null == a) {
      if (d) return null;
      throw Error("Cannot resolve a Slate range from DOM range")
    }
    let c = i.F3.toSlatePoint(e, [r, s], {
        exactMatch: u,
        suppressThrow: d
      }),
      E = l ? c : i.F3.toSlatePoint(e, [o, a], {
        exactMatch: u,
        suppressThrow: d
      });
    return null != c && null != E ? {
      anchor: c,
      focus: E
    } : null
  };
  let e = i.F3.toSlatePoint;
  i.F3.toSlatePoint = (t, n, i) => {
    let {
      exactMatch: r,
      suppressThrow: s,
      direction: a = "forward"
    } = i;
    !r && (n = o(n, a));
    try {
      return e(t, n, {
        exactMatch: !0,
        suppressThrow: s
      })
    } catch (e) {
      if (s) return null;
      throw e
    }
  }, r = !0
}

function s(e, t) {
  if (null == t) return !1;
  for (; null != e;) {
    if (e === t) return !0;
    e = e.parentNode
  }
  return !1
}

function o(e, t) {
  let n, [i, r] = e;
  if (!l(i) || 0 === i.childNodes.length) return e;
  for ("forward" === t && r === i.childNodes.length && (t = "backward"), "backward" === t && r--, [i, n] = a(i, r, t), "forward" === t && n < r ? t = "backward" : "backward" === t && n > r && (t = "forward"), r = n; l(i) && i.childNodes.length > 0;) {
    let e = "backward" === t ? i.childNodes.length - 1 : 0;
    i = a(i, e, t)[0]
  }
  let s = "backward" === t && null != i.textContent ? i.textContent.length : 0;
  return [i, s]
}

function a(e, t, n) {
  let {
    childNodes: i
  } = e, r = i[t], s = t, o = !1, a = !1;
  for (;
    (function(e) {
      return u(e) && 8 === e.nodeType
    }(r) || l(r) && 0 === r.childNodes.length || l(r) && "false" === r.getAttribute("contenteditable")) && (!o || !a);) {
    ;
    if (s >= i.length) {
      o = !0, s = t - 1, n = "backward";
      continue
    }
    if (s < 0) {
      a = !0, s = t + 1, n = "forward";
      continue
    }
    r = i[s], t = s, s += "forward" === n ? 1 : -1
  }
  return [r, t]
}

function l(e) {
  return u(e) && 1 === e.nodeType
}

function u(e) {
  let t = _(e);
  return null != t && e instanceof t.Node
}

function _(e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView || null
}