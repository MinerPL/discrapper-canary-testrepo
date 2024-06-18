"use strict";
n.d(t, {
  Nx: function() {
    return T
  },
  UV: function() {
    return A
  },
  WR: function() {
    return N
  },
  lr: function() {
    return S
  },
  t7: function() {
    return h
  }
}), n(47120);
var i = n(470079),
  r = n(913527),
  s = n.n(r),
  o = n(442837),
  a = n(544891),
  l = n(78839),
  u = n(775412),
  _ = n(529537),
  d = n(104494),
  c = n(639119),
  E = n(474936),
  I = n(981631);

function T() {
  let e = (0, c.N)(),
    t = (0, u._O)(),
    n = (0, d.Ng)(),
    i = h();
  return null != e || t || null != n || i
}
let h = () => {
    var e;
    let t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
      n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
    return null != n && s()(Date.now()) <= s()(n)
  },
  S = () => {
    var e;
    let t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
    switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
      case E.dT:
      case E.rB:
        return {
          duration: 1, percentage: 30
        };
      case E.dB:
      case E.hs:
      case E.RU:
        return {
          duration: 3, percentage: 30
        };
      case E.ih:
        return {
          duration: 1, percentage: 40
        };
      default:
        return
    }
  },
  f = async () => {
    let e = null;
    try {
      var t;
      let n = await a.tn.post({
        url: I.ANM.CHURN_USER_OFFER
      });
      e = null !== (t = n.body.offer) && void 0 !== t ? t : null
    } catch (e) {}
    return e
  }, N = e => {
    let [t, n] = i.useState(!1), [r, s] = i.useState(!1), [o, a] = i.useState(null);
    if (e) return {
      churnUserDiscountOffer: o,
      isFetchingChurnDiscountOffer: r
    };
    let l = () => {
      n(!0), s(!1)
    };
    return !r && !t && (s(!0), f().then(e => {
      a(e), l()
    }).catch(e => {
      l()
    })), {
      churnUserDiscountOffer: o,
      isFetchingChurnDiscountOffer: r
    }
  }, A = () => {
    let {
      enabled: e
    } = _.Z.useExperiment({
      location: "useShouldFetchChurnOffer"
    }, {
      autoTrackExposure: !1
    }), t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()), n = h(), i = null !== t && t.hasPremiumNitroMonthly, r = null != t && null != t.trialId;
    return e && i && !r && !n
  }