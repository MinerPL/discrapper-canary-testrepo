"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("454902"),
  a = n("768581"),
  l = n("312839"),
  s = n("981631"),
  o = n("987650"),
  r = n("689938");

function d(e, t) {
  let n = e.username,
    d = r.default.Messages.USER_ACTIVITY_USER_JOIN.format({
      username: ""
    }),
    u = (0, a.getUserAvatarURL)(e),
    {
      trackView: c,
      trackClick: f
    } = (0, l.makeAnalyticsTrackers)(o.OverlayNotificationType.ActivityUserJoin, {
      notif_type: o.OverlayNotificationType.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: s.ActivityActionTypes.JOIN,
      activity_name: t.name
    });
  return {
    colorScheme: i.default.ColorSchemes.PRIMARY,
    icon: u,
    title: n,
    body: d,
    hint: e => (0, i.renderSubtleHint)(e, r.default.Messages.USER_ACTIVITY_USER_JOIN_HINT),
    onNotificationShow: () => {
      c()
    },
    onDismissClick: () => {
      f("dismiss")
    }
  }
}