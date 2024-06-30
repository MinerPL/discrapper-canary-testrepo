t.d(a, {
    F: function () {
        return u;
    },
    b: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var r = t(512722), s = t.n(r), l = t(481060), o = t(598), i = t(185139), c = t(689938);
let u = e => {
    let {className: a} = e;
    return (0, n.jsx)(l.FormSection, {
        className: a,
        children: (0, n.jsx)(l.FormTitle, { children: c.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION })
    });
};
function d(e) {
    let {
            steps: a,
            currentStep: t,
            paymentError: r,
            className: l
        } = e, {
            steps: c,
            step: d,
            paymentError: E
        } = (0, o.usePaymentContext)();
    return a = null != a ? a : c, null == t && null != d && (t = d), s()(t, 'step should be set'), s()(a, 'step should be set'), r = null != r ? r : E, (0, n.jsx)(i.Z, {
        steps: a,
        currentStep: t,
        paymentError: r,
        body: (0, n.jsx)(u, { className: l }),
        footer: null
    });
}
