t.d(n, {
  F: function() {
return u;
  }
});
var i = t(925549),
  l = t(475468),
  o = t(19780),
  E = t(944486),
  r = t(981631);
let u = {
  binds: ['mod+alt+left'],
  comboKeysBindGlobal: !0,
  action() {
var e;
if (!o.Z.isConnected())
  return !1;
let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : r.ME,
  t = E.Z.getChannelId(n);
return (0, l.K)(n, t), i.Z.channelListScrollTo(n, o.Z.getChannelId()), !1;
  }
};