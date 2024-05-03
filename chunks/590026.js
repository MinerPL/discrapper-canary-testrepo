"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("876215"),
  l = n("442837"),
  s = n("146282"),
  i = n("219634"),
  r = n("897674"),
  o = n("206583");
let u = new Set([a.ContentInventoryEntryType.PLAYED_GAME, a.ContentInventoryEntryType.WATCHED_MEDIA, a.ContentInventoryEntryType.TOP_GAME]);

function d(e) {
  let t = (0, r.default)(o.ContentInventoryFeedKey.GLOBAL_FEED);
  return t = null == (t = (0, i.default)({
    entries: t,
    channelId: e
  })) ? void 0 : t.filter(e => u.has(e.content_type)), {
    requestId: (0, l.useStateFromStores)([s.default], () => s.default.getFeedRequestId(o.ContentInventoryFeedKey.GLOBAL_FEED)),
    entries: t
  }
}