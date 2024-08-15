n.d(t, {
  _g: function() {
return T;
  },
  au: function() {
return m;
  },
  c: function() {
return f;
  },
  dy: function() {
return h;
  },
  hs: function() {
return C;
  },
  op: function() {
return N;
  }
});
var i = n(470079),
  a = n(442837),
  s = n(570140),
  r = n(213609),
  l = n(211644),
  o = n(605236),
  c = n(594190),
  u = n(960359),
  d = n(346114),
  _ = n(524347),
  E = n(853197),
  I = n(288836);

function m(e) {
  let t, n;
  let i = d.a.useExperiment({
location: '59cc4b_1'
  });
  if (null == e)
return null;
  let a = (0, E.BS)(e);
  if (null == a)
return null;
  if (a.dropsQuestId === I.oL)
t = d.a, n = i;
  else
t = null, n = null;
  return null == t || null == n ? null : {
experiment: t,
config: n,
drop: a
  };
}

function T(e) {
  var t;
  let n = (0, a.e7)([_.Z], () => _.Z.serverEligibleByQuestIds),
r = m(e),
l = function(e) {
  let t = (0, a.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)),
    n = i.useMemo(() => (0, E.R9)(), []);
  return (0, E.YK)(e, t, n);
}(e),
o = null != r && n[r.drop.dropsQuestId];
  null != r && o && l && r.experiment.trackExposure({
location: 'ELIGIBILITY_ENROLLMENT_TOOLTIP'
  });
  let d = null == r ? void 0 : null === (t = r.config) || void 0 === t ? void 0 : t.dropsEnabled,
I = null == r ? void 0 : r.drop,
T = null == I || (0, E.hM)(I);
  return i.useEffect(() => {
d && !T && l && null != I && s.Z.wait(() => {
  null == o && (0, u.Vt)(I.dropsQuestId);
});
  }, [
o,
I,
d,
T,
l
  ]), null != I && !!d && !T && o && l;
}

function h() {
  let e = m(I.X2.FORTNITE);
  return null == e ? void 0 : e.config.dropsEnabled;
}

function N(e) {
  let t = m(e),
n = null == t ? void 0 : t.drop,
s = (0, a.e7)([_.Z], () => null != n && _.Z.serverEligibleByQuestIds[n.dropsQuestId]),
r = (0, a.e7)([_.Z], () => _.Z.hasInitialProgressFetched);
  i.useEffect(() => {
null != n && s && !r && (0, u.Vb)(n.dropsQuestId);
  }, [
n,
s,
r
  ]);
}

function f(e, t, n, i) {
  var s;
  let r = m(e),
c = null == r ? void 0 : r.drop,
u = (0, a.e7)([_.Z], () => null != c && _.Z.serverEligibleByQuestIds[c.dropsQuestId]),
d = (0, a.e7)([_.Z], () => _.Z.getIsPartnerGameQuestComplete(e)),
I = (0, E.wj)(null == t ? void 0 : t.name, null !== (s = null == c ? void 0 : c.gameSearchTerm) && void 0 !== s ? s : []),
T = (0, l.ot)([
  n,
  i
]),
h = (0, o.wE)(i),
N = null == c || (0, E.hM)(c),
f = !!(null != c && !N && I && (null == r ? void 0 : r.config.dropsEnabled) && u);
  return {
partnerGame: f ? e : null,
dropsActivityPanelExperienceBlocked: T,
showDropsSparkles: !d && !h
  };
}

function C(e, t, n) {
  let i = (0, E.BS)(e);
  (0, r.Z)({
type: t,
name: n,
properties: {
  drops_quest_id: null == i ? void 0 : i.dropsQuestId,
  game_id: null == i ? void 0 : i.dropsGameId
}
  });
}