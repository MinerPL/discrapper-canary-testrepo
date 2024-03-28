"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("650461"),
  r = n("602014"),
  o = n("496376"),
  u = n("308083"),
  d = n("653196");
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, c = (0, l.useStateFromStores)([i.default], () => null == i.default.getState(t)), [f, E] = s.useState(c ? u.ClanSetupModalPages.INTRO : u.ClanSetupModalPages.SETUP);
  return (0, a.jsx)("div", {
    className: d.container,
    children: (() => {
      switch (f) {
        case u.ClanSetupModalPages.INTRO:
          return (0, a.jsx)(r.ClanSetupIntro, {
            onClose: n,
            setPage: E
          });
        case u.ClanSetupModalPages.ANIMATE:
          return (0, a.jsx)(r.ClanSetupIntroAnimation, {
            guildId: t,
            setPage: E
          });
        default:
          return (0, a.jsx)(o.default, {
            guildId: t,
            onClose: n
          })
      }
    })()
  })
}