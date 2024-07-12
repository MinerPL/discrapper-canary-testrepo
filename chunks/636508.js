a.d(n, {
  $: function() {
return c;
  },
  W: function() {
return u;
  }
});
var i = a(470079),
  t = a(442837),
  l = a(592125),
  s = a(944486),
  r = a(914010),
  o = a(771845);

function c() {
  var e;
  let {
allowGdmActivityChannelSuggestion: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
allowGdmActivityChannelSuggestion: !1
  }, a = s.Z.getVoiceChannelId(), i = l.Z.getChannel(a);
  if (null != i && null != i.guild_id)
return i.guild_id;
  if (null == i || !n)
return null !== (e = r.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0];
}

function u() {
  let e = (0, t.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
  return i.useMemo(() => e.map(e => ({
label: e,
value: e
  })), [e]);
}