t.d(a, {
    F: function () {
        return u;
    },
    b: function () {
        return d;
    }
});
var s = t(735250);
t(470079);
var n = t(512722),
    l = t.n(n),
    r = t(481060),
    o = t(598),
    i = t(185139),
    c = t(689938);
let u = (e) => {
    let { className: a } = e;
    return (0, s.jsx)(r.FormSection, {
        className: a,
        children: (0, s.jsx)(r.FormTitle, { children: c.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION })
    });
};
function d(e) {
    let { steps: a, currentStep: t, paymentError: n, className: r } = e,
        { steps: c, step: d, paymentError: E } = (0, o.usePaymentContext)();
    return (
        (a = null != a ? a : c),
        null == t && null != d && (t = d),
        l()(t, 'step should be set'),
        l()(a, 'step should be set'),
        (n = null != n ? n : E),
        (0, s.jsx)(i.Z, {
            steps: a,
            currentStep: t,
            paymentError: n,
            body: (0, s.jsx)(u, { className: r }),
            footer: null
        })
    );
}
