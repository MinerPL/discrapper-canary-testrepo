"use strict";
i.r(t), i.d(t, {
  openGuildBannerUpsellModal: function() {
    return _
  }
});
var l = i("735250");
i("470079");
var a = i("481060"),
  s = i("269128"),
  n = i("358555"),
  o = i("267642"),
  r = i("26323"),
  u = i("30513"),
  d = i("981631"),
  c = i("689938"),
  f = i("66438");

function E(e) {
  let {
    guild: t,
    banner: i
  } = e;
  return (0, l.jsx)("div", {
    className: f.guildBanner,
    style: {
      backgroundImage: "url(".concat(i)
    },
    children: (0, l.jsxs)("div", {
      className: f.guildHeader,
      children: [(0, l.jsx)(n.default, {
        guild: t,
        isBannerVisible: !0
      }), (0, l.jsx)(a.Heading, {
        className: f.guildName,
        variant: "heading-md/semibold",
        children: t.toString()
      }), (0, l.jsx)(s.default, {
        className: f.dropdown,
        open: !1
      })]
    })
  })
}

function _(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: i,
    guild: a,
    isGIF: s,
    banner: n
  } = e, f = s ? (0, o.minimumRequiredTierForGuildFeature)(d.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(d.GuildFeatures.BANNER);
  null != f && (0, r.default)({
    analyticsLocations: t,
    analyticsSourceLocation: i,
    guild: a,
    headerProps: {
      title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
      subtitle: function(e, t) {
        let i = (0, o.getTierName)(e);
        return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
          targetLevelOrPlan: i
        }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
          targetLevelOrPlan: i
        })
      }(f, s),
      image: (0, l.jsx)(E, {
        guild: a,
        banner: n
      })
    },
    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
    perks: s ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
  })
}