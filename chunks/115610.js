n.d(t, {
  O: function() {
return h;
  }
}), n(536091);
var i = n(904245),
  a = n(339085),
  s = n(957730),
  r = n(285651),
  l = n(268350),
  o = n(926491),
  c = n(373228),
  u = n(430824),
  d = n(594174),
  _ = n(176354),
  E = n(709054),
  I = n(981631),
  m = n(185923);

function T(e) {
  let t = u.Z.getGuild(e);
  return null != t && (t.nsfwLevel === I.V_K.DEFAULT || t.nsfwLevel === I.V_K.SAFE);
}
async function h(e, t) {
  var n, I, h;
  let N = t.getGuildId();
  if (null == N || null == u.Z.getGuild(N))
return;
  let f = d.default.getCurrentUser();
  if (null == f)
return;
  await (0, l.$p)();
  let C = Array.from(o.Z.getAllStickersIterator()),
p = C.filter(e => e.type === c.n0.GUILD).filter(e => T(e.guild_id) && (0, r.kl)(e, f, t)).sort((e, t) => -E.default.compare(e.id, t.id));
  if (p.length > 5) {
let a = [p[Math.floor(Math.pow(Math.random(), 2) * p.length)].id];
i.Z.sendStickers(t.id, a, '', {
  messageReference: {
    guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
    channel_id: t.id,
    message_id: e
  }
});
return;
  }
  let g = u.Z.getGuildIds().filter(T).map(e => a.ZP.getUsableGuildEmoji(e)).flat().filter(e => null == _.ZP.getEmojiUnavailableReason({
emoji: e,
channel: t,
guildId: N,
intention: m.Hz.CHAT
  })).sort((e, t) => -E.default.compare(e.id, t.id));
  if (g.length > 10) {
let n = g[Math.floor(Math.pow(Math.random(), 2) * g.length)];
i.Z.sendMessage(t.id, s.ZP.parse(t, n.allNamesString), !1, {
  messageReference: {
    guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
    channel_id: t.id,
    message_id: e
  }
});
return;
  }
  let S = C.filter(e => e.type === c.n0.STANDARD),
A = [S[Math.floor(Math.random() * S.length)].id];
  i.Z.sendStickers(t.id, A, '', {
messageReference: {
  guild_id: null !== (h = t.getGuildId()) && void 0 !== h ? h : void 0,
  channel_id: t.id,
  message_id: e
}
  });
}