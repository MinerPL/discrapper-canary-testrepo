"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var n = i("735250"),
  a = i("470079"),
  s = i("392711"),
  l = i("399606"),
  o = i("351780"),
  r = i("576125"),
  u = i("465858"),
  d = i("112843"),
  c = i("524484");

function h(e) {
  let {
    reactionRef: t,
    count: i
  } = e, n = a.useRef(i), r = (0, l.useStateFromStores)([o.default], () => o.default.getState()), c = (0, d.default)(), h = (0, u.default)(t);
  return a.useEffect(() => {
    if (i > n.current && null != h) {
      let e = (0, s.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
      c.fire(h.x, h.y, {
        count: e
      })
    }
    n.current = i
  }, [i, h, c, r.confettiCount]), null
}

function f(e) {
  return (0, n.jsx)(r.default, {
    confettiLocation: c.ConfettiLocation.REACTION,
    children: (0, n.jsx)(h, {
      ...e
    })
  })
}