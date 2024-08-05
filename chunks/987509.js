n.d(t, {
  ZP: function() {
return m;
  },
  dL: function() {
return f;
  },
  hC: function() {
return E;
  },
  hl: function() {
return g;
  },
  qx: function() {
return S;
  }
}), n(47120), n(653041);
var l = n(392711),
  a = n(493683),
  i = n(212819),
  s = n(938078),
  r = n(823385),
  o = n(592125),
  u = n(496675),
  c = n(594174),
  d = n(823379),
  _ = n(41837),
  h = n(981631);
n(689938);

function f(e) {
  let t = o.Z.getChannel(e);
  return (null == t ? void 0 : t.type) === h.d4z.DM ? {
type: 'user',
id: t.recipients[0]
  } : {
type: 'channel',
id: e
  };
}

function E(e) {
  return ''.concat(e.type, '-').concat(e.id);
}

function g(e) {
  if ('channel' === e.type)
return e.id;
  let t = o.Z.getDMFromUserId(e.id);
  if (null != t)
return t;
}
async function S(e) {
  let t = g(e);
  if (null != t)
return t;
  if ('user' === e.type)
try {
  return await a.Z.getOrEnsurePrivateChannel(e.id);
} catch (e) {
  return;
}
}

function A(e) {
  if ('user' !== e.type)
return (0, s.Z)(e.id);
  {
let t = c.default.getUser(e.id);
return null != t ? {
  type: i.h8.USER,
  record: t,
  score: 0
} : null;
  }
}

function I(e, t) {
  let n;
  let l = new Set();
  if (null != t)
for (let e of t)
  l.add(e);
  let a = [];
  for (let t of e) {
if (null != t)
  if (t.type === i.h8.HEADER)
    n = t;
  else {
    let {
      id: e
    } = t.record;
    !l.has(e) && (l.add(e), null != n && (a.push(n), n = void 0), a.push(t));
  }
  }
  return a;
}

function p(e, t) {
  return e.filter(e => {
var n, l;
return (0, d.lm)(e) && (e.type === i.h8.HEADER || (0, _.o)(e) && (n = e, l = t, n.type === i.h8.USER ? l || null != o.Z.getDMChannelFromUserId(n.record.id) : n.type === i.h8.GROUP_DM || n.record.type !== h.d4z.GUILD_FORUM && n.record.type !== h.d4z.GUILD_MEDIA && u.Z.can(h.Plq.VIEW_CHANNEL, n.record) && u.Z.can(h.Plq.SEND_MESSAGES, n.record)));
  });
}

function m(e) {
  let {
results: t,
hasQuery: n,
queryMode: a,
frequentChannels: i,
targetDestination: o,
selectedDestinations: u,
pinnedDestinations: c,
originDestination: d,
includeMissingDMs: _
  } = e;
  if (n)
return I(p(t, _));
  let h = null != c && c.length > 0 ? c.map(e => A(e)) : [],
f = r.Z.getChannelHistory(),
E = f.length > 0 ? f.map(e => (0, s.Z)(e)) : [],
g = i.length > 0 ? i.map(e => (0, s.Z)(e.id)) : [],
S = p([
  ...h,
  null != o ? A(o) : null,
  ...E,
  ...g
], _),
m = (null == u ? void 0 : u.find(e => (0, l.isEqual)(e, d))) != null,
C = null == d || m ? [] : [d.id];
  return null != a ? I(S.filter(e => e.type === a)) : I(S, C).slice(0, 15);
}