"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("100527"),
  u = s("906732"),
  r = s("252618"),
  o = s("598077"),
  d = s("430824"),
  c = s("693546"),
  E = s("863249"),
  I = s("328977"),
  f = s("208257"),
  T = s("853486"),
  _ = s("689938"),
  S = s("325370");
t.default = function(e) {
  let {
    guildId: t
  } = e, {
    analyticsLocations: s
  } = (0, u.default)(n.default.GUILD_MEMBER_APPLICATION_REVIEW), R = (0, I.useSelectedGuildJoinRequest)({
    guildId: t
  }), {
    user: N
  } = null != R ? R : {}, A = l.useMemo(() => null != N ? new o.default(N) : null, [N]), M = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]);
  return (0, r.usePageTitle)({
    subsection: _.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
    location: null == M ? void 0 : M.name
  }), l.useEffect(() => {
    E.default.fetchVerificationForm(t)
  }, [t]), (0, a.jsxs)(u.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)("div", {
      className: S.content,
      children: (0, a.jsx)(f.default, {
        guildId: t
      })
    }), null != R && null != M && null != A && (0, a.jsx)("section", {
      className: S.sidebar,
      children: (0, a.jsx)(T.default, {
        guild: M,
        guildJoinRequest: R,
        guildJoinRequestUser: A,
        onClose: () => c.default.setSelectedGuildJoinRequest(t, null)
      })
    })]
  })
}