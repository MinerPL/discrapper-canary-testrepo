"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return r.BotTagTypes
  },
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  s = n("79798"),
  r = n("988268"),
  o = n("293005"),
  u = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: a,
      nameColor: r,
      className: u,
      botType: c,
      usernameClass: d,
      discriminatorClass: f,
      botClass: E,
      botVerified: _ = !1,
      style: h,
      useRemSizes: S = !1,
      usernameIcon: m
    } = e;
    return (0, i.jsxs)("div", {
      className: l(u, o.nameTag),
      style: h,
      children: [(0, i.jsxs)("span", {
        className: l(o.username, d),
        style: null != r ? {
          color: r
        } : void 0,
        children: [m, t]
      }), null != n ? (0, i.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != c ? (0, i.jsx)(s.default, {
        type: c,
        invertColor: a,
        className: l(E, o.bot),
        verified: _,
        useRemSizes: S
      }) : null]
    })
  }