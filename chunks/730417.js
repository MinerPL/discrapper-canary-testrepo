n.d(t, {
  _g: function() {
return T;
  },
  au: function() {
return m;
  },
  c: function() {
return C;
  },
  dy: function() {
return h;
  },
  hs: function() {
return f;
  },
  op: function() {
return N;
  }
});
var i = n(470079),
  s = n(442837),
  a = n(570140),
  r = n(213609),
  l = n(211644),
  o = n(605236),
  c = n(594190),
  u = n(960359),
  d = n(346114),
  _ = n(524347),
  E = n(853197),
  I = n(702512);

function m(e) {
  let t, n;
  let i = d.a.useExperiment({
location: '59cc4b_1'
  });
  if (null == e)
return null;
  let s = (0, E.BS)(e);
  if (null == s)
return null;
  if (s.dropsQuestId === I.oL)
t = d.a, n = i;
  else
t = null, n = null;
  return null == t || null == n ? null : {
experiment: t,
config: n,
drop: s
  };
}

function T(e) {
  var t;
  let n = (0, s.e7)([_.Z], () => _.Z.serverEligibleByQuestIds),
r = m(e),
l = function(e) {
  let t = (0, s.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)),
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
d && !T && l && null != I && a.Z.wait(() => {
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
a = (0, s.e7)([_.Z], () => null != n && _.Z.serverEligibleByQuestIds[n.dropsQuestId]),
r = (0, s.e7)([_.Z], () => _.Z.hasInitialProgressFetched);
  i.useEffect(() => {
null != n && a && !r && (0, u.Vb)(n.dropsQuestId);
  }, [
n,
a,
r
  ]);
}

function C(e, t, n, i) {
  var a;
  let r = m(e),
c = null == r ? void 0 : r.drop,
u = (0, s.e7)([_.Z], () => null != c && _.Z.serverEligibleByQuestIds[c.dropsQuestId]),
d = (0, s.e7)([_.Z], () => _.Z.getIsPartnerGameQuestComplete(e)),
I = (0, E.wj)(null == t ? void 0 : t.name, null !== (a = null == c ? void 0 : c.gameSearchTerm) && void 0 !== a ? a : []),
T = (0, l.ot)([
  n,
  i
]),
h = (0, o.wE)(i),
N = null == c || (0, E.hM)(c),
C = !!(null != c && !N && I && (null == r ? void 0 : r.config.dropsEnabled) && u);
  return {
partnerGame: C ? e : null,
dropsActivityPanelExperienceBlocked: T,
showDropsSparkles: !d && !h
  };
}

function f(e, t, n) {
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