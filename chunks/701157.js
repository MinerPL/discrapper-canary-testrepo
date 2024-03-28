"use strict";
s.r(t), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("165630"),
  o = s("771845"),
  d = s("11844"),
  u = s("300037"),
  c = s("689938"),
  S = s("73148");
t.default = function(e) {
  let {
    hasAppliedGuildBoosts: t
  } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.affinities), E = (0, l.useStateFromStores)([o.default], () => o.default.getFlattenedGuildIds()), T = n.useMemo(() => {
    let e = s.slice(0, 3).map(e => e.guildId);
    for (let t = 0; t < E.length && !(e.length >= 3); t++) {
      let s = E[t];
      !e.includes(s) && e.push(s)
    }
    return e
  }, [s, E]);
  return 0 === T.length ? null : (0, a.jsxs)("div", {
    className: S.wrapper,
    children: [t && (0, a.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      className: S.header,
      children: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
    }), T.map(e => (0, a.jsx)(u.default, {
      className: S.recommendedServerCard,
      guildId: e,
      boostingVariant: !0
    }, e)), E.length > 3 && (0, a.jsx)(d.default, {})]
  })
}