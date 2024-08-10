E.d(_, {
  Fo: function() {
return d;
  },
  KY: function() {
return Z;
  },
  Uo: function() {
return f;
  },
  fU: function() {
return H;
  },
  qw: function() {
return h;
  },
  tn: function() {
return P;
  }
}), E(733860);
var s = E(470079),
  T = E(658722),
  I = E.n(T),
  n = E(913527),
  A = E.n(n),
  t = E(442837),
  a = E(704215),
  r = E(45114),
  N = E(740504),
  L = E(605236),
  S = E(931261),
  D = E(540126),
  l = E(671098),
  U = E(703656),
  G = E(592125),
  O = E(324067),
  M = E(306680),
  i = E(709054),
  R = E(981631),
  u = E(176505),
  o = E(443063),
  c = E(490897),
  C = E(689938);

function g(e, _) {
  e.index = _;
}

function d(e, _, E, T) {
  T = T.toLowerCase();
  let n = (0, S.g)(e),
A = s.useCallback((e, _) => !(n && e.channel.hasFlag(u.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== R.d4z.GUILD_DIRECTORY && (0 === _.length || I()(_, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(_)), [n]);
  return s.useMemo(() => {
let e = {
  null: [],
  _categories: []
};
return E[R.d4z.GUILD_CATEGORY].forEach(E => {
  let {
    channel: s
  } = E;
  'null' === s.id && (e.null = _.null.filter(e => A(e, T))), e[s.id] = _[s.id].filter(e => A(e, T));
}), e._categories = _._categories.filter(_ => 'null' === _.channel.id || 0 === T.length || e[_.channel.id].length > 0), (0, N.Z)(e._categories, e).forEach(g), e;
  }, [
_,
E,
A,
T
  ]);
}

function Z(e) {
  let _ = e.getSections(!1);
  if (_[D.wZ] > 0)
switch (e.getGuildActionSection().getRow(0)) {
  case o.z.GUILD_HOME:
    return u.oC.GUILD_HOME;
  case o.z.GUILD_ROLE_SUBSCRIPTIONS:
    return u.oC.ROLE_SUBSCRIPTIONS;
  case o.z.GUILD_MEMBER_APPLICATIONS:
    return u.oC.MEMBER_APPLICATIONS;
}
  for (let s = D.wd; s < e.voiceChannelsSectionNumber; s++)
if (_[s] > 0) {
  var E;
  let _ = null === (E = e.getChannelFromSectionRow(s, 0)) || void 0 === E ? void 0 : E.channel;
  if (null != _)
    return _.id;
}
  return null;
}

function f(e, _) {
  let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, l.n)(e, _), (0, r.y5)(_.map(e => ({
channelId: e,
readStateType: c.W.CHANNEL,
messageId: M.ZP.lastMessageId(e)
  }))), null != E && (0, U.uL)(R.Z5c.CHANNEL(e, E));
}

function P(e, _, E, s) {
  let T = (0, L.wE)(a.z.CHANNEL_BROWSER_NUX),
I = (0, t.cj)([G.Z], () => {
  let _ = {},
    E = G.Z.getMutableGuildChannelsForGuild(e);
  for (let e in E) {
    let {
      parent_id: T
    } = E[e];
    if (null != T) {
      var s;
      _[T] = (null !== (s = _[T]) && void 0 !== s ? s : 0) + 1;
    }
  }
  return _;
}, [e]),
n = _._categories.map(e => {
  let s = _[e.channel.id];
  return {
    rowCount: 'null' !== e.channel.id && 0 === I[e.channel.id] ? 1 : s.length,
    rowHeight: 0 === s.length ? 0 : E
  };
});
  return !T && null != s && n.unshift({
rowCount: 1,
rowHeight: s
  }), n;
}

function H(e) {
  var _, E;
  let s = (0, t.e7)([O.Z], () => O.Z.getCategories(e)),
T = s._categories.length,
I = s._categories[s._categories.length - 1];
  if (null == I)
return 0;
  let n = s[null !== (E = null === (_ = I.channel) || void 0 === _ ? void 0 : _.id) && void 0 !== E ? E : 'null'];
  return null == n ? 0 : 0 === n.length ? I.index + 2 - T : n[n.length - 1].index + 2 - T;
}

function h(e) {
  var _;
  return C.Z.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
timeAgo: A()(i.default.extractTimestamp(null !== (_ = M.ZP.lastMessageId(e)) && void 0 !== _ ? _ : e)).fromNow()
  });
}