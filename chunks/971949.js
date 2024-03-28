"use strict";
t.r(a), t.d(a, {
  default: function() {
    return U
  }
});
var s = t("735250");
t("470079");
var _ = t("692547"),
  n = t("481060"),
  L = t("906732"),
  r = t("26290"),
  o = t("98278"),
  l = t("790527"),
  u = t("474936"),
  i = t("981631"),
  c = t("689938"),
  d = t("63954"),
  A = t("620118"),
  M = t("483569");

function f(e, a) {
  return (0, s.jsx)(r.TextBadge, {
    text: e,
    className: A.newBadge,
    color: _.default.unsafe_rawColors.BRAND_500.css
  }, a)
}

function U(e) {
  var a;
  let {
    guildCount: t,
    onClose: _,
    analyticsLocations: r,
    ...A
  } = e;
  let U = (a = _, function(e, t) {
      return (0, s.jsx)(n.Clickable, {
        className: d.learnMoreLink,
        tag: "span",
        onClick: () => {
          a(), (0, o.navigateToPremiumMarketingPage)()
        },
        children: e
      }, t)
    }),
    {
      analyticsLocations: D
    } = (0, L.default)(r);
  return (0, s.jsx)(L.AnalyticsLocationProvider, {
    value: D,
    children: (0, s.jsx)(l.default, {
      artURL: M,
      onClose: _,
      type: u.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL,
      title: c.default.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
      body: t < i.MAX_USER_GUILDS ? c.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
        guildCount: t,
        onAndMore: U,
        newBadgeHook: f
      }) : c.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
        onAndMore: U,
        newBadgeHook: f
      }),
      context: t < i.MAX_USER_GUILDS ? c.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({
        guildCount: t
      }) : c.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
      glowUp: c.default.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
        onAndMore: U
      }),
      ...A
    })
  })
}