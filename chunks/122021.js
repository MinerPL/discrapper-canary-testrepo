n.d(t, {
  Xj: function() {
return I;
  },
  fq: function() {
return T;
  },
  rR: function() {
return g;
  }
}), n(47120);
var r = n(470079),
  i = n(392711),
  a = n.n(i),
  s = n(442837),
  o = n(726542),
  l = n(487576),
  u = n(553795),
  c = n(594174),
  d = n(70956),
  _ = n(930090),
  E = n(981631),
  f = n(420212);
let h = {
[E.ABu.INSTAGRAM]: ['1036753656588017764']
  },
  p = new Map([
[
  E.ABu.INSTAGRAM,
  new Date(2023, 1, 18).getTime()
]
  ]),
  m = 30 * d.Z.Millis.DAY;

function I(e) {
  let {
forUserProfile: t
  } = e, n = (0, s.e7)([c.default], () => c.default.getCurrentUser()), r = l.c.useExperiment({
location: 'f2f7ef_1'
  }, {
autoTrackExposure: !1
  }).allowPlayStationStaging, {
enabled: i
  } = _.E.useExperiment({
location: 'ConnectionsHooks'
  });
  return e => {
var a;
return e.type === E.ABu.PLAYSTATION_STAGING ? r : e.type === E.ABu.AMAZON_MUSIC ? i : !!(void 0 !== n && (null === (a = h[e.type]) || void 0 === a ? void 0 : a.includes(n.id))) || !!t || e.enabled;
  };
}

function T() {
  let e = (0, s.e7)([u.Z], () => u.Z.getAccounts()),
t = I({
  forUserProfile: !1
}),
n = r.useMemo(() => {
  let t = new Set();
  return e.forEach(e => t.add(e.type)), t;
}, [e]);
  return a().sortBy(o.Z.filter(t), [
e => {
  var t;
  return !(p.has(e.type) && Date.now() < (null !== (t = p.get(e.type)) && void 0 !== t ? t : 0) + m);
},
e => n.has(e.type),
e => e.hasMetadata,
e => !E.vbS.has(e.type),
e => e.name
  ]);
}

function g(e) {
  let [t, n] = r.useState(!1);

  function i(e) {
let {
  key: t
} = e;
t === f.vn.SHIFT && n(!0);
  }

  function a(e) {
let {
  key: t
} = e;
t === f.vn.SHIFT && n(!1);
  }
  return (r.useEffect(() => (window.addEventListener('keydown', i), window.addEventListener('keyup', a), () => {
window.removeEventListener('keydown', i), window.removeEventListener('keyup', a);
  }), []), t && e === E.ABu.TWITTER) ? E.ABu.TWITTER_LEGACY : e;
}