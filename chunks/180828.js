"use strict";
n.d(t, {
  J: function() {
    return a.Hb
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(467679),
  a = n(674563),
  l = n(77351);
t.Z = e => {
  let {
    name: t,
    discriminator: n,
    invertBotTagColor: r,
    nameColor: a,
    className: u,
    botType: _,
    usernameClass: d,
    discriminatorClass: c,
    botClass: E,
    botVerified: I = !1,
    style: T,
    useRemSizes: h = !1,
    usernameIcon: S
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(u, l.nameTag),
    style: T,
    children: [(0, i.jsxs)("span", {
      className: s()(l.username, d),
      style: null != a ? {
        color: a
      } : void 0,
      children: [S, t]
    }), null != n ? (0, i.jsxs)("span", {
      className: null != c ? c : void 0,
      children: ["#", n]
    }) : null, null != _ ? (0, i.jsx)(o.Z, {
      type: _,
      invertColor: r,
      className: s()(E, l.bot),
      verified: I,
      useRemSizes: h
    }) : null]
  })
}