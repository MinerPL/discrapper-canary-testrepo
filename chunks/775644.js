var i = n(544891), s = n(570140), r = n(881052), l = n(122289), o = n(981631);
let a = Object.freeze({});
async function u(e) {
    let {
            code: t,
            options: n = a,
            onRedeemed: u,
            onError: d
        } = e, {
            channelId: c = null,
            paymentSource: _ = null
        } = n;
    s.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await i.tn.post({
            url: o.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: c,
                payment_source_id: null == _ ? void 0 : _.id,
                gateway_checkout_context: await (0, l.cn)(_)
            },
            oldFormErrors: !0
        });
        return s.Z.dispatch({
            type: 'GIFT_CODE_REDEEM_SUCCESS',
            code: t,
            entitlement: e.body
        }), null == u || u(), {
            code: t,
            entitlement: e
        };
    } catch (n) {
        let e = new r.HF(n);
        throw s.Z.dispatch({
            type: 'GIFT_CODE_REDEEM_FAILURE',
            code: t,
            error: e
        }), null == d || d(e), e;
    }
}
t.Z = { redeemGiftCode: u };
