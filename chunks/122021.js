"use strict";
n.d(t, {
  Xj: function() {
    return f
  },
  fq: function() {
    return N
  },
  rR: function() {
    return A
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(726542),
  l = n(487576),
  u = n(553795),
  _ = n(594174),
  d = n(70956),
  c = n(930090),
  E = n(981631),
  I = n(420212);
let T = {
    [E.ABu.INSTAGRAM]: ["1036753656588017764"]
  },
  h = new Map([
    [E.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]
  ]),
  S = 30 * d.Z.Millis.DAY;

function f(e) {
  let {
    forUserProfile: t
  } = e, n = (0, o.e7)([_.default], () => _.default.getCurrentUser()), i = l.c.useExperiment({
    location: "f2f7ef_1"
  }, {
    autoTrackExposure: !1
  }).allowPlayStationStaging, {
    enabled: r
  } = c.E.useExperiment({
    location: "ConnectionsHooks"
  });
  return e => {
    var s;
    return e.type === E.ABu.PLAYSTATION_STAGING ? i : e.type === E.ABu.AMAZON_MUSIC ? r : !!(void 0 !== n && (null === (s = T[e.type]) || void 0 === s ? void 0 : s.includes(n.id))) || !!t || e.enabled
  }
}

function N() {
  let e = (0, o.e7)([u.Z], () => u.Z.getAccounts()),
    t = f({
      forUserProfile: !1
    }),
    n = i.useMemo(() => {
      let t = new Set;
      return e.forEach(e => t.add(e.type)), t
    }, [e]);
  return s().sortBy(a.Z.filter(t), [e => {
    var t;
    return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + S)
  }, e => n.has(e.type), e => e.hasMetadata, e => !E.vbS.has(e.type), e => e.name])
}

function A(e) {
  let [t, n] = i.useState(!1);

  function r(e) {
    let {
      key: t
    } = e;
    t === I.vn.SHIFT && n(!0)
  }

  function s(e) {
    let {
      key: t
    } = e;
    t === I.vn.SHIFT && n(!1)
  }
  return (i.useEffect(() => (window.addEventListener("keydown", r), window.addEventListener("keyup", s), () => {
    window.removeEventListener("keydown", r), window.removeEventListener("keyup", s)
  }), []), t && e === E.ABu.TWITTER) ? E.ABu.TWITTER_LEGACY : e
}