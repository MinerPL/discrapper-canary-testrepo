n.d(t, {
  m: function() {
return u;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(887024),
  s = n(745510),
  o = n(675654),
  l = n(55233);

function u(e) {
  let {
children: t
  } = e, [n, u] = i.useState(null), [c, d] = i.useState(null), _ = i.useRef(new Set()), [E, f] = i.useState(!1), h = i.useCallback(e => {
_.current.delete(e), f(_.current.size > 0);
  }, []), p = i.useCallback(e => (_.current.add(e), f(!0), () => h(e)), [h]), m = i.useCallback((e, t) => {
for (let n of _.current)
  n(e, t);
  }, []);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(s.d, {
    confettiCanvas: c,
    spriteCanvas: n,
    baseConfig: o.We,
    addClickListener: p,
    removeClickListener: h,
    children: t
  }),
  (0, r.jsx)(a.O_, {
    ref: d,
    className: l.canvas,
    environment: o.rq,
    onClick: E ? m : void 0
  }),
  (0, r.jsx)(a.Ji, {
    ref: u,
    colors: o.Br,
    sprites: o.CA,
    spriteWidth: o.Ko,
    spriteHeight: o.Ko
  })
]
  });
}