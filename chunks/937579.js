"use strict";
n.r(t), n.d(t, {
  acknowledgeUserOffer: function() {
    return h
  },
  fetchUserOffer: function() {
    return c
  }
});
var l = n("544891"),
  a = n("524437"),
  s = n("570140"),
  i = n("605236"),
  r = n("675478"),
  o = n("295226"),
  u = n("424082"),
  d = n("981631");
async function c() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    {
      annualDiscountsEnabled: t
    } = (0, u.getAnnualDiscountsExperimentConfig)("PremiumManager"),
    n = t && o.default.shouldFetchAnnualOffer();
  if (e) {
    s.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var c, h, p;
      let e = await l.HTTP.post({
          url: d.Endpoints.USER_OFFER
        }),
        t = null !== (c = e.body.user_trial_offer) && void 0 !== c ? c : null,
        o = null !== (h = e.body.user_discount) && void 0 !== h ? h : null,
        u = null !== (p = e.body.user_discount_offer) && void 0 !== p ? p : null;
      return null == t && (0, i.isDismissibleContentDismissed)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, r.removeDismissedContent)(a.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: t,
        userDiscount: o,
        userDiscountOffer: u
      }), null == t && n && f(), {
        userTrialOffer: t,
        userDiscount: o,
        userDiscountOffer: u
      }
    } catch (e) {
      s.default.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
  n && f()
}
async function f() {
  try {
    var e;
    let t = await l.HTTP.post({
        url: d.Endpoints.ANNUAL_USER_OFFER
      }),
      n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
    null != n && (p(n), s.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: n
    }))
  } catch (e) {
    s.default.dispatch({
      type: "BILLING_ANNUAL_USER_OFFER_FETCH_FAIL"
    })
  }
}

function h(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    a = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== a) return l.HTTP.post({
    url: d.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: a
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, l;
    s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (l = e.body.user_discount_offer) && void 0 !== l ? l : null
    })
  }).catch(e => {
    404 === e.status && s.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}
async function p(e) {
  if (null != e && null == e.applied_at) try {
    await l.HTTP.post({
      url: d.Endpoints.USER_OFFER_REDEEM,
      body: {
        user_discount_offer_id: e.id
      }
    })
  } catch (e) {
    throw e
  }
}