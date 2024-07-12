n.d(t, {
  XS: function() {
return c;
  },
  Xv: function() {
return d;
  },
  h6: function() {
return _;
  }
});
var r = n(502087),
  i = n(684259),
  a = n(111361),
  o = n(981631),
  s = n(474936);
let l = !1,
  u = !1;

function c() {
  return l;
}

function d() {
  return u;
}

function _(e) {
  if (null == e)
return o.mBz;
  let t = r.Z.getPremiumTypeOverride();
  return e.isStaff() && t === s.F_ ? u ? s.wb : o.PRK : null != e.premiumType && (0, a.I5)(e) ? u ? s.m0[e.premiumType].fileSize : s.a1[e.premiumType].fileSize : l ? o.WKe : o.mBz;
}
i.Z.subscribe({
  location: 'PremiumFeatureUtils'
}, e => {
  l = e.enabled, u = e.variant2;
});