"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(246946),
  u = n(467679),
  _ = n(180828),
  d = n(51144),
  c = n(689938),
  E = n(635889);

function I(e) {
  if (e.isSystemUser()) return _.J.SYSTEM_DM;
  if (e.isClyde()) return _.J.AI;
  if (e.bot) return _.J.BOT;
  return null
}
let T = e => {
  let {
    primary: t,
    secondary: n,
    botType: r,
    botVerified: o,
    discriminatorClass: l,
    className: _,
    usernameClass: d,
    color: I,
    botClass: T,
    showStreamerModeTooltip: h
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(E.info, _),
    children: [(0, i.jsx)(a.Tooltip, {
      text: c.Z.Messages.STREAMER_MODE_ENABLED,
      shouldShow: h,
      "aria-label": !!h && void 0,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: s()(E.__invalid_username, d),
        style: null != I ? {
          color: I
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: s()(E.infoSpacing, l),
      children: n
    }) : void 0, null != r && (0, i.jsx)(u.Z, {
      type: r,
      className: s()(E.infoSpacing, T),
      verified: o
    })]
  })
};
t.Z = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: r,
    forceUsername: s,
    showAccountIdentifier: a,
    overrideDiscriminator: u,
    forcePomelo: c,
    ...E
  } = e, h = (0, o.e7)([l.Z], () => l.Z.hidePersonalInformation), S = h || t || n.isNonUserBot(), f = n.toString(), N = d.ZP.getName(n), A = s ? f : null != r ? r : N, m = n.isPomelo() || c;
  if (m || A !== f) {
    let e = A === f && m && s ? d.ZP.getUserTag(n, {
        forcePomelo: c
      }) : A,
      t = a && e !== "@".concat(f) ? d.ZP.getUserTag(n) : void 0;
    return (0, i.jsx)(T, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: I(n),
      showStreamerModeTooltip: h && e !== N,
      ...E
    })
  }
  return (0, i.jsx)(_.Z, {
    name: A,
    botType: I(n),
    botVerified: n.isVerifiedBot(),
    discriminator: S || A !== f ? null : null != u ? u : n.discriminator,
    ...E
  })
}