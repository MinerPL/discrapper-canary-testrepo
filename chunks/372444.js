n.d(t, {
  Z: function() {
return I;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(678558),
  d = n(689938),
  u = n(726930);
let _ = e => {
  let {
guild: t,
analyticsLocation: n,
className: a,
buttonProps: i = {
  color: r.ButtonColors.BRAND_INVERTED,
  text: d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_BUTTON
}
  } = e, {
color: l,
text: o
  } = i, u = t.premiumTier + 1;
  return (0, s.jsx)(c.Z, {
color: l,
analyticsLocation: n,
guild: t,
buttonText: o,
targetBoostedGuildTier: u,
className: a
  });
};

function I(e) {
  let {
header: t,
text: a,
analyticsLocation: c,
guild: d,
className: I,
textColor: E,
headerColor: T,
buttonProps: m
  } = e, {
analyticsLocations: N
  } = (0, o.ZP)(l.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, s.jsx)(o.Gt, {
value: N,
children: (0, s.jsxs)('div', {
  className: i()(u.banner, I),
  children: [
    (0, s.jsx)('img', {
      className: u.__invalid_headerGraphic,
      alt: '',
      src: n(322393)
    }),
    (0, s.jsxs)('div', {
      className: u.content,
      children: [
        (0, s.jsx)(r.Text, {
          variant: 'text-lg/semibold',
          color: null != T ? T : 'always-white',
          className: u.header,
          children: t
        }),
        (0, s.jsx)(r.Text, {
          variant: 'text-sm/normal',
          color: null != E ? E : 'always-white',
          children: a
        })
      ]
    }),
    (0, s.jsx)('div', {
      className: u.ctaContainer,
      children: (0, s.jsx)(_, {
        guild: d,
        analyticsLocation: c,
        className: u.button,
        buttonProps: m
      })
    })
  ]
})
  });
}