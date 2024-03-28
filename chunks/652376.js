"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("470079"),
  a = n("442837"),
  s = n("623633"),
  i = n("199902"),
  r = n("19780"),
  o = n("979651");

function u(e) {
  var t;
  let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuildId()),
    u = e.children.map(e => e.id),
    d = null != n && u.includes(n),
    c = !1,
    f = !1,
    h = !1,
    C = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId()),
    p = null === (t = (0, s.default)()) || void 0 === t ? void 0 : t.guild_id,
    m = null != p && u.includes(p),
    g = (0, a.useStateFromStores)([o.default], () => null != C && o.default.hasVideo(C), [C]),
    E = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUserActiveStream());
  return d && (c = !g, f = g, h = null != E && null != E.guildId && u.includes(E.guildId)), l.useMemo(() => ({
    audio: c,
    video: f,
    screenshare: h,
    liveStage: m,
    isCurrentUserConnected: d
  }), [c, f, h, m, d])
}