t.d(n, {
  FO: function() {
return v;
  },
  nA: function() {
return _;
  },
  qQ: function() {
return R;
  },
  r7: function() {
return T;
  }
}), t(47120);
var a = t(470079),
  s = t(392711),
  l = t.n(s),
  r = t(442837),
  i = t(883429),
  o = t(592125),
  c = t(496675),
  d = t(306680),
  u = t(823379),
  h = t(709054),
  m = t(344185),
  g = t(920303),
  E = t(569471),
  f = t(346479),
  Z = t(91159),
  x = t(231338);

function T() {
  a.useEffect(() => {
(0, Z.A_)();
  }, []);
}

function v(e) {
  let n = function(e) {
  let n = (0, r.Wu)([
    c.Z,
    m.Z,
    o.Z
  ], () => l()(m.Z.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
    let {
      id: n
    } = e;
    return o.Z.getChannel(n);
  }).filter(u.lm).filter(e => c.Z.can(x.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [
    e.guild_id,
    e.id
  ]);
  return a.useMemo(() => l()(n).sort((e, n) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(n))).reverse().value(), [n]);
}(e),
[t, s] = (0, r.e7)([E.Z], () => l().partition(n, e => E.Z.hasJoined(e)), [n], r.pF);
  return {
joinedThreadIds: t,
unjoinedThreadIds: s
  };
}

function _(e) {
  let n = (0, r.Wu)([
c.Z,
m.Z,
o.Z
  ], () => l()(m.Z.getThreadsForGuild(e)).values().map(e => l().values(e)).flatten().map(e => {
let {
  id: n
} = e;
return o.Z.getChannel(n);
  }).filter(u.lm).filter(e => c.Z.can(x.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return a.useMemo(() => l()(n).sort((e, n) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(n))).reverse().value(), [n]);
}

function R(e, n, t) {
  let {
canLoadMore: s,
loading: d,
nextOffset: u,
isInitialLoad: h
  } = (0, r.cj)([g.Z], () => ({
loading: g.Z.isLoading(e.id, n, t),
isInitialLoad: g.Z.isInitialLoad,
canLoadMore: g.Z.canLoadMore,
nextOffset: g.Z.nextOffset
  })), m = a.useCallback(() => {
c.Z.can(x.Pl.READ_MESSAGE_HISTORY, e) && f.Z.loadArchivedThreads(e.guild_id, e.id, n, t, u);
  }, [
e,
n,
t,
u
  ]);
  return a.useEffect(() => {
h && m();
  }, [
e.id,
n,
t,
h
  ]), a.useEffect(() => {
i.Z.resort(e.id);
  }, [e.id]), {
threadIds: (0, r.Wu)([
  g.Z,
  o.Z,
  c.Z
], () => l()(g.Z.getThreads(e.id, n, t)).filter(e => {
  let n = o.Z.getChannel(e);
  return null != n && c.Z.can(x.Pl.VIEW_CHANNEL, n);
}).value()),
canLoadMore: s,
loading: d || h,
loadMore: m
  };
}