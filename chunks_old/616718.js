"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("582415"),
  l = n("387111"),
  s = n("782340");

function i(e, t, n) {
  let i = (0, a.useGetStreamApplication)(n),
    r = l.default.getName(e.getGuildId(), e.id, t);
  return null == n ? r : (null == i ? void 0 : i.name) != null ? s.default.Messages.GO_LIVE_USER_PLAYING.format({
    applicationName: null == i ? void 0 : i.name,
    username: r
  }) : s.default.Messages.GO_LIVE_TILE_SCREEN.format({
    username: r
  })
}