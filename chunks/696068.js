a.d(n, {
  F: function() {
return f;
  },
  d: function() {
return x;
  }
}), a(653041), a(47120);
var i = a(442837),
  t = a(592125),
  l = a(324067),
  s = a(430824),
  r = a(496675),
  o = a(944486),
  c = a(979651),
  u = a(938475),
  d = a(823379),
  g = a(374065),
  p = a(981631);

function m(e, n, a, i, t) {
  let l = (0, g.e4)({
channelId: e.id,
ChannelStore: n,
GuildStore: a,
PermissionStore: i,
VoiceStateStore: t
  });
  return e.type === p.d4z.GUILD_VOICE && l === g.jy.CAN_LAUNCH || !1;
}

function x(e) {
  var n, a, i;
  let {
guildId: g,
allowGdmActivityChannelSuggestion: p = !1
  } = e;
  if (null == g && !p)
return null;
  let x = o.Z.getVoiceChannelId(),
v = t.Z.getChannel(x);
  if (null != v && (null != v.guild_id || p))
return v.id;
  let f = [];
  for (let e of Object.values(l.Z.getCategories(g)))
for (let n of e)
  m(n.channel, t.Z, s.Z, r.Z, c.Z) && f.push({
    channel: n.channel,
    users: u.ZP.getVoiceStatesForChannel(n.channel).filter(d.lm)
  });
  return null !== (i = null === (a = f.sort((e, n) => e.users.length > n.users.length ? -1 : 1)[0]) || void 0 === a ? void 0 : null === (n = a.channel) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null;
}

function v(e, n) {
  if (e.length !== n.length)
return !1;
  for (let a = 0; a < e.length; a++)
if (e[a].value.channel.id !== n[a].value.channel.id)
  return !1;
  return !0;
}

function f(e) {
  return (0, i.e7)([
l.Z,
t.Z,
s.Z,
r.Z,
c.Z,
u.ZP
  ], () => {
if (null == e)
  return [];
let n = [];
return Object.values(l.Z.getCategories(e)).forEach(e => {
  e.forEach(e => {
    let {
      channel: a
    } = e;
    m(a, t.Z, s.Z, r.Z, c.Z) && n.push(a);
  });
}), n.map(e => {
  let n = u.ZP.getVoiceStatesForChannel(e).filter(d.lm);
  return {
    value: {
      channel: e,
      users: n
    },
    label: e.name
  };
}).sort((e, n) => e.value.users.length > n.value.users.length ? -1 : 1);
  }, [e], v);
}