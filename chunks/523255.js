n.d(t, {
  SI: function() {
return c;
  },
  hZ: function() {
return d;
  }
});
var i = n(913527),
  s = n.n(i),
  a = n(835913),
  r = n(675478),
  l = n(581883),
  o = n(905567);
let c = e => {
var t;
if (!u(e))
  return !1;
let n = null === (t = l.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
  i = null != n ? a.E.toDate(n) : void 0,
  r = null != i ? s()().diff(i, 'days') : null,
  c = null != n;
if (c && !(null != r && r > 30))
  return !1;
let {
  isEligible: d
} = o.C.getCurrentConfig({
  location: '657a81_1'
}, {
  autoTrackExposure: !0
});
return d;
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592000000,
  d = () => {
let e = a.E.now();
r.hW.updateAsync('userContent', t => {
  t.safetyUserSentimentNoticeDismissedAt = e;
}, r.fy.INFREQUENT_USER_ACTION);
  };