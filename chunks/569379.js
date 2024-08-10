n.d(t, {
  EK: function() {
return N;
  },
  GX: function() {
return T;
  },
  eQ: function() {
return h;
  },
  me: function() {
return v;
  },
  vf: function() {
return S;
  }
}), n(47120), n(627341), n(653041);
var s = n(470079),
  o = n(278074),
  r = n(754700),
  a = n(442837),
  l = n(481060),
  i = n(410030),
  c = n(706454),
  d = n(930153),
  u = n(113434),
  p = n(497505),
  m = n(918701),
  x = n(665430),
  g = n(585500),
  f = n(566078),
  C = n(760171),
  _ = n(46140),
  E = n(689938);

function h(e) {
  var t, n;
  let s = (0, a.e7)([c.default], () => c.default.locale),
{
  percentComplete: o
} = (0, u.Rf)(e);
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
return E.Z.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && o > 0) {
let e = (0, d.T3)(s, o, {
  roundingMode: 'floor'
});
return E.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
  percent: e
});
  }
  return (0, m.$J)(e) ? E.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : E.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
}

function S(e, t, n) {
  var s;
  let o = (0, u.B6)(f.r.build(e.config).rewardsExpireAt),
r = (0, u.Rf)(e),
a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
l = (0, u.z)(e),
i = (0, g.D)({
  quest: e,
  location: _.dr.QUESTS_BAR,
  questContent: p.jn.QUEST_BAR_V2,
  taskDetails: r,
  useV2Variants: !0
});
  if (a)
return E.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
  expirationDate: o
});
  if (t)
return n === C.L.SELECT ? E.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE : i;
  if (r.percentComplete > 0)
return l ? (0, m.AV)({
  quest: e,
  taskDetails: r
}) : E.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
  return E.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
}

function T() {
  let [{
spring: e
  }, t] = (0, l.useSpring)(() => ({
spring: 0
  }), 'animate-always');
  return {
completionSpring: e,
startCompletionAnimation: s.useCallback(() => {
  t({
    spring: 1
  }), t({
    spring: 0,
    delay: 2000
  });
}, [t])
  };
}

function N(e, t) {
  var n;
  let s = (0, u.z)(e),
o = null !== (n = (0, i.i6)()) && void 0 !== n ? n : 0,
r = 'var(--green-330)',
a = [
  'var(--background-tertiary)',
  'var(--interactive-normal)'
],
l = t ? a[o] : [
  '#828288',
  '#CBCDD4'
][o];
  return {
backgroundTop: l,
backgroundBottom: t ? a[o] : [
  '#535356',
  '#8B8C95'
][o],
foreground: r,
glow: t && s ? r : '#C4C1D66E'
  };
}

function v(e, t) {
  let [n, a] = (0, u.UH)(e.id), l = s.useMemo(() => (0, m.Nj)({
quest: e
  }), [e]), i = s.useMemo(() => (0, m.$J)(e), [e]), c = (0, u.pe)(e), d = (0, u.GY)(e), p = (0, x.p)({
location: _.dr.QUESTS_BAR
  }), g = (0, o.EQ)(t).with({
percentComplete: 0
  }, () => null).with({
taskType: r.X.PLAY_ON_DESKTOP
  }, () => _.cd.DESKTOP).with({
taskType: r.X.STREAM_ON_DESKTOP
  }, () => _.cd.DESKTOP).with({
taskType: r.X.PLAY_ON_XBOX
  }, () => _.cd.CONSOLE).with({
taskType: r.X.PLAY_ON_PLAYSTATION
  }, () => _.cd.CONSOLE).exhaustive(), f = c ? _.cd.DESKTOP : d ? _.cd.CONSOLE : null, E = (0, o.EQ)({
lastPlatformProgress: g,
currentProgressingPlatform: f,
selectedPlatform: n
  }).with({
currentProgressingPlatform: _.cd.CONSOLE
  }, () => C.L.CONSOLE).with({
currentProgressingPlatform: _.cd.DESKTOP
  }, () => C.L.DESKTOP).with({
currentProgressingPlatform: null,
lastPlatformProgress: _.cd.CONSOLE
  }, () => C.L.CONSOLE).with({
currentProgressingPlatform: null,
lastPlatformProgress: _.cd.DESKTOP
  }, () => C.L.DESKTOP).with({
currentProgressingPlatform: null,
lastPlatformProgress: null,
selectedPlatform: _.cd.CONSOLE
  }, () => C.L.CONSOLE).with({
currentProgressingPlatform: null,
lastPlatformProgress: null,
selectedPlatform: _.cd.DESKTOP
  }, () => C.L.DESKTOP).with({
currentProgressingPlatform: null,
lastPlatformProgress: null,
selectedPlatform: null
  }, () => i && l && p ? C.L.SELECT : i ? C.L.CONSOLE : C.L.DESKTOP).exhaustive(), h = [];
  return l && h.push(_.cd.DESKTOP), i && h.push(_.cd.CONSOLE), [
E,
h,
a
  ];
}