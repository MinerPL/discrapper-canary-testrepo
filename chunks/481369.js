"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("399606"),
  l = n("317381"),
  s = n("917107"),
  i = n("592125"),
  r = n("226027"),
  o = n("918559");
let u = "no_text_activity",
  d = {
    [u]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES],
    [o.ActivityPanelModes.DISCONNECTED]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES],
    [o.ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES],
    [o.ActivityPanelModes.PANEL]: [],
    [o.ActivityPanelModes.PIP]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES]
  };

function c() {
  let e = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentEmbeddedActivity()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getActivityPanelMode());
  return void 0 === e || (0, s.default)(null == e ? void 0 : e.channelId, i.default) ? d[u] : d[t]
}