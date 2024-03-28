"use strict";
n.r(t), n.d(t, {
  getOverlayKeybind: function() {
    return u
  },
  makeAnalyticsTrackers: function() {
    return d
  }
});
var i = n("13245"),
  a = n("556296"),
  l = n("237997"),
  s = n("13140"),
  o = n("981631"),
  r = n("987650");

function d(e, t) {
  return {
    trackView() {
      i.default.track(o.AnalyticEvents.NOTIFICATION_VIEWED, t), i.default.notificationEvent(e, r.OverlayNotificationAction.Viewed)
    },
    trackClick(n) {
      let a = l.default.isInstanceUILocked() ? o.AnalyticsLocations.LOCKED_OVERLAY : o.AnalyticsLocations.UNLOCKED_OVERLAY;
      i.default.track(o.AnalyticEvents.NOTIFICATION_CLICKED, {
        ...t,
        location: a,
        action_type: n
      }), i.default.notificationEvent(e, r.OverlayNotificationAction.Clicked)
    }
  }
}

function u() {
  let e = a.default.getOverlayKeybind();
  return null != e ? (0, s.toString)(e.shortcut, !0).split(" + ") : ["???"]
}