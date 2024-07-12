n.d(t, {
  Z: function() {
return p;
  }
});
var s = n(512722),
  r = n.n(s),
  i = n(525654),
  a = n.n(i),
  l = n(39612),
  o = n(271579),
  c = n(756647),
  u = n(703656),
  d = n(314897),
  h = n(896797),
  _ = n(626135),
  E = n(954824),
  g = n(981631);

function p(e) {
  let t = function(e) {
  var t;
  let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
  if ('Android' === n || 'iOS' === n) {
    let t = d.default.getFingerprint(),
      n = (0, o.WS)();
    return r()(null != e, 'generateAppPath: guildId cannot be null'), (0, o.ZP)((0, l.z0)(e), {
      utmSource: 'verify_hub_email',
      fingerprint: t,
      attemptId: n
    });
  }
  return 'discord://';
}(e),
n = (0, o.zS)(t);
  null != n && _.default.track(g.rMx.DEEP_LINK_CLICKED, {
fingerprint: (0, c.K)(n.fingerprint),
attempt_id: n.attemptId,
source: n.utmSource
  }), E.Z.launch(t, e => {
!e && (0, u.dL)(h.Z.fallbackRoute);
  });
}