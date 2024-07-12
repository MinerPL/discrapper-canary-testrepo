s.d(a, {
  Z: function() {
return u;
  }
});
var r = s(544891),
  t = s(933557),
  n = s(430824),
  d = s(131951),
  c = s(699516),
  o = s(594174),
  i = s(927923),
  l = s(981631),
  f = s(689938);

function u(e, a) {
  var s;
  let {
nonce: u,
forQRCode: m
  } = a, x = e.getGuildId(), _ = n.Z.getGuild(x), N = (0, i.Lc)({
guildId: null != x ? x : l.aIL,
channelId: e.id,
channelName: (0, t.F6)(e, o.default, c.Z),
guildName: null !== (s = null == _ ? void 0 : _.name) && void 0 !== s ? s : f.Z.Messages.UNNAMED,
muted: d.Z.isSelfMute(),
deafened: d.Z.isSelfDeaf(),
nonce: u
  });
  return m ? ''.concat((0, r.K0)()).concat(l.ANM.XBOX_HANDOFF, '?').concat(N.toString()) : ''.concat(i.bJ, '?').concat(N.toString());
}