"use strict";
i.r(t), i.d(t, {
  default: function() {
    return N
  }
});
var l = i("735250");
i("470079");
var a = i("442837"),
  s = i("481060"),
  n = i("906732"),
  o = i("48217"),
  r = i("26323"),
  u = i("430824"),
  d = i("914010"),
  c = i("709586"),
  f = i("981631"),
  E = i("30513"),
  _ = i("689938"),
  T = i("267094");

function N(e) {
  let {
    analyticsSection: t,
    analyticsPage: i,
    isGIF: N,
    banner: m
  } = e, p = (0, a.useStateFromStores)([d.default], () => d.default.getGuildId()), I = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(p)), {
    analyticsLocations: g
  } = (0, n.default)();
  return null == I || I.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !N && I.hasFeature(f.GuildFeatures.BANNER) ? null : (0, l.jsxs)("div", {
    className: T.container,
    children: [(0, l.jsx)(c.default, {
      className: T.guildBoostingIcon
    }), (0, l.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: _.default.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, l.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: s.Button.Colors.LINK,
      className: T.subscribeButton,
      onClick: () => {
        if (null == I) return;
        let e = {
          section: t,
          page: i,
          object: f.AnalyticsObjects.UPSELL_HEADER
        };
        null != m ? (0, o.openGuildBannerUpsellModal)({
          analyticsLocations: g,
          analyticsLocation: e,
          guild: I,
          isGIF: N,
          banner: m
        }) : (0, r.default)({
          analyticsLocations: g,
          analyticsSourceLocation: e,
          guild: I,
          perks: N ? (0, E.animatedGuildBannerUpsellPerks)() : (0, E.guildBannerUpsellPerks)()
        })
      },
      children: _.default.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}