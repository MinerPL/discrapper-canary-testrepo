"use strict";
var i = n(990547),
  r = n(570140),
  s = n(844889),
  o = n(314897),
  a = n(981631);
(0, i.analyticsTrackingStoreMaker)({
  dispatcher: r.Z,
  actionHandler: {
    CONNECTION_OPEN: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    OVERLAY_INITIALIZE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    CURRENT_USER_UPDATE: e => i.AnalyticsActionHandlers.handleConnectionOpen(e),
    CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
    FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
    TRACK: e => i.AnalyticsActionHandlers.handleTrack(e)
  },
  TRACKING_URL: a.ANM.TRACK,
  waitFor: [o.default],
  getFingerprint: o.default.getFingerprint,
  getSessionId: () => (0, s.Gg)().then(e => ({
    sessionId: null == e ? void 0 : e.uuid
  }))
})