"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  o = n("77078"),
  u = n("102985"),
  a = n("79798"),
  c = n("754474"),
  d = n("158998"),
  f = n("782340"),
  h = n("168540");

function v(e) {
  if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return c.BotTypes.AI;
  if (e.bot) return c.BotTypes.BOT;
  return null
}
let m = e => {
  let {
    primary: t,
    secondary: n,
    botType: r,
    botVerified: s,
    discriminatorClass: u,
    className: c,
    usernameClass: d,
    color: v,
    botClass: m,
    showStreamerModeTooltip: C
  } = e;
  return (0, i.jsxs)("div", {
    className: l(h.info, c),
    children: [(0, i.jsx)(o.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: C,
      "aria-label": !!C && void 0,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: l(h.username, d),
        style: null != v ? {
          color: v
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: l(h.infoSpacing, u),
      children: n
    }) : void 0, null != r && (0, i.jsx)(a.default, {
      type: r,
      className: l(h.infoSpacing, m),
      verified: s
    })]
  })
};
var C = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: r,
    forceUsername: l,
    showAccountIdentifier: o,
    overrideDiscriminator: a,
    forcePomelo: f,
    ...h
  } = e, C = (0, s.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = C || t || n.isNonUserBot(), g = n.toString(), p = d.default.getName(n), S = l ? g : null != r ? r : p, _ = n.isPomelo() || f;
  if (_ || S !== g) {
    let e = S === g && _ && l ? d.default.getUserTag(n, {
        forcePomelo: f
      }) : S,
      t = o && e !== "@".concat(g) ? d.default.getUserTag(n) : void 0;
    return (0, i.jsx)(m, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: v(n),
      showStreamerModeTooltip: C && e !== p,
      ...h
    })
  }
  return (0, i.jsx)(c.default, {
    name: S,
    botType: v(n),
    botVerified: n.isVerifiedBot(),
    discriminator: E || S !== g ? null : null != a ? a : n.discriminator,
    ...h
  })
}