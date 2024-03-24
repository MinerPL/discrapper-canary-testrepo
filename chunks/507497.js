"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var s = i("37983");
i("884691");
var n = i("446674"),
  l = i("77078"),
  r = i("685665"),
  o = i("836275"),
  a = i("379532"),
  u = i("305961"),
  c = i("162771"),
  d = i("118503"),
  f = i("49111"),
  h = i("944305"),
  v = i("782340"),
  p = i("78935");

function g(e) {
  let {
    analyticsSection: t,
    analyticsPage: i,
    isGIF: g,
    banner: m
  } = e, C = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId()), I = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(C)), {
    analyticsLocations: N
  } = (0, r.default)();
  return null == I || I.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !g && I.hasFeature(f.GuildFeatures.BANNER) ? null : (0, s.jsxs)("div", {
    className: p.container,
    children: [(0, s.jsx)(d.default, {
      className: p.guildBoostingIcon
    }), (0, s.jsx)(l.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: v.default.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, s.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      className: p.subscribeButton,
      onClick: () => {
        if (null == I) return;
        let e = {
          section: t,
          page: i,
          object: f.AnalyticsObjects.UPSELL_HEADER
        };
        null != m ? (0, o.openGuildBannerUpsellModal)({
          analyticsLocations: N,
          analyticsLocation: e,
          guild: I,
          isGIF: g,
          banner: m
        }) : (0, a.default)({
          analyticsLocations: N,
          analyticsSourceLocation: e,
          guild: I,
          perks: g ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
        })
      },
      children: v.default.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}