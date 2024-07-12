i.d(n, {
  a: function() {
return _;
  },
  h: function() {
return u;
  }
}), i(789020);
var t = i(470079),
  o = i(442837),
  a = i(430198),
  c = i(592125),
  r = i(630388),
  l = i(981631);
let s = l.iLy.CROSSPOSTED | l.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | l.iLy.GUILD_FEED_HIDDEN | l.iLy.HAS_SNAPSHOT | l.iLy.HAS_THREAD | l.iLy.IS_CROSSPOST | l.iLy.IS_VOICE_MESSAGE | l.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | l.iLy.SUPPRESS_EMBEDS | l.iLy.SUPPRESS_NOTIFICATIONS | l.iLy.URGENT;

function d(e) {
  return e.state !== l.yb.SEND_FAILED && !!l.V$x.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, r.Ge)(e.flags, s) && !0;
}

function u(e) {
  var n;
  if (!d(e))
return !1;
  let i = null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
  return !(null != i && a.Z.isChannelGated(i, e.channel_id)) && !0;
}

function _(e) {
  let n = (0, o.e7)([
a.Z,
c.Z
  ], () => {
var n;
if (null == e)
  return !1;
let i = null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
return null != i && a.Z.isChannelGated(i, e.channel_id);
  });
  return t.useMemo(() => null != e && d(e), [e]) && !n;
}