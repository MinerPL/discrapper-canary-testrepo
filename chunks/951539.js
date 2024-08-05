t.d(n, {
  ZP: function() {
return f;
  },
  so: function() {
return h;
  },
  wg: function() {
return v;
  }
}), t(47120);
var i = t(442837),
  a = t(159300),
  l = t(427679),
  r = t(592125),
  o = t(984933),
  c = t(430824),
  s = t(496675),
  d = t(700785),
  u = t(924301),
  _ = t(765305),
  g = t(981631);

function v(e) {
  var n;
  let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z];
  let {
entityType: i,
channelId: a
  } = 'entity_type' in (n = e) ? {
entityType: n.entity_type,
channelId: n.channel_id
  } : n;
  if (i === _.WX.EXTERNAL)
return !0;
  let l = t.getChannel(a);
  return null != l && d.Uu(g.Plq.VIEW_CHANNEL, l);
}

function h(e) {
  let [n, t, i, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
o.ZP,
r.Z,
c.Z,
l.Z
  ];
  if ((0, u.Z2)(e))
return !1;
  let {
guild_id: g,
channel_id: h
  } = e, f = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(h), I = i.getGuild(g), m = d.getStageInstanceByChannel(h);
  return !!(0, a.b)(s.Z, I, f, m) && null != f && v(e, [t]);
}

function f(e) {
  return (0, i.e7)([
o.ZP,
r.Z,
c.Z,
l.Z
  ], () => h(e, [
o.ZP,
r.Z,
c.Z,
l.Z
  ]), [e]);
}