"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("470079"),
  l = n("876215"),
  s = n("442837"),
  i = n("146282"),
  r = n("219634"),
  o = n("520951"),
  u = n("897674"),
  d = n("206583");
let c = new Set([l.ContentInventoryEntryType.PLAYED_GAME, l.ContentInventoryEntryType.WATCHED_MEDIA, l.ContentInventoryEntryType.TOP_GAME, l.ContentInventoryEntryType.TOP_ARTIST, l.ContentInventoryEntryType.LISTENED_SESSION]);

function f(e) {
  let t = (0, u.default)(d.ContentInventoryFeedKey.GLOBAL_FEED);
  t = (0, r.default)({
    entries: t,
    channelId: e
  }), t = a.useMemo(() => null == t ? void 0 : t.filter(e => c.has(e.content_type)), [t]);
  let {
    entries: n,
    filteredIds: l
  } = (0, o.default)(t);
  return t = n, {
    requestId: (0, s.useStateFromStores)([i.default], () => i.default.getFeedRequestId(d.ContentInventoryFeedKey.GLOBAL_FEED)),
    entries: t,
    impressionCappedEntryIds: l
  }
}