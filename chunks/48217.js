n.d(i, {
  c: function() {
return E;
  }
});
var o = n(735250);
n(470079);
var t = n(481060),
  r = n(269128),
  a = n(358555),
  l = n(267642),
  s = n(26323),
  c = n(30513),
  d = n(981631),
  u = n(689938),
  _ = n(669252);

function g(e) {
  let {
guild: i,
banner: n
  } = e;
  return (0, o.jsx)('div', {
className: _.guildBanner,
style: {
  backgroundImage: 'url('.concat(n)
},
children: (0, o.jsxs)('div', {
  className: _.guildHeader,
  children: [
    (0, o.jsx)(a.Z, {
      guild: i,
      isBannerVisible: !0
    }),
    (0, o.jsx)(t.Heading, {
      className: _.guildName,
      variant: 'heading-md/semibold',
      children: i.toString()
    }),
    (0, o.jsx)(r.Z, {
      className: _.dropdown,
      open: !1
    })
  ]
})
  });
}

function E(e) {
  let {
analyticsLocations: i,
analyticsLocation: n,
guild: t,
isGIF: r,
banner: a
  } = e, _ = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
  null != _ && (0, s.Z)({
analyticsLocations: i,
analyticsSourceLocation: n,
guild: t,
headerProps: {
  title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
  subtitle: function(e, i) {
    let n = (0, l.nW)(e);
    return i ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
      targetLevelOrPlan: n
    }) : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
      targetLevelOrPlan: n
    });
  }(_, r),
  image: (0, o.jsx)(g, {
    guild: t,
    banner: a
  })
},
perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
perks: r ? (0, c.zC)() : (0, c.XO)()
  });
}