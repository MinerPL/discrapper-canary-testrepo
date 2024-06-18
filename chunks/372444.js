"use strict";
t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(100527),
  o = t(906732),
  c = t(678558),
  d = t(689938),
  u = t(517673);
let E = e => {
  let {
    guild: s,
    analyticsLocation: t,
    className: i,
    buttonProps: l = {
      color: a.ButtonColors.BRAND_INVERTED,
      text: d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_BUTTON
    }
  } = e, {
    color: r,
    text: o
  } = l, u = s.premiumTier + 1;
  return (0, n.jsx)(c.Z, {
    color: r,
    analyticsLocation: t,
    guild: s,
    buttonText: o,
    targetBoostedGuildTier: u,
    className: i
  })
};

function _(e) {
  let {
    header: s,
    text: i,
    analyticsLocation: c,
    guild: d,
    className: _,
    textColor: I,
    headerColor: T,
    buttonProps: N
  } = e, {
    analyticsLocations: m
  } = (0, o.ZP)(r.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, n.jsx)(o.Gt, {
    value: m,
    children: (0, n.jsxs)("div", {
      className: l()(u.banner, _),
      children: [(0, n.jsx)("img", {
        className: u.__invalid_headerGraphic,
        alt: "",
        src: t(322393)
      }), (0, n.jsxs)("div", {
        className: u.content,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: null != T ? T : "always-white",
          className: u.header,
          children: s
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: null != I ? I : "always-white",
          children: i
        })]
      }), (0, n.jsx)("div", {
        className: u.ctaContainer,
        children: (0, n.jsx)(E, {
          guild: d,
          analyticsLocation: c,
          className: u.button,
          buttonProps: N
        })
      })]
    })
  })
}