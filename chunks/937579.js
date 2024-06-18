"use strict";
n.d(t, {
  Tf: function() {
    return d
  },
  ab: function() {
    return E
  }
});
var i = n(544891),
  r = n(704215),
  s = n(570140),
  o = n(605236),
  a = n(675478),
  l = n(295226),
  u = n(424082),
  _ = n(981631);
async function d() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, u.lf)("PremiumManager"),
    n = t && l.Z.shouldFetchAnnualOffer();
  if (e) {
    s.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var d, E, I;
      let e = await i.tn.post({
          url: _.ANM.USER_OFFER
        }),
        t = null !== (d = e.body.user_trial_offer) && void 0 !== d ? d : null,
        l = null !== (E = e.body.user_discount) && void 0 !== E ? E : null,
        u = null !== (I = e.body.user_discount_offer) && void 0 !== I ? I : null;
      return null == t && (0, o.un)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, a.w9)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: l,
        userDiscountOffer: u
      }), null == t && n && c(), {
        userTrialOffer: t,
        userDiscount: l,
        userDiscountOffer: u
      }
    } catch (e) {
      s.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  n && c()
}
async function c() {
  try {
    var e;
    let t = await i.tn.post({
        url: _.ANM.ANNUAL_USER_OFFER
      }),
      n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != n && (I(n), s.Z.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: n
    }))
  } catch (e) {
    s.Z.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function E(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    r = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== r) return i.tn.post({
    url: _.ANM.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: r
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, i;
    s.Z.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (i = e.body.user_discount_offer) && void 0 !== i ? i : null
    })
  }).catch(e => {
    404 === e.status && s.Z.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}
async function I(e) {
  if (null != e && null == e.applied_at) try {
    await i.tn.post({
      url: _.ANM.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}