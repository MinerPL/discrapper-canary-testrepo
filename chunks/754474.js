"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return a.BotTagTypes
  },
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  o = n("79798"),
  a = n("988268"),
  l = n("293005"),
  u = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: i,
      nameColor: a,
      className: u,
      botType: d,
      usernameClass: c,
      discriminatorClass: f,
      botClass: E,
      botVerified: h = !1,
      style: _,
      useRemSizes: p = !1,
      usernameIcon: C
    } = e;
    return (0, r.jsxs)("div", {
      className: s(u, l.nameTag),
      style: _,
      children: [(0, r.jsxs)("span", {
        className: s(l.username, c),
        style: null != a ? {
          color: a
        } : void 0,
        children: [C, t]
      }), null != n ? (0, r.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != d ? (0, r.jsx)(o.default, {
        type: d,
        invertColor: i,
        className: s(E, l.bot),
        verified: h,
        useRemSizes: p
      }) : null]
    })
  }