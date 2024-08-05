n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(749210),
  s = n(336197),
  a = n(592125),
  r = n(430824),
  l = n(900849),
  o = n(981631);
async function c(e) {
  if (null == e.messageReference)
return;
  let t = e.messageReference.guild_id,
n = e.messageReference.channel_id,
c = a.Z.getChannel(n),
u = !1;
  if (null == c && null != t && null == r.Z.getGuild(t))
try {
  await (0, l.Ub)(t, {
    object: o.qAy.FORWARD_BREADCRUMB
  }, {
    shouldNavigate: !1
  }), u = !0, await (0, i.V)(t), c = a.Z.getChannel(n);
} catch {}
  let d = u ? n : void 0;
  (0, s.Z)(o.Z5c.CHANNEL(t, n, e.messageReference.message_id), {
welcomeModalChannelId: d
  });
}