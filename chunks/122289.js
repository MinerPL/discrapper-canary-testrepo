n.d(t, {
    E2: function () {
        return s;
    },
    cn: function () {
        return o;
    },
    g9: function () {
        return u;
    },
    q2: function () {
        return l;
    }
});
var r = n(751767),
    i = n(960048),
    a = n(231338);
function s(e, t) {
    let n = new Date();
    return n.setMonth(e - 1), n.toLocaleString(t, { month: 'short' });
}
async function o(e) {
    let t = null;
    if (null != e && e.paymentGateway === a.gg.BRAINTREE) {
        let e = await (0, r.A)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function l(e, t) {
    i.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'billing'
        }
    });
}
function u(e, t) {
    i.Z.captureMessage(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'billing'
        }
    });
}
