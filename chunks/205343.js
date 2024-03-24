"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("901803"),
  l = n("446674"),
  s = n("265596"),
  i = n("897163"),
  r = n("189819"),
  u = n("709377");
let o = new Set([a.ContentInventoryEntryType.PLAYED_GAME, a.ContentInventoryEntryType.WATCHED_MEDIA]);

function d(e) {
  let t = (0, r.default)(u.ContentInventoryFeedKey.GLOBAL_FEED);
  t = null == (t = (0, i.default)({
    entries: t,
    channelId: e
  })) ? void 0 : t.filter(e => o.has(e.content_type));
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getFeedRequestId(u.ContentInventoryFeedKey.GLOBAL_FEED));
  return {
    requestId: n,
    entries: t
  }
}