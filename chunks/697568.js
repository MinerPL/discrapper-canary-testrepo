"use strict";
n.r(t);
var s = n("544891"),
  a = n("900849"),
  l = n("981631");
t.default = e => s.HTTP.get({
  url: l.Endpoints.STICKER_GUILD_DATA(e),
  oldFormErrors: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, a.makeDiscoverableGuild)(e.body) : null).catch(() => null)