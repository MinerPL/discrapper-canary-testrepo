t.d(n, {
  Z: function() {
return c;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  r = t(557533),
  s = t.n(r),
  o = t(349361),
  a = t(685814);

function c(e) {
  let {
children: n,
gradientClassName: t,
...r
  } = e, c = l.useRef(null), [d, u] = l.useState(!0), m = () => {
var e;
(null === (e = c.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(o.h2, {
    ...r,
    fade: !0,
    ref: e => {
      null != e && (c.current = e, m());
    },
    onScroll: m,
    children: n
  }),
  (0, i.jsx)('div', {
    className: s()(a.containerScrollGradient, t),
    'data-shown': d
  })
]
  });
}