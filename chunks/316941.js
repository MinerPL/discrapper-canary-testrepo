"use strict";
var i = n(544891),
  r = n(704215),
  s = n(570140),
  o = n(605236),
  a = n(675478),
  l = n(981631);
t.Z = {
  async fetchUserTrialOffer() {
    try {
      let {
        body: e
      } = await i.tn.get({
        url: l.ANM.USER_TRIAL_OFFER,
        oldFormErrors: !0
      });
      null == e && (0, o.un)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, a.w9)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), s.Z.dispatch({
        type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
        userTrialOffer: e
      })
    } catch (e) {
      s.Z.dispatch({
        type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
      })
    }
  },
  async acknowledgeUserTrialOffer(e) {
    if (null == e.expires_at) try {
      let {
        body: t
      } = await i.tn.post({
        url: l.ANM.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
      });
      s.Z.dispatch({
        type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
        userTrialOffer: t
      })
    } catch (e) {
      404 === e.status && s.Z.dispatch({
        type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
        userTrialOffer: null
      })
    }
  }
}