t.d(n, {
  HI: function() {
return f;
  },
  _H: function() {
return _;
  },
  af: function() {
return p;
  },
  tx: function() {
return v;
  }
}), t(47120);
var l = t(524846),
  r = t(911969),
  i = t(592125),
  a = t(271383),
  o = t(430824),
  s = t(594174),
  c = t(483360),
  u = t(823379),
  d = t(5192),
  m = t(280501);
t(892902);
let f = 1000;

function _(e, n, t) {
  let l = i.Z.getChannel(t);
  if (null == l)
return [];
  let a = e === r.re.USER_SELECT || e === r.re.MENTIONABLE_SELECT,
o = e === r.re.ROLE_SELECT || e === r.re.MENTIONABLE_SELECT,
{
  users: s,
  roles: u
} = c.ZP.queryMentionResults({
  query: n,
  channel: l,
  canMentionEveryone: !1,
  canMentionHere: !1,
  canMentionUsers: a,
  canMentionRoles: o,
  includeAllGuildUsers: !0,
  includeNonMentionableRoles: !0,
  checkRecentlyTalkedOnEmptyQuery: !1,
  limit: 15
}),
f = s.map(e => {
  var n;
  let r = d.ZP.getNickname(l.getGuildId(), t, e.user);
  return {
    type: m.tM.USER,
    value: e.user.id,
    label: null !== (n = null != r ? r : e.user.globalName) && void 0 !== n ? n : e.user.username
  };
});
  return [
...f,
...u.map(e => ({
  type: m.tM.ROLE,
  value: e.id,
  label: e.name
}))
  ];
}

function p(e, n, t) {
  let l = i.Z.getChannel(n);
  return null == l ? [] : c.ZP.queryApplicationCommandChannelResults({
query: e,
channel: l,
channelTypes: t,
limit: 15
  }).channels.map(e => ({
type: m.tM.CHANNEL,
value: e.id,
label: e.name
  }));
}

function v(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e)
return;
  let r = o.Z.getGuild(n);
  return e.map(e => {
switch (e.type) {
  case l.$.USER: {
    var n;
    let t = s.default.getUser(e.id);
    if (null == t)
      return null;
    let l = null != r ? a.ZP.getNick(r.id, t.id) : void 0;
    return {
      type: m.tM.USER,
      value: t.id,
      label: null !== (n = null != l ? l : t.globalName) && void 0 !== n ? n : t.username
    };
  }
  case l.$.ROLE: {
    if (null == r)
      return null;
    let n = o.Z.getRole(r.id, e.id);
    if (null == n)
      return null;
    return {
      type: m.tM.ROLE,
      value: n.id,
      label: n.name
    };
  }
  case l.$.CHANNEL: {
    if (null == r)
      return null;
    let n = i.Z.getChannel(e.id);
    if (null == n || n.guild_id !== r.id || t.length > 0 && !t.includes(n.type))
      return null;
    return {
      type: m.tM.CHANNEL,
      value: n.id,
      label: n.name
    };
  }
}
  }).filter(u.lm);
}