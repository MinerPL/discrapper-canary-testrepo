"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  n = s("812204"),
  r = s("685665"),
  u = s("69927"),
  o = s("766274"),
  d = s("305961"),
  c = s("549103"),
  E = s("50926"),
  I = s("122766"),
  f = s("117370"),
  T = s("276566"),
  R = s("782340"),
  S = s("652059"),
  _ = function(e) {
    let {
      guildId: t
    } = e, {
      AnalyticsLocationProvider: s
    } = (0, r.default)(n.default.GUILD_MEMBER_APPLICATION_REVIEW), _ = (0, I.useSelectedGuildJoinRequest)({
      guildId: t
    }), {
      user: m
    } = null != _ ? _ : {}, N = l.useMemo(() => null != m ? new o.default(m) : null, [m]), M = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]);
    return (0, u.usePageTitle)({
      subsection: R.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
      location: null == M ? void 0 : M.name
    }), l.useEffect(() => {
      E.default.fetchVerificationForm(t)
    }, [t]), (0, a.jsxs)(s, {
      children: [(0, a.jsx)("div", {
        className: S.content,
        children: (0, a.jsx)(f.default, {
          guildId: t
        })
      }), null != _ && null != M && null != N && (0, a.jsx)("section", {
        className: S.sidebar,
        children: (0, a.jsx)(T.default, {
          guild: M,
          guildJoinRequest: _,
          guildJoinRequestUser: N,
          onClose: () => c.default.setSelectedGuildJoinRequest(t, null)
        })
      })]
    })
  }