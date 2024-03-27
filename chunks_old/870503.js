"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("697218"),
  i = n("478733"),
  r = function(e) {
    let {
      recipients: t,
      size: n,
      status: r,
      ...o
    } = e, u = (0, a.useStateFromStoresArray)([s.default], () => t.slice(0, 2).map(e => {
      let t = s.default.getUser(e);
      if (null != t) return t.getAvatarURL(void 0, n, !1)
    }), [t, n]);
    return (0, l.jsx)(i.default, {
      "aria-label": o["aria-label"],
      "aria-hidden": o["aria-hidden"],
      backSrc: u[0],
      frontSrc: u[1],
      size: n,
      status: r
    })
  }