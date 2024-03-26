"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  o = n("446674"),
  a = n("77078"),
  l = n("102985"),
  u = n("79798"),
  d = n("754474"),
  c = n("158998"),
  f = n("782340"),
  E = n("168540");

function h(e) {
  if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return d.BotTypes.AI;
  if (e.bot) return d.BotTypes.BOT;
  return null
}
let _ = e => {
  let {
    primary: t,
    secondary: n,
    botType: i,
    botVerified: o,
    discriminatorClass: l,
    className: d,
    usernameClass: c,
    color: h,
    botClass: _,
    showStreamerModeTooltip: p
  } = e;
  return (0, r.jsxs)("div", {
    className: s(E.info, d),
    children: [(0, r.jsx)(a.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: p,
      "aria-label": !!p && void 0,
      children: e => (0, r.jsx)("span", {
        ...e,
        className: s(E.username, c),
        style: null != h ? {
          color: h
        } : void 0,
        children: t
      })
    }), null != n ? (0, r.jsx)("span", {
      className: s(E.infoSpacing, l),
      children: n
    }) : void 0, null != i && (0, r.jsx)(u.default, {
      type: i,
      className: s(E.infoSpacing, _),
      verified: o
    })]
  })
};
var p = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: i,
    forceUsername: s,
    showAccountIdentifier: a,
    overrideDiscriminator: u,
    forcePomelo: f,
    ...E
  } = e, p = (0, o.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), C = p || t || n.isNonUserBot(), v = n.toString(), S = c.default.getName(n), m = s ? v : null != i ? i : S, R = n.isPomelo() || f;
  if (R || m !== v) {
    let e = m === v && R && s ? c.default.getUserTag(n, {
        forcePomelo: f
      }) : m,
      t = a && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
    return (0, r.jsx)(_, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: h(n),
      showStreamerModeTooltip: p && e !== S,
      ...E
    })
  }
  return (0, r.jsx)(d.default, {
    name: m,
    botType: h(n),
    botVerified: n.isVerifiedBot(),
    discriminator: C || m !== v ? null : null != u ? u : n.discriminator,
    ...E
  })
}