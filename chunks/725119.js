"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("735250"),
  n = a("470079"),
  u = a("481060"),
  d = a("40851"),
  s = a("906732"),
  i = a("171368"),
  o = a("626135"),
  r = a("981631"),
  f = a("689938");

function c(e, t, a) {
  let c = n.useContext(o.AnalyticsContext),
    {
      analyticsLocations: M
    } = (0, s.default)(),
    m = (0, d.useWindowDispatch)();
  return (0, l.jsx)(u.MenuItem, {
    id: "user-profile",
    label: f.default.Messages.PROFILE,
    action: () => {
      (0, i.openUserProfileModal)({
        userId: e,
        guildId: null != t ? t : void 0,
        channelId: null != a ? a : void 0,
        sourceAnalyticsLocations: M,
        analyticsLocation: c.location
      }), m.dispatch(r.ComponentActions.POPOUT_CLOSE)
    }
  })
}