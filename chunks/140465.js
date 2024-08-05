n.d(t, {
  Nx: function() {
return f;
  },
  UV: function() {
return T;
  },
  WR: function() {
return I;
  },
  lr: function() {
return p;
  },
  t7: function() {
return h;
  }
}), n(47120);
var r = n(470079),
  i = n(913527),
  a = n.n(i),
  s = n(442837),
  o = n(544891),
  l = n(78839),
  u = n(775412),
  c = n(104494),
  d = n(639119),
  _ = n(474936),
  E = n(981631);

function f() {
  let e = (0, d.N)(),
t = (0, u._O)(),
n = (0, c.Ng)(),
r = h();
  return null != e || t || null != n || r;
}
let h = () => {
var e;
let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
  n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
return null != n && a()(Date.now()) <= a()(n);
  },
  p = () => {
var e;
let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
  case _.dT:
  case _.rB:
    return {
      duration: 1,
        percentage: 30
    };
  case _.dB:
  case _.hs:
  case _.RU:
    return {
      duration: 3,
        percentage: 30
    };
  case _.ih:
    return {
      duration: 1,
        percentage: 40
    };
  case _.gW:
    return {
      duration: 1,
        percentage: 20
    };
  case _.Nl:
    return {
      duration: 1,
        percentage: 25
    };
  default:
    return;
}
  },
  m = async () => {
let e = null;
try {
  var t;
  let n = await o.tn.post({
    url: E.ANM.CHURN_USER_OFFER
  });
  e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
} catch (e) {}
return e;
  }, I = e => {
let [t, n] = r.useState(!1), [i, a] = r.useState(!1), [s, o] = r.useState(null);
if (e)
  return {
    churnUserDiscountOffer: s,
    isFetchingChurnDiscountOffer: i
  };
let l = () => {
  n(!0), a(!1);
};
return !i && !t && (a(!0), m().then(e => {
  o(e), l();
}).catch(e => {
  l();
})), {
  churnUserDiscountOffer: s,
  isFetchingChurnDiscountOffer: i
};
  }, T = () => {
let e = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
  t = h(),
  n = null !== e && e.hasPremiumNitroMonthly,
  r = null != e && null != e.trialId;
return n && !r && !t;
  };