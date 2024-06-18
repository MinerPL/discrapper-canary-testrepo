"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(981729),
  o = n(780384),
  a = n(351773),
  l = n(410030),
  u = n(100527),
  _ = n(906732),
  d = n(790368),
  c = n(704440),
  E = n(147915),
  I = n(632583),
  T = n(626135),
  h = n(981631),
  S = n(474936),
  f = n(689938),
  N = n(838329);
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    referralsRemaining: n,
    channel: A,
    isResending: m
  } = e, {
    enabled: O
  } = d.Z.useExperiment({
    location: "ec41f5_1"
  }, {
    autoTrackExposure: !0
  }), R = O ? f.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : m ? f.Z.Messages.SHARE_NITRO_RESEND_TOOLTIP : f.Z.Messages.SHARE_NITRO_TOOLTIP, C = O ? f.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [p, g] = r.useState(!1), [L, v] = r.useState(!1), D = (0, a.Z)(null, () => v(!1)), {
    analyticsLocations: M
  } = (0, _.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON), P = A.isDM() && void 0 !== A.recipients ? A.recipients[0] : null, y = (0, l.ZP)();
  return t ? null : (0, i.jsxs)("div", {
    ref: D,
    className: N.buttonContainer,
    children: [(0, i.jsx)(c.Z, {
      shouldShowPopout: L,
      referralsRemaining: n,
      channel: A,
      onClose: () => v(!1),
      isResending: m
    }), (0, i.jsx)(s.u, {
      text: R,
      shouldShow: !L,
      "aria-label": null != C ? C : R,
      children: e => (0, i.jsx)("div", {
        onMouseEnter: () => {
          !L && !p && (g(!0), T.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
            location_stack: M,
            step: S.fz.BADGE_TOOLTIP_VIEWED,
            other_user_id: Number(P)
          }))
        },
        onMouseLeave: () => {
          g(!1)
        },
        children: (0, i.jsx)(E.Z, {
          ...e,
          innerClassName: N.button,
          isActive: L,
          "aria-label": null != C ? C : R,
          "aria-haspopup": "dialog",
          onClick: () => {
            v(e => !e), T.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
              location_stack: M,
              step: S.fz.BADGE_CLICKED,
              other_user_id: Number(P)
            })
          },
          children: (0, i.jsx)(I.Z, {
            referralsRemaining: n,
            hovered: p,
            isResending: m,
            shouldShowBirthdayUX: O,
            isLightTheme: (0, o.ap)(y)
          })
        })
      })
    })]
  })
})