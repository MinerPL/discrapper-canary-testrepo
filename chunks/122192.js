t.d(a, {
    j: function () {
        return u;
    }
});
var n = t(735250), r = t(470079), s = t(481060), l = t(462566);
t(285952);
var o = t(603421), i = t(689938), c = t(202675);
let u = e => {
    let {
            billingError: a,
            onCardInfoChange: t
        } = e, u = null != a && (null == a.code || (0, o.ly)(a) === o.Rg.CREDIT_CARD_INFORMATION);
    return (0, n.jsxs)(r.Fragment, {
        children: [
            u ? (0, n.jsx)(s.FormErrorBlock, {
                className: c.errorBlock,
                children: i.Z.Messages.BILLING_ERROR_SECTION_CARD
            }) : null,
            (0, n.jsx)(l.Z, {
                onCardInfoChange: t,
                error: a
            })
        ]
    });
};
