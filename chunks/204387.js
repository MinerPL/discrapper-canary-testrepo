"use strict";
t.r(s), t.d(s, {
  Steps: function() {
    return a
  }
}), t("47120");
var a, r, l = t("735250"),
  i = t("470079"),
  n = t("481060"),
  C = t("100527"),
  o = t("906732"),
  d = t("626135"),
  c = t("281494"),
  u = t("687555"),
  f = t("596583"),
  x = t("981631");
(r = a || (a = {}))[r.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", r[r.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: a,
      sourceAnalyticsLocations: r
    } = e,
    [p, h] = i.useState(1),
    [_, R] = i.useState(new Set),
    {
      analyticsLocations: j
    } = (0, o.default)([...r, C.default.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (p) {
    case 1:
      s = (0, l.jsx)(u.default, {
        onShare: async e => {
          try {
            d.default.track(x.AnalyticEvents.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: j
            }), await (0, c.createReferralTrials)(e.map(e => e.id)), h(2), R(new Set(e))
          } catch {}
        },
        onClose: a
      });
      break;
    case 2:
      s = (0, l.jsx)(f.default, {
        selectedUsers: _,
        onClose: a
      });
      break;
    default:
      a()
  }
  return (0, l.jsx)(n.ModalRoot, {
    transitionState: t,
    children: s
  })
}