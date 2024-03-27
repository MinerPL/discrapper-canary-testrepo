"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("151426"),
  r = s("77078"),
  o = s("986399"),
  d = s("10641"),
  u = s("900938"),
  c = s("490683"),
  E = s("432153"),
  _ = s("505705"),
  I = s("179234"),
  T = s("459662"),
  S = s("49111"),
  f = s("988268"),
  m = s("105680");

function N() {
  let e;
  let t = (0, n.useStateFromStores)([u.default], () => u.default.getGuild()),
    {
      application: s,
      loading: N
    } = (0, o.default)(null == t ? void 0 : t.id, f.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS),
    g = l.useRef(null),
    h = (0, c.default)(null != t ? t : void 0);
  l.useEffect(() => {
    null != t && (0, E.isEligibleForNewBadge)(t) && (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [t]);
  let C = (null == t ? void 0 : t.hasFeature(S.GuildFeatures.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
  return e = null == t || N ? (0, a.jsx)(r.Spinner, {}) : null != h ? (0, a.jsx)(I.default, {
    guild: t,
    config: h
  }) : C ? (0, a.jsx)(T.default, {
    guild: t
  }) : (0, a.jsx)(_.default, {
    guild: t,
    application: s
  }), (0, a.jsx)("div", {
    className: m.settingsColumn,
    children: (0, a.jsx)("div", {
      className: m.settingsContainer,
      children: (0, a.jsx)(r.ScrollerAuto, {
        className: m.settingsScroller,
        children: (0, a.jsx)("main", {
          ref: g,
          className: m.settingsContent,
          children: (0, a.jsx)(r.FocusRingScope, {
            containerRef: g,
            children: e
          })
        })
      })
    })
  })
}