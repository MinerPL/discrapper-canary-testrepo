t.d(e, {
  T: function() {
return i;
  },
  Z: function() {
return a;
  }
});
var l = t(639119),
  u = t(474936);

function i(n) {
  let {
userTrialOffer: e,
isGift: t,
skuId: l
  } = n;
  return !t && null != e && null != l && u.nG[e.trial_id].skus.includes(l);
}

function a(n) {
  let {
isGift: e,
skuId: t,
referralTrialOfferId: i
  } = n, a = (0, l.N)(i);
  return !e && null != a && null != t && u.nG[a.trial_id].skus.includes(t);
}