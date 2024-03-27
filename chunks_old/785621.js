"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  }
});
var n = i("37983"),
  a = i("884691"),
  l = i("917351"),
  o = i("65597"),
  s = i("880731"),
  r = i("232268"),
  u = i("759432"),
  c = i("798592"),
  d = i("39141");

function h(e) {
  let {
    reactionRef: t,
    count: i
  } = e, n = a.useRef(i), r = (0, o.useStateFromStores)([s.default], () => s.default.getState()), d = (0, c.default)(), h = (0, u.default)(t);
  return a.useEffect(() => {
    if (i > n.current && null != h) {
      let e = (0, l.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
      d.fire(h.x, h.y, {
        count: e
      })
    }
    n.current = i
  }, [i, h, d, r.confettiCount]), null
}

function m(e) {
  return (0, n.jsx)(r.default, {
    confettiLocation: d.ConfettiLocation.REACTION,
    children: (0, n.jsx)(h, {
      ...e
    })
  })
}