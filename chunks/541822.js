t.d(e, {
  Z: function() {
return c;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  r = t(557533),
  o = t.n(r),
  s = t(349361),
  a = t(415858);

function c(n) {
  let {
children: e,
gradientClassName: t,
...r
  } = n, c = l.useRef(null), [d, u] = l.useState(!0), S = () => {
var n;
(null === (n = c.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(s.h2, {
    ...r,
    fade: !0,
    ref: n => {
      null != n && (c.current = n, S());
    },
    onScroll: S,
    children: e
  }),
  (0, i.jsx)('div', {
    className: o()(a.containerScrollGradient, t),
    'data-shown': d
  })
]
  });
}