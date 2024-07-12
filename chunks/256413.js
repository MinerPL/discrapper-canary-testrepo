n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(442837),
  a = n(931261),
  l = n(9156),
  s = n(398758),
  r = n(981631),
  o = n(176505);

function c(e) {
  var t;
  let n = (0, s.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : r.kod),
c = (0, i.e7)([l.ZP], () => null != e && l.ZP.isChannelRecordOrParentOptedIn(e)),
d = (0, a.g)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : r.kod);
  if (null == e)
return !1;
  let u = d && e.hasFlag(o.zZ.IS_GUILD_RESOURCE_CHANNEL);
  return n && !u && !c && !e.isThread();
}