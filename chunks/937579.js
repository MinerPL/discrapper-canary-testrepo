n.d(t, {
    Tf: function () {
        return d;
    },
    ab: function () {
        return E;
    }
});
var r = n(544891), i = n(704215), a = n(570140), o = n(605236), s = n(675478), l = n(295226), u = n(424082), c = n(981631);
async function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], {annualDiscountsEnabled: t} = (0, u.lf)('PremiumManager'), n = t && l.Z.shouldFetchAnnualOffer();
    if (e) {
        a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_START' });
        try {
            var d, E, f;
            let e = await r.tn.post({ url: c.ANM.USER_OFFER }), t = null !== (d = e.body.user_trial_offer) && void 0 !== d ? d : null, l = null !== (E = e.body.user_discount) && void 0 !== E ? E : null, u = null !== (f = e.body.user_discount_offer) && void 0 !== f ? f : null;
            return null == t && (0, o.un)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.Z.dispatch({
                type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
                userTrialOffer: t,
                userDiscount: l,
                userDiscountOffer: u
            }), null == t && n && _(), {
                userTrialOffer: t,
                userDiscount: l,
                userDiscountOffer: u
            };
        } catch (e) {
            a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_FAIL' });
        }
    }
    n && _();
}
async function _() {
    try {
        var e;
        let t = await r.tn.post({ url: c.ANM.ANNUAL_USER_OFFER }), n = null !== (e = t.body.user_discount_offer) && void 0 !== e ? e : null;
        null != n && (f(n), a.Z.dispatch({
            type: 'BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS',
            userDiscountOffer: n
        }));
    } catch (e) {
        a.Z.dispatch({ type: 'BILLING_ANNUAL_USER_OFFER_FETCH_FAIL' });
    }
}
function E(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0, i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.tn.post({
            url: c.ANM.USER_OFFER_ACKNOWLEDGED,
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
async function f(e) {
    if (null != e && null == e.applied_at)
        try {
            await r.tn.post({
                url: c.ANM.USER_OFFER_REDEEM,
                body: { user_discount_offer_id: e.id }
            });
        } catch (e) {
            throw e;
        }
}
