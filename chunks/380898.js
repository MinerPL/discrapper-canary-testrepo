s.d(n, {
    Z: function () {
        return u;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(16084), r = s(86040), a = s(51499), c = s(614277), o = s(94250);
function u() {
    let [e, n] = i.useState(!1), s = async () => {
            n(!0), await (0, t.xA)();
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Z, {}),
            (0, l.jsx)(c.C3, {
                children: (0, l.jsx)(r.C, {
                    className: o.body,
                    isEmailResent: e,
                    resendEmail: s
                })
            }),
            (0, l.jsx)(c.O3, { children: (0, l.jsx)(r.N, {}) })
        ]
    });
}
