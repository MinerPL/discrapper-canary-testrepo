n.d(t, {
    w: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var a = n(512722),
    i = n.n(a),
    l = n(481060),
    s = n(598),
    o = n(698708),
    u = n(614277),
    c = n(689938),
    d = n(642852);
function I(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: a, application: I } = (0, s.usePaymentContext)();
    i()(null != a, 'Expected selectedSkuId'), i()(null != I, 'Expected application');
    let _ = n[a];
    i()(null != _, 'Expected sku');
    let f = c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
        applicationName: I.name,
        itemName: _.name
    });
    return (0, r.jsxs)(u.C3, {
        children: [
            (0, r.jsx)(o.Z, {}),
            (0, r.jsxs)('div', {
                className: d.confirmation,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: 'heading-xxl/bold',
                        className: d.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: f
                    }),
                    (0, r.jsx)('div', { className: d.divider }),
                    (0, r.jsx)(l.Button, {
                        onClick: t,
                        children: c.Z.Messages.CLOSE
                    })
                ]
            })
        ]
    });
}
