"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var s = a("735250");
a("470079");
var l = a("803997"),
  n = a.n(l),
  r = a("786272");

function i(e) {
  let {
    application: t,
    splashSize: a,
    className: l,
    overrideSplash: i
  } = e, u = null != i ? i : t.getSplashURL(a);
  return (0, s.jsx)("div", {
    className: n()(r.splashBackground, l),
    style: {
      backgroundImage: null != u ? "url(".concat(u, ")") : void 0
    }
  })
}