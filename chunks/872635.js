n.d(t, {
  I: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(519953),
  l = n(481060),
  u = n(40851),
  c = n(153850),
  d = n(5967),
  _ = n(53529),
  E = n(50659),
  f = n(436660),
  h = n(887490),
  p = n(447525),
  m = n(227285);

function I(e) {
  var t;
  let {
editorRef: n,
options: i,
iconClassName: a,
dividerClassName: s
  } = e, u = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == u ? null : (0, r.jsxs)('div', {
className: m.buttons,
children: [
  (0, r.jsx)(T, {
    slateEditor: u,
    markdownSyntax: 'bold',
    children: (0, r.jsx)(l.BoldIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  }),
  (0, r.jsx)(T, {
    slateEditor: u,
    markdownSyntax: 'italics',
    children: (0, r.jsx)(l.ItalicIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  }),
  (0, r.jsx)(T, {
    slateEditor: u,
    markdownSyntax: 'strikethrough',
    children: (0, r.jsx)(l.StrikethroughIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  }),
  (0, r.jsx)('div', {
    className: o()(m.divider, s)
  }),
  !(null == i ? void 0 : i.disableBlockQuotes) && (0, r.jsx)(g, {
    slateEditor: u,
    blockType: 'blockQuote',
    children: (0, r.jsx)(l.QuoteIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  }),
  (0, r.jsx)(T, {
    slateEditor: u,
    markdownSyntax: 'inlineCode',
    children: (0, r.jsx)(l.AngleBracketsIcon, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  }),
  (0, r.jsx)(T, {
    slateEditor: u,
    markdownSyntax: 'spoiler',
    children: (0, r.jsx)(l.EyeIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(m.icon, a)
    })
  })
]
  });
}

function T(e) {
  let {
slateEditor: t,
markdownSyntax: n,
children: i
  } = e, a = !1;
  if ((null == t ? void 0 : t.selection) != null) {
let [e, r] = h.M8.edges(t.selection);
a = null != (0, E.U4)(t, e, r).before[n];
  }
  return (0, r.jsx)('button', {
'aria-pressed': a,
className: m.button,
onClick: () => {
  null != t && _.T.withSingleEntry(t, () => (0, E.py)(t, n));
},
children: i
  });
}

function g(e) {
  let {
blockType: t,
slateEditor: n,
children: i
  } = e, a = null != n ? h.bN.getCurrentBlock(n) : null, o = null != a && h.aj.isType(a[0], t);
  return (0, r.jsx)('button', {
'aria-pressed': o,
className: m.button,
onClick: () => {
  null != n && _.T.withSingleEntry(n, () => (0, E.hm)(n, t));
},
children: i
  });
}

function S(e) {
  var t;
  let {
slateEditor: n
  } = e, [r, a] = null !== (t = h.bN.getSelectedVoid(n)) && void 0 !== t ? t : [
null,
null
  ], o = i.useCallback(e => {
if ((null == n ? void 0 : n.selection) == null || null == a)
  return;
let t = n.selection;
_.T.withSingleEntry(n, () => {
  f.Q.voidToText(n, e, a), f.Q.select(n, t);
});
  }, [
n,
a
  ]);
  return null == r ? null : (0, p.Z)(r, {
replace: o
  });
}
t.Z = i.forwardRef(function(e, t) {
  var n;
  let {
editorRef: a,
containerRef: o,
options: l
  } = e, _ = i.useRef(null), [E, f] = i.useState(!1), p = i.useRef(), T = i.useContext(u.ZP), g = i.useCallback(() => {
f(!1), clearTimeout(p.current);
  }, []), A = i.useCallback(e => {
var t;
let n = T.renderWindow;
!(e.target instanceof n.Node && (null === (t = _.current) || void 0 === t ? void 0 : t.contains(e.target))) && g();
  }, [
T,
g
  ]), N = i.useCallback(e => {
let t = T.renderWindow;
if (e.target instanceof t.Element) {
  if (0 !== e.button)
    g();
  else {
    var n;
    let r = e.target instanceof t.Node && (null === (n = _.current) || void 0 === n ? void 0 : n.contains(e.target));
    clearTimeout(p.current), p.current = setTimeout(() => {
      var t;
      let n = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
        i = o.current;
      f(r || null != n && null != i && i.contains(n));
    }, 100);
  }
} else
  g();
  }, [
T,
o,
g
  ]);
  i.useImperativeHandle(t, () => ({
hide: g
  }), [g]), i.useEffect(() => {
let e = T.renderWindow;
return e.document.addEventListener('keydown', g), e.document.addEventListener('mousedown', A), e.document.addEventListener('mouseup', N), e.addEventListener('focus', g), e.addEventListener('blur', g), () => {
  e.document.removeEventListener('keydown', g), e.document.removeEventListener('mousedown', A), e.document.removeEventListener('mouseup', N), e.removeEventListener('focus', g), e.removeEventListener('blur', g), clearTimeout(p.current);
};
  }, [
T,
g,
A,
N
  ]);
  let {
x: v,
y: O
  } = i.useMemo(() => {
var e, t, n, r;
let i = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
if ((null == i ? void 0 : i.selection) == null || h.M8.isCollapsed(i.selection) || !E)
  return {
    x: null,
    y: null
  };
let l = s.F3.findDocumentOrShadowRoot(i),
  u = l.getSelection();
if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed)
  return {
    x: null,
    y: null
  };
let c = l.createRange();
c.setStart(u.focusNode, u.focusOffset), c.setEnd(u.focusNode, u.focusOffset);
let d = c.getBoundingClientRect(),
  _ = l.createRange();
_.setStart(u.anchorNode, u.anchorOffset), _.setEnd(u.anchorNode, u.anchorOffset);
let f = _.getBoundingClientRect(),
  p = l.createRange();
p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.focusNode, u.focusOffset);
let m = p.getBoundingClientRect(),
  I = d.x === f.x,
  T = I ? m.x : Math.min(d.x, f.x),
  g = I ? m.x + m.width : Math.max(d.x, f.x),
  S = null !== (r = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0;
return {
  x: T + (g - T) / 2,
  y: Math.max(S, Math.min(f.y, d.y))
};
  }, [
o,
E,
a
  ]), [R, C] = i.useState(0), [y, D] = i.useState(0);
  if (i.useLayoutEffect(() => {
  if (null == v || null == O || null == _.current)
    return;
  let e = _.current.getBoundingClientRect();
  D(e.width / 2), C(e.height + 12);
}, [
  v,
  O
]), null == v || null == O)
return null;
  let L = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == L ? null : (0, r.jsx)(c.ZP, {
children: (0, r.jsxs)('div', {
  id: 'slate-toolbar',
  ref: _,
  className: m.toolbar,
  style: {
    top: O - R,
    left: v - y
  },
  onMouseDown: e => {
    e.stopPropagation();
  },
  onMouseUp: e => {
    e.stopPropagation();
  },
  children: [
    (0, r.jsx)(S, {
      slateEditor: L
    }),
    (0, r.jsx)(I, {
      editorRef: a,
      options: l
    })
  ]
})
  });
});