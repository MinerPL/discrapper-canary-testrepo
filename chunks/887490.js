n.d(t, {
  C0: function() {
return f;
  },
  Ew: function() {
return m;
  },
  Jz: function() {
return h;
  },
  LC: function() {
return E;
  },
  M8: function() {
return p;
  },
  aj: function() {
return d;
  },
  bN: function() {
return c;
  },
  lP: function() {
return S;
  },
  q: function() {
return _;
  }
}), n(47120);
var r = n(512722),
  i = n.n(r),
  a = n(327432),
  o = n(519953),
  s = n(339227),
  l = n(42530);
n(789952);
let u = !1;
{
  let e = o.F3.findDocumentOrShadowRoot;
  o.F3.findDocumentOrShadowRoot = t => {
var n, r;
return null !== (r = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== r ? r : e(t);
  }, u = !0;
}
let c = {
...a.ML,
...o.F3,
richValue: e => e.children,
blocks: e => c.richValue(e).map((e, t) => [
  e,
  [t]
]),
isBlock: (e, t) => _.isElement(t) && a.ML.isBlock(e, t),
isInline: (e, t) => _.isElement(t) && a.ML.isInline(e, t),
isVoid: (e, t) => _.isElement(t) && a.ML.isVoid(e, t),
isEditorEmpty(e) {
  let t = c.richValue(e);
  return !(t.length > 1) && (0 === t.length || 'line' === t[0].type && _.isEmpty(t[0]));
},
getFirstText(e) {
  let t = c.node(e, l.u9);
  return E.isText(t[0]) ? t[0] : null;
},
getCurrentBlock(e) {
  return null == e.selection ? null : this.getParentBlock(e, e.selection);
},
getCurrentElement(e) {
  return null == e.selection ? null : this.getParentElement(e, e.selection);
},
getCurrentInline(e) {
  return null == e.selection ? null : this.getParentInline(e, e.selection);
},
getCurrentVoid(e) {
  return null == e.selection ? null : this.getParentVoid(e, e.selection);
},
getCurrentText(e) {
  let t = null != e.selection ? p.toPoint(e.selection) : null;
  return null == t ? null : c.node(e, t.path);
},
getParentBlock(e, t) {
  var n;
  return null !== (n = c.above(e, {
    at: t,
    match: t => _.isElement(t) && c.isBlock(e, t),
    mode: 'lowest'
  })) && void 0 !== n ? n : null;
},
getParentElement(e, t) {
  var n;
  return null !== (n = c.above(e, {
    at: t,
    match: e => _.isElement(e),
    mode: 'lowest'
  })) && void 0 !== n ? n : null;
},
getParentInline(e, t) {
  var n;
  return null !== (n = c.above(e, {
    at: t,
    match: t => c.isInline(e, t),
    mode: 'lowest'
  })) && void 0 !== n ? n : null;
},
getParentVoid(e, t) {
  var n;
  return null !== (n = c.above(e, {
    at: t,
    match: t => c.isVoid(e, t),
    mode: 'lowest'
  })) && void 0 !== n ? n : null;
},
getSelectedVoid(e) {
  let t;
  if (null == e.selection)
    return null;
  if (p.isExpanded(e.selection)) {
    let [n, r] = p.edges(e.selection), i = c.after(e, n, {
      unit: 'offset'
    }), a = c.before(e, r, {
      unit: 'offset'
    });
    if (null == i || null == a || !h.equals(i, a))
      return null;
    t = i;
  } else
    t = e.selection.anchor;
  return null == t ? null : c.getParentVoid(e, t);
},
getSelectedText(e, t) {
  let n = null;
  if (t) {
    let t = o.F3.findDocumentOrShadowRoot(e).getSelection();
    if (null != t && t.rangeCount > 0) {
      let r = t.getRangeAt(0);
      null != r && (n = o.F3.toSlateRange(e, r, {
        exactMatch: !0,
        suppressThrow: !0
      }));
    }
  } else
    n = e.selection;
  return null == n ? '' : this.getTextFromRange(e, n);
},
getTextFromRange(e, t) {
  let [n, r] = p.edges(t), i = c.nodes(e, {
    at: t,
    mode: 'lowest',
    match: e => E.isText(e)
  }), a = '';
  for (let [e, t] of i) {
    let i = f.equals(t, n.path) ? n.offset : 0,
      o = f.equals(t, r.path) ? r.offset : 0;
    a += e.text.substring(i, o);
  }
  return a;
},
withoutNormalizing(e, t) {
  let n = c.isNormalizing(e);
  c.setNormalizing(e, !1);
  try {
    t();
  } finally {
    c.setNormalizing(e, n);
  }!1 !== n && c.normalize(e);
},
areStylesDisabled(e) {
  var t;
  if (!e.previewMarkdown)
    return !0;
  let n = c.richValue(e),
    r = n[0],
    i = (null == r ? void 0 : r.type) === 'line' ? r.children[0] : null;
  if (null == i || !E.isText(i))
    return !1;
  let a = e.chatInputType,
    o = i.text;
  return 1 === n.length && 1 === r.children.length && (!0 === a.sedReplace && o.startsWith('s/') || (null === (t = a.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && o.startsWith('+'));
},
focus(e) {
  !o.F3.isFocused(e) && (o.F3.focus(e), o.F3.deselect(e));
},
getSelectionOverlap(e, t) {
  if (null == e.selection)
    return {
      anchor: null,
      focus: null
    };
  if (f.isPath(t)) {
    let n = c.range(e, t),
      [r] = c.node(e, t);
    if (_.isElement(r)) {
      let r = c.before(e, t),
        i = c.after(e, t);
      t = {
        anchor: null != r ? r : n.anchor,
        focus: null != i ? i : n.focus
      };
    } else
      t = n;
  }
  let [n, r] = p.edges(t), i = null, a = null;
  return h.equals(e.selection.anchor, n) ? i = 'start' : h.equals(e.selection.anchor, r) ? i = 'end' : p.includes(t, e.selection.anchor) && (i = 'inside'), h.equals(e.selection.focus, n) ? a = 'start' : h.equals(e.selection.focus, r) ? a = 'end' : p.includes(t, e.selection.focus) && (a = 'inside'), {
    anchor: i,
    focus: a
  };
}
  },
  d = {
...a.NB,
isType: (e, t) => a.W_.isElement(e) && e.type === t,
isInTypes: (e, t) => a.W_.isElement(e) && t.has(e.type)
  },
  _ = {
...a.W_,
updateElement(e, t) {
  let n = c.node(e, t[1]);
  return i()(!c.isEditor(t[0]), 'Element is the root node'), i()(null != n, 'Failed to find element'), i()(_.isElement(n[0]), 'Node at this path is no longer an element'), i()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
},
markdown(e, t, n) {
  var r;
  let i = 'line' === e.type && (null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.wasInCodeBlock) === !0,
    a = e.children.map(e => {
      var t;
      return E.isText(e) ? e.text : '((element:'.concat(null !== (t = e.type) && void 0 !== t ? t : 'unknown', '))');
    }),
    o = a.join('');
  return {
    entries: s.Q(o, null != t ? t : null, i, n),
    serializedChildren: a
  };
},
isEmpty(e) {
  if (e.children.length > 1)
    return !1;
  if (0 === e.children.length)
    return !0;
  let t = e.children[0];
  return E.isText(t) && 0 === t.text.length;
}
  },
  E = {
...a.xv
  },
  f = {
...a.y$,
isFirstEditorBlock: e => f.equals(e, l.YD),
isFirstEditorText: e => f.equals(e, l.u9),
isFirstChild: (e, t) => f.equals(t, f.child(e, 0)),
child: (e, t) => [
  ...e,
  t
]
  },
  h = {
...a.E9,
start(e) {
  let [, t] = e;
  return {
    path: f.child(t, 0),
    offset: 0
  };
},
end(e) {
  let [t, n] = e, r = t.children[t.children.length - 1];
  return {
    path: f.child(n, t.children.length - 1),
    offset: E.isText(r) ? r.text.length : 0
  };
},
isAtStart(e, t) {
  return h.equals(e, this.start(t));
},
isAtEnd(e, t) {
  return h.equals(e, this.end(t));
},
clamp(e, t) {
  let [n, r] = p.edges(t);
  return h.isBefore(e, n) && (e = n), h.isAfter(e, r) && (e = r), e;
}
  },
  p = {
...a.e6,
toPoint: e => null == e || p.isExpanded(e) ? null : e.anchor,
children(e) {
  let [t, n] = e, r = t.children[t.children.length - 1];
  return {
    anchor: {
      path: f.child(n, 0),
      offset: 0
    },
    focus: {
      path: f.child(n, t.children.length - 1),
      offset: E.isText(r) ? r.text.length : 0
    }
  };
},
clamp(e, t) {
  let [n, r] = p.edges(e), [i, a] = p.edges(t);
  return (h.isBefore(n, i) && (n = i), h.isAfter(r, a) && (r = a), p.isForward(e)) ? {
    anchor: n,
    focus: r
  } : {
    anchor: r,
    focus: n
  };
}
  },
  m = {
equals: (e, t) => null == e && null == t || null != e && null != t && p.equals(e, t),
isValid(e, t) {
  if (null == t)
    return !1;
  let {
    anchor: n,
    focus: r
  } = t;
  if (!c.hasPath(e, n.path) || !c.hasPath(e, r.path))
    return !1;
  let [i] = c.node(e, n.path), [a] = c.node(e, r.path);
  return E.isText(i) && E.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
}
  },
  I = (e, t) => {
let n = (t.top + t.bottom) / 2;
return e.top <= n && e.bottom >= n;
  },
  T = (e, t, n) => {
let r = c.toDOMRange(e, t).getBoundingClientRect(),
  i = c.toDOMRange(e, n).getBoundingClientRect();
return I(r, i) && I(i, r);
  },
  g = (e, t, n, r) => {
let i = {
    anchor: t,
    focus: t
  },
  a = 0,
  o = n.length,
  s = Math.floor((a + o) / 2);
for (; s !== a;)
  if (T(e, {
      anchor: n[s],
      focus: n[s]
    }, i) ? r ? o = s : a = s : r ? a = s : o = s, s = Math.floor((a + o) / 2), !r && s === n.length - 2 && o === n.length - 1) {
    let t = n[n.length - 1];
    T(e, {
      anchor: t,
      focus: t
    }, i) && (s = o);
  }
return n[s];
  },
  S = {
getLineStart(e, t, n) {
  let r;
  let i = c.getParentElement(e, t);
  if (null == i)
    return null;
  let a = c.previous(e, {
    at: t,
    match: t => c.isInline(e, t) && !c.isVoid(e, t) && t !== i[0]
  });
  null != a && (r = c.after(e, a[1])), null == r && (r = c.start(e, i[1]));
  let o = {
      anchor: r,
      focus: t
    },
    s = Array.from(c.positions(e, {
      at: o
    })),
    l = g(e, t, s, !0);
  if (n && h.equals(t, l) && !h.isAtEnd(t, i)) {
    let n = c.after(e, t);
    if (null == n)
      return l;
    l = g(e, n, s, !0);
  }
  return l;
},
getLineEnd(e, t, n) {
  let r;
  let i = c.getParentElement(e, t);
  if (null == i)
    return null;
  let a = c.next(e, {
    at: t,
    match: t => c.isInline(e, t) && !c.isVoid(e, t) && t !== i[0]
  });
  null != a && (r = c.before(e, a[1])), null == r && (r = c.end(e, i[1]));
  let o = {
      anchor: t,
      focus: r
    },
    s = Array.from(c.positions(e, {
      at: o
    })),
    l = g(e, t, s, !1);
  if (n && h.equals(t, l) && !h.isAtEnd(t, i)) {
    let n = c.after(e, t);
    if (null == n)
      return l;
    l = g(e, n, s, !1);
  }
  return l;
},
getLineActionRange(e, t) {
  let n = p.toPoint(e.selection);
  if (null == n)
    return null;
  if (t) {
    let t = S.getLineStart(e, n, !1);
    return null == t ? null : {
      anchor: t,
      focus: n
    };
  } {
    let t = S.getLineEnd(e, n, !0);
    return null == t ? null : {
      anchor: n,
      focus: t
    };
  }
}
  };