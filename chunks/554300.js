var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(613828),
  l = n(481060),
  u = n(861805);
let c = i.forwardRef(function(e, t) {
  var n;
  let {
avatar: i,
name: a,
children: c,
subText: d,
decorators: _,
onClick: E,
selected: f,
muted: h,
to: p,
avatarClassName: m,
selectedClassName: I,
innerClassName: T,
wrapContent: g,
highlighted: S,
focusProps: A,
...N
  } = e;
  N.className = s()(N.className, u.container, {
[u.selected]: f,
[u.highlighted]: S,
[null != I ? I : '']: f,
[u.clickable]: !f && (null != p || null != E)
  }), N['aria-selected'] = null !== (n = N['aria-selected']) && void 0 !== n ? n : f;
  let v = (0, r.jsxs)('div', {
className: s()(T, u.layout, {
  [u.muted]: !f && h,
  [u.wrappedLayout]: g
}),
children: [
  (0, r.jsx)('div', {
    className: s()(u.avatar, m),
    children: i
  }),
  (0, r.jsxs)('div', {
    className: u.content,
    children: [
      (0, r.jsxs)('div', {
        className: u.nameAndDecorators,
        children: [
          (0, r.jsx)('div', {
            className: s()(u.name, {
              [u.wrappedName]: g
            }),
            children: a
          }),
          _
        ]
      }),
      null != d ? (0, r.jsx)('div', {
        className: u.subText,
        children: d
      }) : null
    ]
  }),
  null != c ? (0, r.jsx)('div', {
    className: u.children,
    children: c
  }) : null
]
  });
  return null != p ? (0, r.jsx)(l.FocusRing, {
...A,
children: (0, r.jsx)(o.rU, {
  to: p,
  onClick: E,
  ...N,
  role: 'listitem',
  ref: t,
  children: v
})
  }) : null != E ? (0, r.jsx)(l.Clickable, {
onClick: E,
focusProps: A,
...N,
role: 'listitem',
innerRef: t,
children: v
  }) : (0, r.jsx)(l.FocusRing, {
...A,
children: (0, r.jsx)('div', {
  ...N,
  role: 'listitem',
  ref: t,
  children: v
})
  });
});
t.Z = c;