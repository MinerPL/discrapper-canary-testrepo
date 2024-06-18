"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(824385),
  l = n(481060),
  u = n(40851),
  _ = n(906732),
  d = n(78839),
  c = n(267642),
  E = n(879892),
  I = n(981631),
  T = n(689938),
  h = n(658088);
t.Z = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: s,
    buttonText: S,
    targetBoostedGuildTier: f,
    onClose: N = () => {},
    closeLayer: A = () => {},
    pauseAnimation: m = !1,
    applicationId: O,
    handleSubscribeModalClose: R,
    withHighlight: C = !1,
    ...p
  } = e, {
    analyticsLocations: g
  } = (0, _.ZP)(), L = (0, u.bp)() === I.IlC.POPOUT, [v, D] = r.useState(!1), M = null != f ? Math.max((0, c.KK)(s, f), 1) : 1, P = (0, c.aq)(), y = async () => {
    D(!0), await (0, E.u)({
      analyticsLocations: g,
      analyticsLocation: t,
      analyticsSourceLocation: n,
      guild: s,
      numberOfBoostsToAdd: M,
      onClose: N,
      closeLayer: A,
      inPopout: L,
      applicationId: O,
      handleSubscribeModalClose: R
    }), D(!1)
  }, U = d.ZP.getPremiumTypeSubscription(), b = (0, i.jsx)("span", {
    children: null != S ? S : T.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
  });
  return ((null == U ? void 0 : U.isPausedOrPausePending) && (b = (0, i.jsxs)("div", {
    className: h.pausedButton,
    children: [(0, i.jsx)(a.m, {
      className: h.lockIcon,
      width: 16,
      height: 16
    }), " ", b]
  }), p.disabled = !0), null != P) ? (0, i.jsx)(l.Tooltip, {
    text: P,
    "aria-label": !1,
    children: e => (0, i.jsx)(l.ShinyButton, {
      ...e,
      disabled: !0,
      size: l.Button.Sizes.SMALL,
      pauseAnimation: m,
      ...p,
      children: b
    })
  }) : (0, i.jsx)(l.ShinyButton, {
    size: l.Button.Sizes.SMALL,
    ...p,
    className: o()(p.className, {
      [h.buttonHighlighted]: C
    }),
    submitting: v,
    onClick: y,
    pauseAnimation: m,
    children: b
  })
}