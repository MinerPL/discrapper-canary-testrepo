"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("749210"),
  r = n("210887"),
  o = n("514611"),
  u = n("469988"),
  d = n("689938"),
  c = n("623604");
t.default = e => {
  let {
    guilds: t
  } = e, n = (0, s.useStateFromStores)([r.default], () => r.default.theme), f = t.map(e => (0, a.jsx)(o.default, {
    className: c.__invalid_guildCard,
    onView: () => i.default.transitionToGuildSync(e.id),
    guild: {
      ...e,
      presenceCount: void 0,
      memberCount: void 0,
      premiumSubscriptionCount: void 0,
      emojis: void 0
    },
    theme: n
  }, e.id));
  return (0, a.jsx)("section", {
    className: c.guildListSection,
    children: t.length > 0 ? (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Heading, {
        className: c.__invalid_title,
        variant: "heading-lg/semibold",
        children: d.default.Messages.YOUR_HUB
      }), (0, a.jsxs)("div", {
        className: c.guildList,
        children: [f, (0, a.jsx)(u.default, {
          hasHub: !0
        })]
      })]
    }) : (0, a.jsx)("div", {
      className: c.guildList,
      children: (0, a.jsx)(u.default, {
        hasHub: !1
      })
    })
  })
}