"use strict";
n.d(t, {
  m: function() {
    return u
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(745510),
  a = n(675654),
  l = n(724734);

function u(e) {
  let {
    children: t
  } = e, [n, u] = r.useState(null), [_, d] = r.useState(null), c = r.useRef(new Set), [E, I] = r.useState(!1), T = r.useCallback(e => {
    c.current.delete(e), I(c.current.size > 0)
  }, []), h = r.useCallback(e => (c.current.add(e), I(!0), () => T(e)), [T]), S = r.useCallback((e, t) => {
    for (let n of c.current) n(e, t)
  }, []);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.d, {
      confettiCanvas: _,
      spriteCanvas: n,
      baseConfig: a.We,
      addClickListener: h,
      removeClickListener: T,
      children: t
    }), (0, i.jsx)(s.O_, {
      ref: d,
      className: l.canvas,
      environment: a.rq,
      onClick: E ? S : void 0
    }), (0, i.jsx)(s.Ji, {
      ref: u,
      colors: a.Br,
      sprites: a.CA,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })]
  })
}