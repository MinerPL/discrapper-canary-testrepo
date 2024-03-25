"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return o.BotTagTypes
  },
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("79798"),
  o = n("988268"),
  u = n("293005"),
  a = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: r,
      nameColor: o,
      className: a,
      botType: c,
      usernameClass: d,
      discriminatorClass: f,
      botClass: h,
      botVerified: v = !1,
      style: m,
      useRemSizes: C = !1,
      usernameIcon: E
    } = e;
    return (0, i.jsxs)("div", {
      className: l(a, u.nameTag),
      style: m,
      children: [(0, i.jsxs)("span", {
        className: l(u.username, d),
        style: null != o ? {
          color: o
        } : void 0,
        children: [E, t]
      }), null != n ? (0, i.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != c ? (0, i.jsx)(s.default, {
        type: c,
        invertColor: r,
        className: l(h, u.bot),
        verified: v,
        useRemSizes: C
      }) : null]
    })
  }