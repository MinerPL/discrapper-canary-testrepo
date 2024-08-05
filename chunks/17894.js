n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(525654),
  r = n.n(i),
  s = n(39612),
  l = n(271579),
  a = n(756647),
  o = n(232567),
  u = n(703656),
  d = n(314897),
  c = n(896797),
  _ = n(626135),
  E = n(954824),
  h = n(981631);
async function p(e) {
  var t, n;
  let i = null === (t = r().os) || void 0 === t ? void 0 : t.family;
  if ('Android' === i || 'iOS' === i) {
let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
  i = (0, l.WS)();
if (null == t && d.default.isAuthenticated())
  try {
    await (0, o.k)(), t = d.default.getId();
  } catch {}
return (0, l.ZP)((0, s.Gk)(), {
  utmSource: e,
  fingerprint: t,
  attemptId: i
});
  }
  return 'discord://';
}
async function f(e) {
  let t = await p(e),
n = (0, l.zS)(t);
  null != n && _.default.track(h.rMx.DEEP_LINK_CLICKED, {
fingerprint: (0, a.K)(n.fingerprint),
attempt_id: n.attemptId,
source: n.utmSource
  }), E.Z.launch(t, e => {
!e && (0, u.dL)(c.Z.fallbackRoute);
  });
}