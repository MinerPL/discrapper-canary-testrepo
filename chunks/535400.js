"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("576125"),
  i = n("465858"),
  r = n("112843"),
  o = n("524484");

function u(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, a = (0, r.default)(), s = (0, i.default)(t);
  return l.useEffect(() => {
    n && null != s && null != t && a.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, a, n, s]), null
}

function d(e) {
  return (0, a.jsx)(s.default, {
    confettiLocation: o.ConfettiLocation.CALL_TILE,
    children: (0, a.jsx)(u, {
      ...e
    })
  })
}