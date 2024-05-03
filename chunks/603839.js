"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("607070"),
  o = n("931240"),
  u = n("650461"),
  d = n("35313"),
  c = n("602014"),
  f = n("188837"),
  E = n("496376"),
  h = n("308083"),
  _ = n("156610");
t.default = e => {
  let {
    guildId: t,
    onClose: n,
    gameId: C
  } = e, S = (0, i.useStateFromStores)([u.default], () => null == u.default.getStateForGuild(t).progress), m = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), [p, I] = s.useState(S && !m ? h.ClanSetupModalPages.INTRO_ANIMATION : h.ClanSetupModalPages.SETUP);
  s.useEffect(() => {
    null != C && (0, o.updateClanSetup)(t, {
      requiredGameId: C
    })
  }, [C, t]);
  let T = (0, d.useFullScreenModalAnimationStyle)();
  return (0, a.jsx)(l.animated.div, {
    style: T,
    className: _.modal,
    children: (0, a.jsx)("div", {
      className: _.modalContents,
      children: (() => {
        switch (p) {
          case h.ClanSetupModalPages.INTRO_ANIMATION:
            return (0, a.jsx)(c.default, {
              guildId: t,
              setPage: I
            });
          case h.ClanSetupModalPages.SETUP:
            return (0, a.jsx)(E.default, {
              guildId: t,
              setPage: I,
              onClose: n
            });
          case h.ClanSetupModalPages.SIGN:
            return (0, a.jsx)(f.default, {
              guildId: t,
              setPage: I,
              onClose: n
            });
          default:
            return null
        }
      })()
    })
  })
}