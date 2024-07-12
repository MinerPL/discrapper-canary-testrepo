e.d(t, {
  EX: function() {
return m;
  },
  GE: function() {
return p;
  },
  GL: function() {
return N;
  },
  JY: function() {
return f;
  },
  Jd: function() {
return P;
  },
  Nq: function() {
return v;
  },
  Ol: function() {
return O;
  },
  PJ: function() {
return A;
  },
  T_: function() {
return S;
  },
  V5: function() {
return Z;
  },
  dw: function() {
return C;
  },
  ig: function() {
return L;
  },
  kr: function() {
return I;
  },
  n2: function() {
return R;
  },
  nB: function() {
return g;
  },
  q_: function() {
return h;
  },
  qy: function() {
return F;
  },
  vU: function() {
return U;
  },
  yA: function() {
return D;
  },
  yh: function() {
return M;
  },
  z5: function() {
return G;
  }
}), e(47120);
var r = e(164369),
  u = e(913527),
  i = e.n(u),
  o = e(884439),
  E = e(442837),
  l = e(876215),
  a = e(835473),
  T = e(70956),
  _ = e(709054),
  c = e(719247),
  s = e(689938);
let d = n => {
let {
  start: t,
  now: e
} = n, r = Math.abs((e - t) / T.Z.Millis.SECOND), u = Math.floor(r) % T.Z.Seconds.MINUTE, i = Math.floor(r / T.Z.Seconds.MINUTE) % T.Z.Seconds.MINUTE, o = Math.floor(r / T.Z.Seconds.HOUR);
return {
  seconds: u,
  minutes: i,
  hours: o,
  days: Math.floor(r / T.Z.Seconds.DAY)
};
  },
  f = (n, t) => {
let e = 'id' in n ? _.default.extractTimestamp(n.id) : n.start;
return d({
  start: e,
  now: 'end' in n && null != n.end ? Math.min(n.end, t) : t
});
  },
  S = (n, t) => {
let {
  seconds: e,
  minutes: r,
  hours: u
} = f(n, t);

function i(n) {
  return String(n).padStart(2, '0');
}
return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
  hours: u,
  minutes: u > 0 ? i(r) : r,
  seconds: i(e)
});
  },
  N = (n, t, e) => {
let r = i()(e),
  u = i()(_.default.extractTimestamp(n.id)),
  o = r.diff(u, 's');
if (o < T.Z.Seconds.MINUTE)
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
    count: o
  });
if (o < T.Z.Seconds.HOUR) {
  let n = Math.round(o / T.Z.Seconds.MINUTE);
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
    count: n
  });
}
if (o < 12 * T.Z.Seconds.HOUR) {
  let n = Math.round(o / T.Z.Seconds.HOUR);
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
    count: n
  });
} else if (o < 9 * T.Z.Seconds.DAY) {
  let n = Math.round(o / T.Z.Seconds.DAY);
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({
    count: n
  });
} else if (o < 4 * T.Z.Seconds.WEEK) {
  let n = Math.round(o / (7 * T.Z.Seconds.DAY));
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
    count: n
  });
}
let E = Math.round(o / T.Z.Seconds.DAYS_30);
return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MONTHS_AGO.format({
  count: E
});
  },
  M = function(n, t) {
let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
return I(n) ? S(n, e) : N(n, t, e);
  };

function A(n, t) {
  return n.traits.find(n => n.type === t);
}

function I(n) {
  var t, e;
  return null !== (e = null === (t = A(n, o.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== e && e;
}

function O(n) {
  var t, e;
  return null !== (e = null === (t = A(n, o.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== e && e;
}

function R(n) {
  return null != n.expires_at && new Date(n.expires_at) < new Date();
}

function D(n) {
  var t;
  return null === (t = A(n, o.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}

function v(n) {
  var t;
  return null === (t = A(n, o.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}

function Z(n) {
  var t;
  return null === (t = A(n, o.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}

function C(n) {
  let t = A(n, o.N.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}

function p(n) {
  let {
months: t = 0,
weeks: e = 0,
days: u = 0
  } = (0, r.Z)({
start: n,
end: new Date()
  });
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
months: t,
weeks: t > 0 ? 0 : e,
days: t > 0 || e > 0 ? 0 : u
  });
}

function P(n) {
  return n.content_type === l.s.TOP_GAME;
}

function U(n) {
  var t;
  return null === (t = A(n, o.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}

function h(n) {
  let t = U(n);
  if (null == t || t < 3)
return !1;
  let e = _.default.extractTimestamp(n.id);
  return !(Date.now() - e > 48 * T.Z.Millis.HOUR) && !0;
}

function m(n) {
  let t = D(n);
  if (null == t)
return null;
  let e = Math.round(t / T.Z.Seconds.HOUR);
  return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
hours: e
  });
}

function G(n) {
  var t;
  let e = null !== (t = D(n)) && void 0 !== t ? t : 0;
  return e > 10 * T.Z.Seconds.HOUR ? s.Z.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : e > 5 * T.Z.Seconds.HOUR ? s.Z.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : s.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON;
}

function g(n) {
  let t = m(n),
e = G(n);
  return null == t ? e : ''.concat(e, ' \u2014 ').concat(t);
}

function L(n) {
  var t;
  return null === (t = A(n, o.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}

function F(n) {
  let t = (0, E.e7)([c.Z], () => c.Z.getMatchingActivity(n)),
[e, r] = (0, a.Z)([
  null == t ? void 0 : t.application_id,
  n.extra.application_id
]);
  return {
activity: t,
anyMatchingApplication: null != e ? e : r,
activityApplication: e,
fallbackApplication: r
  };
}