"use strict";
n.r(t), n.d(t, {
  useMessageRequestSidebarState: function() {
    return i
  }
});
var a = n("442837"),
  l = n("897473"),
  s = n("433355");

function i() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getSidebarState(s.MESSAGE_REQUESTS_BASE_CHANNEL_ID)),
    t = (null == e ? void 0 : e.type) === l.SidebarType.VIEW_MESSAGE_REQUEST ? e : null,
    n = null == t ? void 0 : t.channelId;
  return {
    channelId: n,
    hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === l.SidebarOpenDetailsType.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
  }
}