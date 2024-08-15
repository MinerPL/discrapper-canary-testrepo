n.d(t, {
  a: function() {
return _;
  },
  h: function() {
return d;
  }
}), n(789020);
var i = n(470079),
  a = n(442837),
  s = n(430198),
  r = n(592125),
  l = n(630388),
  o = n(981631);
let c = o.iLy.CROSSPOSTED | o.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | o.iLy.GUILD_FEED_HIDDEN | o.iLy.HAS_SNAPSHOT | o.iLy.HAS_THREAD | o.iLy.IS_CROSSPOST | o.iLy.IS_VOICE_MESSAGE | o.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | o.iLy.SUPPRESS_EMBEDS | o.iLy.SUPPRESS_NOTIFICATIONS | o.iLy.URGENT;

function u(e) {
  return e.state !== o.yb.SEND_FAILED && !!o.V$x.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, l.Ge)(e.flags, c) && !0;
}

function d(e) {
  var t;
  if (!u(e))
return !1;
  let n = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
  return !(null != n && s.Z.isChannelOrThreadParentGated(n, e.channel_id)) && !0;
}

function _(e) {
  let t = (0, a.e7)([
s.Z,
r.Z
  ], () => {
var t;
if (null == e)
  return !1;
let n = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
return null != n && s.Z.isChannelOrThreadParentGated(n, e.channel_id);
  });
  return i.useMemo(() => null != e && u(e), [e]) && !t;
}