"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("872717"),
  a = n("794818"),
  l = n("49111"),
  i = e => s.HTTP.get({
    url: l.Endpoints.STICKER_GUILD_DATA(e),
    oldFormErrors: !0
  }).then(e => (null == e ? void 0 : e.body) != null ? (0, a.makeDiscoverableGuild)(e.body) : null).catch(() => null)