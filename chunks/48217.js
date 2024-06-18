"use strict";
t.d(s, {
  c: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(269128),
  a = t(358555),
  r = t(267642),
  o = t(26323),
  c = t(30513),
  d = t(981631),
  u = t(689938),
  E = t(457076);

function _(e) {
  let {
    guild: s,
    banner: t
  } = e;
  return (0, n.jsx)("div", {
    className: E.guildBanner,
    style: {
      backgroundImage: "url(".concat(t)
    },
    children: (0, n.jsxs)("div", {
      className: E.guildHeader,
      children: [(0, n.jsx)(a.Z, {
        guild: s,
        isBannerVisible: !0
      }), (0, n.jsx)(i.Heading, {
        className: E.guildName,
        variant: "heading-md/semibold",
        children: s.toString()
      }), (0, n.jsx)(l.Z, {
        className: E.dropdown,
        open: !1
      })]
    })
  })
}

function I(e) {
  let {
    analyticsLocations: s,
    analyticsLocation: t,
    guild: i,
    isGIF: l,
    banner: a
  } = e, E = l ? (0, r._p)(d.oNc.ANIMATED_BANNER) : (0, r._p)(d.oNc.BANNER);
  null != E && (0, o.Z)({
    analyticsLocations: s,
    analyticsSourceLocation: t,
    guild: i,
    headerProps: {
      title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
      subtitle: function(e, s) {
        let t = (0, r.nW)(e);
        return s ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
          targetLevelOrPlan: t
        }) : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
          targetLevelOrPlan: t
        })
      }(E, l),
      image: (0, n.jsx)(_, {
        guild: i,
        banner: a
      })
    },
    perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
    perks: l ? (0, c.zC)() : (0, c.XO)()
  })
}