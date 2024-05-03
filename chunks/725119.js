"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  u = n("470079"),
  a = n("481060"),
  i = n("40851"),
  o = n("906732"),
  r = n("171368"),
  s = n("626135"),
  c = n("981631"),
  d = n("689938");

function f(e, t, n) {
  let f = u.useContext(s.AnalyticsContext),
    {
      analyticsLocations: _
    } = (0, o.default)(),
    E = (0, i.useWindowDispatch)();
  return (0, l.jsx)(a.MenuItem, {
    id: "user-profile",
    label: d.default.Messages.PROFILE,
    action: () => {
      (0, r.openUserProfileModal)({
        userId: e,
        guildId: t,
        channelId: n,
        sourceAnalyticsLocations: _,
        analyticsLocation: f.location
      }), E.dispatch(c.ComponentActions.POPOUT_CLOSE)
    }
  })
}