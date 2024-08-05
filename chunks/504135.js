n.d(t, {
  s: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(1561),
  l = n(761224),
  u = n(898560),
  c = n(743236),
  d = n(481060),
  _ = n(939350),
  E = n(206227);

function f(e) {
  let {
color: t = 'default',
label: n,
icon: a,
showIconFirst: f = !1,
imageUrl: h,
hint: p,
subtext: m,
hasSubmenu: I,
disabled: T,
isFocused: g,
menuItemProps: S,
action: A,
onClose: N,
onFocus: v,
className: O,
focusedClassName: R,
subMenuIconClassName: C,
dontCloseOnActionIfHoldingShiftKey: y,
dontCloseOnAction: D,
iconProps: L,
sparkle: b
  } = e, M = i.useContext(u.r), P = i.useRef(null), U = i.useCallback(e => {
if (null == A)
  return !1;
!(e.shiftKey && y) && !D && N(), e.persist(), null == M || M(), requestAnimationFrame(() => A(e));
  }, [
A,
N,
M,
y,
D
  ]);
  return i.useEffect(() => {
g && ((0, c.F)(P), null == v || v());
  }, [
g,
v
  ]), (0, r.jsxs)(o.P, {
innerRef: P,
className: s()(E.item, E.labelContainer, _._[t], O, {
  [E.disabled]: T,
  [E.focused]: g,
  [null != R ? R : '']: g
}),
onClick: T ? void 0 : U,
'aria-disabled': T,
...S,
'data-menu-item': 'true',
children: [
  f && null != a && (0, r.jsx)('div', {
    className: E.iconContainerLeft,
    children: (0, r.jsx)(a, {
      color: 'currentColor',
      ...L,
      className: s()(E.icon, null == L ? void 0 : L.className),
      isFocused: g
    })
  }),
  (0, r.jsxs)('div', {
    className: E.label,
    children: [
      (0, l.I)(n, e),
      null != m && (0, r.jsx)('div', {
        className: E.subtext,
        children: m
      })
    ]
  }),
  null != p && (0, r.jsx)('div', {
    className: E.hintContainer,
    children: (0, l.I)(p, e)
  }),
  !f && null != a && (0, r.jsx)('div', {
    className: E.iconContainer,
    children: (0, r.jsx)(a, {
      color: 'currentColor',
      ...L,
      className: s()(E.icon, null == L ? void 0 : L.className),
      isFocused: g
    })
  }),
  null != h && (0, r.jsx)('div', {
    className: E.imageContainer,
    children: (0, r.jsx)('img', {
      className: E.image,
      src: (0, l.I)(h, e),
      alt: ''
    })
  }),
  I && (0, r.jsxs)('div', {
    className: E.iconContainer,
    children: [
      (0, r.jsx)(d.ChevronSmallRightIcon, {
        size: 'md',
        color: 'currentColor',
        className: s()(E.caret, C)
      }),
      b && (0, r.jsx)(d.LottieSparkle, {
        className: E.sparkles
      })
    ]
  })
]
  });
}