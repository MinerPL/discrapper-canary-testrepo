"use strict";
n.r(t), n.d(t, {
  markContentAsDismissed: function() {
    return h
  },
  useIsContentDismissed: function() {
    return E
  }
});
var a = n("442837"),
  s = n("524437"),
  l = n("675478"),
  i = n("581883"),
  r = n("626135"),
  o = n("915486"),
  u = n("981631"),
  d = n("921944"),
  c = n("526761");

function f(e, t) {
  let n = i.default.getDismissedGuildContent(t);
  return null != n && (0, o.hasBit)(n, e)
}

function E(e, t) {
  return (0, a.useStateFromStores)([i.default], () => f(e, t))
}

function h(e, t, n, a) {
  (0, l.updateUserGuildSettings)(t, n => {
    if (f(e, t)) return !1;
    n.dismissedGuildContent = (0, o.addBit)(n.dismissedGuildContent, e)
  }, c.UserSettingsDelay.INFREQUENT_USER_ACTION), n && r.default.track(u.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
    type: s.DismissibleGuildContent[e],
    guild_id: t,
    action: null != a ? a : d.ContentDismissActionType.UNKNOWN
  })
}