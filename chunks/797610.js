"use strict";
n.d(t, {
  Ib: function() {
    return _
  },
  M9: function() {
    return E
  },
  OR: function() {
    return u
  },
  g0: function() {
    return I
  },
  gJ: function() {
    return c
  }
}), n(470079), n(442837);
var i = n(430824),
  r = n(496675),
  s = n(266090),
  o = n(981631),
  a = n(176505);

function l(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.lds;
  return s.Z.useExperiment({
    guildId: r,
    location: i
  }, {
    autoTrackExposure: n
  }).experimentState
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return l(e, t, n) === s.P.ClydeProfiles
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return d(l(e, n), e, t)
}

function d(e, t, n) {
  if (null == t) {
    if (null != n && n.isPrivate()) return !!n.hasFlag(a.zZ.CLYDE_AI) || i.Z.getGuildIds().some(e => E(i.Z.getGuild(e)));
    return !1
  }
  return null != e && e !== s.P.None && r.Z.can(o.Plq.USE_CLYDE_AI, n)
}

function c(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : o.lds;
  return d(s.Z.getCurrentConfig({
    guildId: r,
    location: "1e9ccc_2"
  }, {
    autoTrackExposure: i
  }).experimentState, e, t)
}

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return T(e, t) !== s.P.None
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return T(e, t) === s.P.ClydeProfiles
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  let n = e.id;
  return s.Z.getCurrentConfig({
    guildId: n,
    location: "1e9ccc_4"
  }, {
    autoTrackExposure: t
  }).experimentState
}