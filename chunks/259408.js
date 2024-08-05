a.d(s, {
  Z: function() {
return u;
  }
});
var r = a(544891),
  t = a(933557),
  n = a(430824),
  d = a(131951),
  c = a(699516),
  o = a(594174),
  i = a(927923),
  l = a(981631),
  f = a(689938);

function u(e, s) {
  var a;
  let {
nonce: u,
forQRCode: m
  } = s, x = e.getGuildId(), _ = n.Z.getGuild(x), N = (0, i.Lc)({
guildId: null != x ? x : l.aIL,
channelId: e.id,
channelName: (0, t.F6)(e, o.default, c.Z),
guildName: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : f.Z.Messages.UNNAMED,
muted: d.Z.isSelfMute(),
deafened: d.Z.isSelfDeaf(),
nonce: u
  });
  return m ? ''.concat((0, r.K0)()).concat(l.ANM.XBOX_HANDOFF, '?').concat(N.toString()) : ''.concat(i.bJ, '?').concat(N.toString());
}