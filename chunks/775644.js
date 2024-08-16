var i = n(544891),
    r = n(570140),
    s = n(881052),
    l = n(122289),
    a = n(981631);
let o = Object.freeze({});
async function u(e) {
    let { code: t, options: n = o, onRedeemed: u, onError: d } = e,
        { channelId: c = null, paymentSource: _ = null } = n;
    r.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await i.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: c,
                payment_source_id: null == _ ? void 0 : _.id,
                gateway_checkout_context: await (0, l.cn)(_)
            },
            oldFormErrors: !0
        });
        return (
            r.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_SUCCESS',
                code: t,
                entitlement: e.body
            }),
            null == u || u(),
            {
                code: t,
                entitlement: e
            }
        );
    } catch (n) {
        let e = new s.HF(n);
        throw (
            (r.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_FAILURE',
                code: t,
                error: e
            }),
            null == d || d(e),
            e)
        );
    }
}
t.Z = { redeemGiftCode: u };
