n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(470079),
  i = n(180205),
  a = n(314897),
  o = n(492435),
  s = n(353926),
  l = n(980944),
  u = n(987338);

function c(e, t, n) {
  return 'guild' === e ? s.Z.getGuildExperimentDescriptor(t, n.guildId) : s.Z.getUserExperimentDescriptor(t);
}

function d(e, t, n, r) {
  var i, a;
  return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null !== (a = null === (i = n.get(t)) || void 0 === i ? void 0 : i.config) && void 0 !== a ? a : e.defaultConfig;
}

function _(e) {
  var t, n;
  (0, l.K)(e.id, e.label, e.commonTriggerPoint);
  let _ = new Map();
  _.set(u.NZ.NOT_ELIGIBLE, {
description: 'Not Eligible',
config: e.defaultConfig
  }), _.set(u.NZ.CONTROL, {
description: 'Control Bucket',
config: e.defaultConfig
  }), e.treatments.forEach(e => {
_.set(e.id, {
  description: 'Treatment '.concat(e.id, ': ').concat(e.label),
  config: e.config
});
  });
  let E = (t = e.kind, n = {
id: e.id,
title: e.label,
commonTriggerPoint: e.commonTriggerPoint,
description: [..._.values()].map(e => e.description),
buckets: [..._.keys()]
  }, 'guild' === t ? (0, o.gK)(n) : (0, o.Xz)(n));

  function f(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
  n = arguments.length > 2 ? arguments[2] : void 0,
  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
if (t.exposureType = n ? u.a0.AUTO_FALLBACK : u.a0.AUTO, t.excluded = !1, null == r) {
  h(e, t);
  return;
}
p(e, t, r);
  }

  function h(t) {
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    excluded: !1,
    exposureType: u.a0.MANUAL
  },
  r = c(e.kind, E.id, t);
null != r && p(t, n, r);
  }

  function p(e, t, n) {
if (null != n) {
  var r, i, s, l, c;
  let d = u.a0.MANUAL;
  (0, o.W9)(E.id, n, {
    location: null !== (r = null == e ? void 0 : e.location) && void 0 !== r ? r : 'unknown',
    analyticsLocations: null !== (i = null == t ? void 0 : t.analyticsLocations) && void 0 !== i ? i : [],
    fingerprint: null !== (l = null !== (s = null == t ? void 0 : t.fingerprint) && void 0 !== s ? s : a.default.getFingerprint()) && void 0 !== l ? l : void 0,
    excluded: (null == t ? void 0 : t.excluded) || !1,
    exposureType: null !== (c = null == t ? void 0 : t.exposureType) && void 0 !== c ? c : d
  });
}
  }

  function m(t, n) {
let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
  i = null != r.disable && r.disable,
  a = c(e.kind, e.id, t),
  o = null == a || i ? u.NZ.NOT_ELIGIBLE : a.bucket,
  l = null == a ? -1 : a.revision;

function E() {
  let r = c(e.kind, e.id, t),
    a = null == r || i ? u.NZ.NOT_ELIGIBLE : r.bucket,
    s = null == r ? -1 : r.revision;
  (a !== o || l !== s) && (n(d(e, a, _, r), a, s), o = a, l = s);
}
return n(d(e, o, _, a), o, l), s.Z.addReactChangeListener(E), () => {
  s.Z.removeReactChangeListener(E);
};
  }
  return {
useExperiment: function(t) {
  var n, a, o;
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      autoTrackExposure: !0
    },
    l = null !== (n = s.disable) && void 0 !== n && n,
    E = !1 !== s.autoTrackExposure,
    h = c(e.kind, e.id, t),
    p = null == s.trackExposureOptions ? void 0 : (0, i.Z)(null !== (a = s.trackExposureOptions) && void 0 !== a ? a : {}),
    I = null !== (o = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== o && o,
    [
      [T, g, S], A
    ] = (0, r.useState)(() => {
      let t = null == h || l ? u.NZ.NOT_ELIGIBLE : h.bucket;
      return [
        d(e, t, _, h),
        t,
        null == h ? -1 : h.revision
      ];
    }),
    N = (0, i.Z)(t);
  return (0, r.useEffect)(() => {
    if (!l && (!!E || !!I))
      f(N, p, !1 === E);
  }, [
    l,
    E,
    N,
    p,
    g,
    S,
    I
  ]), (0, r.useEffect)(() => m(N, (e, t, n) => {
    A(r => r[0] === e && r[1] === t && r[2] === n ? r : [
      e,
      t,
      n
    ]);
  }, {
    disable: l
  }), [
    l,
    N
  ]), T;
},
subscribe: m,
trackExposure: h,
getCurrentConfig: function(t) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      autoTrackExposure: !0
    },
    r = c(e.kind, e.id, t);
  if (null == r || n.disable)
    return d(e, u.NZ.NOT_ELIGIBLE, _, r);
  if (!1 !== n.autoTrackExposure || r.triggerDebuggingEnabled) {
    let e = !1 === n.autoTrackExposure;
    f(t, n.trackExposureOptions, e, r);
  }
  return d(e, r.bucket, _, r);
},
definition: e,
isAAMode: function(t) {
  let n = c(e.kind, e.id, t);
  return !!(null == n ? void 0 : n.aaMode);
}
  };
}