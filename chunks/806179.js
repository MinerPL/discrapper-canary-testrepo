"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983"),
  u = l("884691"),
  i = l("77078"),
  o = l("244201"),
  r = l("685665"),
  a = l("401642"),
  d = l("599110"),
  s = l("49111"),
  c = l("782340");

function f(e, t, l) {
  let f = u.useContext(d.AnalyticsContext),
    {
      analyticsLocations: M
    } = (0, r.default)(),
    O = (0, o.useWindowDispatch)();
  return (0, n.jsx)(i.MenuItem, {
    id: "user-profile",
    label: c.default.Messages.PROFILE,
    action: () => {
      (0, a.openUserProfileModal)({
        userId: e,
        guildId: null != t ? t : void 0,
        channelId: null != l ? l : void 0,
        sourceAnalyticsLocations: M,
        analyticsLocation: f.location
      }), O.dispatch(s.ComponentActions.POPOUT_CLOSE)
    }
  })
}