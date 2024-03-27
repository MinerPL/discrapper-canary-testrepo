"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  s = n("446674"),
  r = n("77078"),
  o = n("102985"),
  u = n("79798"),
  c = n("754474"),
  d = n("158998"),
  f = n("782340"),
  E = n("168540");

function _(e) {
  if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return c.BotTypes.AI;
  if (e.bot) return c.BotTypes.BOT;
  return null
}
let h = e => {
  let {
    primary: t,
    secondary: n,
    botType: a,
    botVerified: s,
    discriminatorClass: o,
    className: c,
    usernameClass: d,
    color: _,
    botClass: h,
    showStreamerModeTooltip: S
  } = e;
  return (0, i.jsxs)("div", {
    className: l(E.info, c),
    children: [(0, i.jsx)(r.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: S,
      "aria-label": !!S && void 0,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: l(E.username, d),
        style: null != _ ? {
          color: _
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: l(E.infoSpacing, o),
      children: n
    }) : void 0, null != a && (0, i.jsx)(u.default, {
      type: a,
      className: l(E.infoSpacing, h),
      verified: s
    })]
  })
};
var S = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: a,
    forceUsername: l,
    showAccountIdentifier: r,
    overrideDiscriminator: u,
    forcePomelo: f,
    ...E
  } = e, S = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), m = S || t || n.isNonUserBot(), p = n.toString(), v = d.default.getName(n), A = l ? p : null != a ? a : v, C = n.isPomelo() || f;
  if (C || A !== p) {
    let e = A === p && C && l ? d.default.getUserTag(n, {
        forcePomelo: f
      }) : A,
      t = r && e !== "@".concat(p) ? d.default.getUserTag(n) : void 0;
    return (0, i.jsx)(h, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: _(n),
      showStreamerModeTooltip: S && e !== v,
      ...E
    })
  }
  return (0, i.jsx)(c.default, {
    name: A,
    botType: _(n),
    botVerified: n.isVerifiedBot(),
    discriminator: m || A !== p ? null : null != u ? u : n.discriminator,
    ...E
  })
}