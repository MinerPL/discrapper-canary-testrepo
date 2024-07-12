n.d(l, {
  HI: function() {
return p;
  },
  _H: function() {
return f;
  },
  af: function() {
return v;
  },
  tx: function() {
return E;
  }
}), n(47120);
var t = n(524846),
  i = n(911969),
  r = n(592125),
  a = n(271383),
  s = n(430824),
  u = n(594174),
  o = n(483360),
  d = n(823379),
  c = n(5192),
  m = n(280501);
n(892902);
let p = 1000;

function f(e, l, n) {
  let t = r.Z.getChannel(n);
  if (null == t)
return [];
  let a = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
s = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
{
  users: u,
  roles: d
} = o.ZP.queryMentionResults({
  query: l,
  channel: t,
  canMentionEveryone: !1,
  canMentionHere: !1,
  canMentionUsers: a,
  canMentionRoles: s,
  includeAllGuildUsers: !0,
  includeNonMentionableRoles: !0,
  checkRecentlyTalkedOnEmptyQuery: !1,
  limit: 15
}),
p = u.map(e => {
  var l;
  let i = c.ZP.getNickname(t.getGuildId(), n, e.user);
  return {
    type: m.tM.USER,
    value: e.user.id,
    label: null !== (l = null != i ? i : e.user.globalName) && void 0 !== l ? l : e.user.username
  };
});
  return [
...p,
...d.map(e => ({
  type: m.tM.ROLE,
  value: e.id,
  label: e.name
}))
  ];
}

function v(e, l, n) {
  let t = r.Z.getChannel(l);
  return null == t ? [] : o.ZP.queryApplicationCommandChannelResults({
query: e,
channel: t,
channelTypes: n,
limit: 15
  }).channels.map(e => ({
type: m.tM.CHANNEL,
value: e.id,
label: e.name
  }));
}

function E(e, l) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e)
return;
  let i = s.Z.getGuild(l);
  return e.map(e => {
switch (e.type) {
  case t.$.USER: {
    var l;
    let n = u.default.getUser(e.id);
    if (null == n)
      return null;
    let t = null != i ? a.ZP.getNick(i.id, n.id) : void 0;
    return {
      type: m.tM.USER,
      value: n.id,
      label: null !== (l = null != t ? t : n.globalName) && void 0 !== l ? l : n.username
    };
  }
  case t.$.ROLE: {
    if (null == i)
      return null;
    let l = s.Z.getRole(i.id, e.id);
    if (null == l)
      return null;
    return {
      type: m.tM.ROLE,
      value: l.id,
      label: l.name
    };
  }
  case t.$.CHANNEL: {
    if (null == i)
      return null;
    let l = r.Z.getChannel(e.id);
    if (null == l || l.guild_id !== i.id || n.length > 0 && !n.includes(l.type))
      return null;
    return {
      type: m.tM.CHANNEL,
      value: l.id,
      label: l.name
    };
  }
}
  }).filter(d.lm);
}