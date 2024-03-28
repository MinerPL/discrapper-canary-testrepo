"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("774078"),
  r = n("390322"),
  o = n("272929"),
  u = n("456631"),
  d = n("381871"),
  c = n("304388");

function f(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([u.default], () => u.default.effectCooldownEndTime), f = l.useMemo(() => null != n ? (n.getTime() - Date.now()) / 1e3 : 0, [n]), {
    seconds: h
  } = (0, i.default)(null != n ? n : new Date), m = h > 0;
  return (0, a.jsx)(c.default, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: l
      } = e;
      return (0, a.jsx)(r.default, {
        children: (0, a.jsx)(d.default, {
          channel: t,
          closePopout: n,
          onFocus: l
        })
      })
    },
    children: e => {
      let {
        onMouseEnter: t,
        ...n
      } = e;
      return (0, a.jsx)(o.default, {
        totalCooldownSeconds: f,
        remainingCooldownSeconds: h,
        onMouseEnter: e => {
          var n, a;
          return n = e, a = t, void(!m && a(n))
        },
        ...n
      })
    }
  })
}