var r = n(544891), i = n(704215), a = n(570140), o = n(605236), s = n(675478), l = n(981631);
t.Z = {
    async fetchUserTrialOffer() {
        try {
            let {body: e} = await r.tn.get({
                url: l.ANM.USER_TRIAL_OFFER,
                oldFormErrors: !0
            });
            null == e && (0, o.un)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.Z.dispatch({
                type: 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS',
                userTrialOffer: e
            });
        } catch (e) {
            a.Z.dispatch({ type: 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS' });
        }
    },
    async acknowledgeUserTrialOffer(e) {
        if (null == e.expires_at)
            try {
                let {body: t} = await r.tn.post({ url: l.ANM.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id) });
                a.Z.dispatch({
                    type: 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS',
                    userTrialOffer: t
                });
            } catch (e) {
                404 === e.status && a.Z.dispatch({
                    type: 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS',
                    userTrialOffer: null
                });
            }
    }
};
