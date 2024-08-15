n.d(i, {
  Z: function() {
return T;
  }
});
var o = n(735250);
n(470079);
var t = n(442837),
  r = n(481060),
  a = n(906732),
  l = n(48217),
  s = n(26323),
  c = n(430824),
  d = n(914010),
  u = n(709586),
  _ = n(981631),
  g = n(30513),
  E = n(689938),
  f = n(715183);

function T(e) {
  let {
analyticsSection: i,
analyticsPage: n,
isGIF: T,
banner: N
  } = e, I = (0, t.e7)([d.Z], () => d.Z.getGuildId()), h = (0, t.e7)([c.Z], () => c.Z.getGuild(I)), {
analyticsLocations: p
  } = (0, a.ZP)();
  return null == h || h.hasFeature(_.oNc.ANIMATED_BANNER) || !T && h.hasFeature(_.oNc.BANNER) ? null : (0, o.jsxs)('div', {
className: f.container,
children: [
  (0, o.jsx)(u.Z, {
    className: f.guildBoostingIcon
  }),
  (0, o.jsx)(r.Text, {
    color: 'header-primary',
    variant: 'text-sm/semibold',
    children: E.Z.Messages.PREMIUM_GUILD_PREVIEW
  }),
  (0, o.jsx)(r.Button, {
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    className: f.subscribeButton,
    onClick: () => {
      if (null == h)
        return;
      let e = {
        section: i,
        page: n,
        object: _.qAy.UPSELL_HEADER
      };
      null != N ? (0, l.c)({
        analyticsLocations: p,
        analyticsLocation: e,
        guild: h,
        isGIF: T,
        banner: N
      }) : (0, s.Z)({
        analyticsLocations: p,
        analyticsSourceLocation: e,
        guild: h,
        perks: T ? (0, g.zC)() : (0, g.XO)()
      });
    },
    children: E.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
  })
]
  });
}