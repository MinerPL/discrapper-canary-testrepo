n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(687516),
  a = n(5192),
  s = n(689938);

function l(e, t, n) {
  let l = (0, i.Cf)(n),
r = a.ZP.getName(e.getGuildId(), e.id, t);
  return null == n ? r : (null == l ? void 0 : l.name) != null ? s.Z.Messages.GO_LIVE_USER_PLAYING.format({
applicationName: null == l ? void 0 : l.name,
username: r
  }) : s.Z.Messages.GO_LIVE_TILE_SCREEN.format({
username: r
  });
}