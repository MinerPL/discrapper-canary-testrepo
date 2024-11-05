n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    s = n(544891),
    r = n(981631);
function l() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(''),
        [a, o] = i.useState([]);
    return {
        isSubmitting: e,
        responseMessage: n,
        entitlements: a,
        redeemVirtualCurrency: async function e(e) {
            t(!0);
            try {
                let n = (
                        await s.tn.post({
                            url: r.ANM.USER_REDEEM_VIRTUAL_CURRENCY,
                            body: { sku_id: e }
                        })
                    ).body,
                    i = n.map((e) => {
                        var t;
                        return null === (t = e.sku) || void 0 === t ? void 0 : t.name;
                    });
                return (
                    l(
                        'Successfully redeemed 1 orb for '
                            .concat(1 === i.length ? 'SKU' : 'SKUs', ': ')
                            .concat(i.join(', '), '. Entitlement ')
                            .concat(1 === n.length ? 'ID' : 'IDs', ': ')
                            .concat(n.map((e) => e.id).join(', '))
                    ),
                    o(n),
                    t(!1),
                    n
                );
            } catch (e) {
                console.error('Error redeeming virtual currency: ', e), t(!1), l('Error redeeming Virtual Currency: '.concat(e.body.message));
            }
        }
    };
}
