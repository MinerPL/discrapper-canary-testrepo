n.d(t, {
  K: function() {
return c;
  },
  b: function() {
return d;
  }
});
var s = n(442837),
  a = n(704215),
  r = n(605236),
  i = n(276444),
  l = n(520540),
  o = n(898997);
let c = e => {
let t = d(e),
  n = (0, r.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
return t && !n;
  },
  d = e => {
let {
  enabled: t,
  eligibleToFetch: n
} = l.g.useExperiment({
  location: e
}, {
  autoTrackExposure: !1
});
(0, o.B)(e, !n);
let a = (0, s.e7)([i.Z], () => i.Z.getIsEligibleToSendReferrals());
return t && a;
  };