i.d(n, {
  Z: function() {
return c;
  }
});
var l = i(442837),
  t = i(431328),
  a = i(501655),
  r = i(427679),
  s = i(592125),
  o = i(430824);

function c(e) {
  let {
id: n,
data: {
  guild: i,
  instance: c,
  speakers: u,
  participantCount: d
},
context: E
  } = e, g = (0, l.e7)([
o.Z,
s.Z
  ], () => {
var e;
return o.Z.getGuild(null === (e = s.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId());
  }, [n]), h = (0, l.e7)([r.Z], () => r.Z.getStageInstanceByChannel(n), [n]), v = (0, t.w8)(n, a.pV.SPEAKER), Z = (0, t.Rk)(n), C = null != h ? v : u, m = (null != h ? Z : d) - C.length;
  return {
channelId: n,
guild: null != g ? g : i,
stage: null != h ? h : c,
speakers: C,
audienceCount: m,
context: E
  };
}