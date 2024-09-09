t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(512722),
    i = t.n(a),
    r = t(481060),
    o = t(100527),
    l = t(906732),
    c = t(509545),
    d = t(74538),
    _ = t(937615),
    E = t(374649),
    u = t(474936),
    I = t(981631),
    T = t(689938),
    S = t(642140);
function N(e) {
    let { subscription: s, withOverheadSeparator: t } = e,
        { analyticsLocations: a } = (0, l.ZP)(),
        [N] = (0, E.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == N) return null;
    let C = t ? S.finePrintWithOverheadSeparator : S.finePrint,
        m = N.invoiceItems.find((e) => {
            let { subscriptionPlanId: s } = e;
            return (0, d.uZ)(s);
        });
    if (null == m) return null;
    let A = m.subscriptionPlanId,
        O = c.Z.get(A);
    i()(null != O, 'Missing plan');
    let g = (0, _.T4)(N.total, N.currency),
        h = '';
    return (
        O.interval === u.rV.YEAR
            ? (h = T.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
                  price: g,
                  termsUrl: I.EYA.TERMS,
                  paidURL: I.EYA.PAID_TERMS,
                  privacyUrl: I.EYA.PRIVACY
              }))
            : O.interval === u.rV.MONTH &&
              (h =
                  1 === O.intervalCount
                      ? T.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
                            price: g,
                            termsUrl: I.EYA.TERMS,
                            paidURL: I.EYA.PAID_TERMS,
                            privacyUrl: I.EYA.PRIVACY
                        })
                      : T.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
                            price: g,
                            termsUrl: I.EYA.TERMS,
                            paidURL: I.EYA.PAID_TERMS,
                            privacyUrl: I.EYA.PRIVACY,
                            intervalCount: O.intervalCount
                        })),
        (0, n.jsx)(r.Text, {
            color: 'text-muted',
            className: C,
            variant: 'text-xs/normal',
            children: h
        })
    );
}
function C(e) {
    let { subscription: s, withOverheadSeparator: t } = e;
    return s.status === I.O0b.CANCELED || s.isPurchasedExternally
        ? null
        : (0, n.jsx)(N, {
              subscription: s,
              withOverheadSeparator: t
          });
}
