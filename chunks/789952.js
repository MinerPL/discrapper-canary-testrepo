n.r(t), n.d(t, {
  hasDomParent: function() {
return a;
  },
  normalizeDOMPoint: function() {
return o;
  }
}), n(411104), n(47120);
var r = n(519953);
let i = !1;
{
  r.F3.toSlateRange = (e, t, n) => {
let i, a, o, s, l, {
  exactMatch: u,
  suppressThrow: d
} = n;
if (function(e) {
    let t = e && e.anchorNode && c(e.anchorNode);
    return null != t && e instanceof t.Selection;
  }(t) ? (i = t.anchorNode, a = t.anchorOffset, o = t.focusNode, s = t.focusOffset, l = t.isCollapsed) : (i = t.startContainer, a = t.startOffset, o = t.endContainer, s = t.endOffset, l = t.collapsed), null == i || null == o || null == a || null == s) {
  if (d)
    return null;
  throw Error('Cannot resolve a Slate range from DOM range');
}
let _ = r.F3.toSlatePoint(e, [
    i,
    a
  ], {
    exactMatch: u,
    suppressThrow: d
  }),
  E = l ? _ : r.F3.toSlatePoint(e, [
    o,
    s
  ], {
    exactMatch: u,
    suppressThrow: d
  });
return null != _ && null != E ? {
  anchor: _,
  focus: E
} : null;
  };
  let e = r.F3.toSlatePoint;
  r.F3.toSlatePoint = (t, n, r) => {
let {
  exactMatch: i,
  suppressThrow: a,
  direction: s = 'forward'
} = r;
!i && (n = o(n, s));
try {
  return e(t, n, {
    exactMatch: !0,
    suppressThrow: a
  });
} catch (e) {
  if (a)
    return null;
  throw e;
}
  }, i = !0;
}

function a(e, t) {
  if (null == t)
return !1;
  for (; null != e;) {
if (e === t)
  return !0;
e = e.parentNode;
  }
  return !1;
}

function o(e, t) {
  let n, [r, i] = e;
  if (!l(r) || 0 === r.childNodes.length)
return e;
  for ('forward' === t && i === r.childNodes.length && (t = 'backward'), 'backward' === t && i--, [r, n] = s(r, i, t), 'forward' === t && n < i ? t = 'backward' : 'backward' === t && n > i && (t = 'forward'), i = n; l(r) && r.childNodes.length > 0;) {
let e = 'backward' === t ? r.childNodes.length - 1 : 0;
r = s(r, e, t)[0];
  }
  let a = 'backward' === t && null != r.textContent ? r.textContent.length : 0;
  return [
r,
a
  ];
}

function s(e, t, n) {
  let {
childNodes: r
  } = e, i = r[t], a = t, o = !1, s = !1;
  for (;
(function(e) {
  return u(e) && 8 === e.nodeType;
}(i) || l(i) && 0 === i.childNodes.length || l(i) && 'false' === i.getAttribute('contenteditable')) && (!o || !s);) {
;
if (a >= r.length) {
  o = !0, a = t - 1, n = 'backward';
  continue;
}
if (a < 0) {
  s = !0, a = t + 1, n = 'forward';
  continue;
}
i = r[a], t = a, a += 'forward' === n ? 1 : -1;
  }
  return [
i,
t
  ];
}

function l(e) {
  return u(e) && 1 === e.nodeType;
}

function u(e) {
  let t = c(e);
  return null != t && e instanceof t.Node;
}

function c(e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView || null;
}