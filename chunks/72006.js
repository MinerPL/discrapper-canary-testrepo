t.d(n, {
  FZ: function() {
return Z;
  },
  Hl: function() {
return w;
  },
  NJ: function() {
return P;
  },
  R8: function() {
return G;
  },
  Sq: function() {
return b;
  },
  Wg: function() {
return y;
  },
  Zn: function() {
return L;
  },
  c2: function() {
return D;
  },
  eE: function() {
return x;
  },
  iE: function() {
return j;
  },
  iK: function() {
return U;
  },
  lv: function() {
return O;
  },
  nR: function() {
return M;
  },
  q0: function() {
return o.a;
  },
  x0: function() {
return v;
  },
  xb: function() {
return F;
  },
  yd: function() {
return R;
  }
}), t(47120), t(653041);
var i = t(371917),
  r = t(421520),
  o = t.n(r),
  l = t(563751),
  u = t.n(l),
  s = t(608382),
  a = t.n(s),
  c = t(722661),
  d = t.n(c),
  _ = t(225389),
  f = t.n(_),
  E = t(71716),
  I = t.n(E),
  g = t(869045),
  p = t.n(g),
  S = t(110599),
  C = t.n(S),
  m = t(801539),
  T = t.n(m),
  h = t(887868),
  A = t.n(h);

function N(e, n, t, r) {
  let o = r.getCurrentContent(),
l = null;
  null != e && (l = (o = o.createEntity(...e)).getLastCreatedEntityKey());
  let u = o.getFirstBlock(),
s = new i.SelectionState({
  anchorKey: u.getKey(),
  anchorOffset: n,
  focusKey: u.getKey(),
  focusOffset: t
});
  return o = i.Modifier.applyEntity(o, s, l), i.EditorState.set(r, {
currentContent: o
  });
}

function v(e, n, t, r) {
  let o, l;
  let s = n.getCurrentContent(),
a = s.getFirstBlock(),
c = a.getText();
  'number' == typeof t ? (t > c.length && (t = c.length), null != r && r > c.length && (r = c.length), o = new i.SelectionState({
anchorKey: a.getKey(),
anchorOffset: t,
focusKey: a.getKey(),
focusOffset: null != r && 0 !== r ? r : t
  })) : o = n.getSelection();
  let d = n.getCurrentInlineStyle(),
_ = u()(s, o);
  return o.isCollapsed() ? (s = i.Modifier.insertText(s, o, e, d, _), l = 'insert-characters') : (s = i.Modifier.replaceText(s, o, e, d, _), l = 'replace-characters'), i.EditorState.push(n, s, l);
}

function R(e, n) {
  switch (e) {
case 'delete':
  return T()(n);
case 'delete-word':
  return f()(n);
case 'backspace':
  return C()(n);
case 'backspace-word':
  return d()(n);
case 'backspace-to-start-of-line':
  return a()(n);
default:
  return n;
  }
}

function L(e, n) {
  switch (e) {
case 'transpose-characters':
  return A()(n);
case 'move-selection-to-start-of-block':
  return p()(n);
case 'move-selection-to-end-of-block':
  return I()(n);
default:
  return n;
  }
}

function b(e) {
  return e.getCurrentContent().getFirstBlock().getText();
}

function O(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
i = n.getCurrentContent(),
r = i.getFirstBlock(),
o = r.getText(),
l = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, n) => {
let t = i.getEntity(r.getEntityAt(e)).getType(),
  u = o.substring(e, n);
l.push({
  processed: !1,
  type: t,
  start: e,
  end: n,
  text: u
});
  }), e.forEach(e => {
let i = !1;
if (l.forEach(t => {
    let {
      type: r,
      start: o,
      end: l
    } = e, u = e.getFullMatch();
    if (!t.processed)
      t.type === r && t.start === o && t.text === u ? (t.processed = !0, i = !0) : (o >= t.start && o < t.end || l > t.start && l <= t.end) && (t.processed = !0, n = N(null, t.start, t.end, n));
  }), i)
  return;
let r = t[e.type];
n = N([
  e.type,
  null != r && r.mutable ? 'MUTABLE' : 'IMMUTABLE',
  {
    token: e
  }
], e.start, e.end, n);
  }), l.forEach(e => {
!e.processed && (n = N(null, e.start, e.end, n));
  }), n;
}

function M(e) {
  return i.EditorState.createEmpty(new i.CompositeDecorator(e));
}

function Z(e) {
  let n = i.EditorState.push(e, i.ContentState.createFromText('')),
t = e.getSelection();
  return null != t && t.hasFocus && (n = i.EditorState.moveFocusToEnd(n)), n;
}

function D(e, n) {
  let t = b(n);
  return v(e, n, 0, t.length);
}

function U(e, n) {
  let t = n.getSelection();
  return t = (t = t.set('focusOffset', e)).set('anchorOffset', e), i.EditorState.forceSelection(n, t);
}

function P(e) {
  return U(e.getCurrentContent().getFirstBlock().getText().length, e);
}

function x(e) {
  return U(0, e);
}

function G(e) {
  let n = e.getSelection();
  return n = (n = n.set('focusOffset', 0)).set('isBackward', !0), i.EditorState.forceSelection(e, n);
}

function y(e) {
  let n = b(e),
t = e.getSelection();
  return t = (t = t.set('focusOffset', n.length)).set('isBackward', !1), i.EditorState.forceSelection(e, t);
}

function w(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
t = b(e);
  if (t.length > n) {
let r = e.getSelection();
e = v('', e, n, t.length), r.getAnchorOffset() > n && (r = r.set('anchorOffset', n)), r.getFocusOffset() > n && (r = r.set('focusOffset', n)), e = i.EditorState.forceSelection(e, r);
  }
  return e;
}

function j(e) {
  let n = window.getSelection();
  if (null == n || 'Caret' !== n.type || null == e)
return;
  let t = n.getRangeAt(0);
  if (! function(e, n) {
  for (; null != e;) {
    if (e === n)
      return !0;
    e = e.parentNode;
  }
  return !1;
}(t.commonAncestorContainer, e))
return;
  let i = t.getClientRects()[0],
r = e.getClientRects()[0];
  if (null == i || null == r)
return;
  let o = i.left - r.left + e.scrollLeft;
  o < e.scrollLeft ? e.scrollLeft = o - 10 : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3);
}

function F(e) {
  return 0 === b(e).length;
}