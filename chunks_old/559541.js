"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("145079"),
  o = n("87657"),
  u = n("27618"),
  d = n("819088"),
  c = function(e) {
    let {
      user: t,
      hovered: n,
      subText: s,
      showAccountIdentifier: c,
      status: f,
      isMobile: E,
      className: h
    } = e, _ = (0, i.useStateFromStores)([u.default], () => u.default.getNickname(t.id));
    return (0, a.jsxs)("div", {
      className: l(d.userInfo, h, {
        [d.hovered]: n
      }),
      children: [(0, a.jsx)(o.default, {
        user: t,
        className: d.avatar,
        animate: n,
        status: f,
        isMobile: E
      }), (0, a.jsxs)("div", {
        className: d.text,
        children: [(0, a.jsx)(r.default, {
          user: t,
          nick: _,
          botClass: d.botTag,
          className: l(d.discordTag, {
            [d.alignPomelo]: t.isPomelo()
          }),
          usernameClass: d.username,
          discriminatorClass: d.discriminator,
          showAccountIdentifier: c
        }), (0, a.jsx)("div", {
          className: d.subtext,
          children: s
        })]
      })]
    })
  }