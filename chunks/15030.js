"use strict";
t.d(s, {
  Z: function() {
    return h
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(704215),
  r = t(481060),
  o = t(725803),
  c = t(605236),
  d = t(999382),
  u = t(614342),
  E = t(303737),
  _ = t(618748),
  I = t(500395),
  T = t(975464),
  N = t(981631),
  m = t(674563),
  S = t(969457);

function h() {
  let e;
  let s = (0, l.e7)([d.Z], () => d.Z.getGuild()),
    {
      application: t,
      loading: h
    } = (0, o.Z)(null == s ? void 0 : s.id, m.wW.GUILD_ROLE_SUBSCRIPTIONS),
    g = i.useRef(null),
    x = (0, u.Z)(null != s ? s : void 0);
  i.useEffect(() => {
    null != s && (0, E.sO)(s) && (0, c.EW)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [s]);
  let C = (null == s ? void 0 : s.hasFeature(N.oNc.CREATOR_MONETIZABLE)) === !1 && (null == s ? void 0 : s.hasFeature(N.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
  return e = null == s || h ? (0, n.jsx)(r.Spinner, {}) : null != x ? (0, n.jsx)(I.Z, {
    guild: s,
    config: x
  }) : C ? (0, n.jsx)(T.Z, {
    guild: s
  }) : (0, n.jsx)(_.Z, {
    guild: s,
    application: t
  }), (0, n.jsx)("div", {
    className: S.settingsColumn,
    children: (0, n.jsx)("div", {
      className: S.settingsContainer,
      children: (0, n.jsx)(r.ScrollerAuto, {
        className: S.settingsScroller,
        children: (0, n.jsx)("main", {
          ref: g,
          className: S.settingsContent,
          children: (0, n.jsx)(r.FocusRingScope, {
            containerRef: g,
            children: e
          })
        })
      })
    })
  })
}