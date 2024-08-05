n.d(t, {
  T: function() {
return c;
  },
  a: function() {
return d;
  }
});
var r = n(544891),
  i = n(704215),
  a = n(570140),
  s = n(605236),
  o = n(675478),
  l = n(626135),
  u = n(981631);
async function c(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (t) {
a.Z.dispatch({
  type: 'BILLING_USER_OFFER_FETCH_START'
});
try {
  var n, c, d;
  null != e && l.default.track(u.rMx.FETCH_USER_OFFER_STARTED, {
    call_location: e
  });
  let t = await r.tn.post({
      url: u.ANM.USER_OFFER
    }),
    _ = null !== (n = t.body.user_trial_offer) && void 0 !== n ? n : null,
    E = null !== (c = t.body.user_discount) && void 0 !== c ? c : null,
    f = null !== (d = t.body.user_discount_offer) && void 0 !== d ? d : null;
  return null == _ && (0, s.un)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.Z.dispatch({
    type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
    userTrialOffer: _,
    userDiscount: E,
    userDiscountOffer: f
  }), {
    userTrialOffer: _,
    userDiscount: E,
    userDiscountOffer: f
  };
} catch (e) {
  a.Z.dispatch({
    type: 'BILLING_USER_OFFER_FETCH_FAIL'
  });
}
  }
}

function d(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
i = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== i)
return r.tn.post({
  url: u.ANM.USER_OFFER_ACKNOWLEDGED,
  body: {
    user_trial_offer_id: n,
    user_discount_offer_id: i
  },
  oldFormErrors: !0
}).then(e => {
  var t, n, r;
  a.Z.dispatch({
    type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
    userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
    userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
    userDiscountOffer: null !== (r = e.body.user_discount_offer) && void 0 !== r ? r : null
  });
}).catch(e => {
  404 === e.status && a.Z.dispatch({
    type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
    userTrialOffer: null,
    userDiscount: null,
    userDiscountOffer: null
  });
});
}