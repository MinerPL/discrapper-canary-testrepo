n.r(s),
    n.d(s, {
        default: function () {
            return d;
        }
    });
var o = n(735250),
    t = n(120356),
    c = n.n(t),
    i = n(266067),
    r = n(726542),
    a = n(656649),
    l = n(689938),
    u = n(781444);
function d() {
    let { type: e } = (0, i.UO)(),
        s = (0, a.vJ)(e);
    if (null == s) return null;
    let n = r.Z.get(s);
    return (0, o.jsxs)(a.UV, {
        platformType: s,
        children: [
            (0, o.jsx)('div', {
                className: u.message,
                children: l.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({ name: n.name })
            }),
            (0, o.jsx)('div', {
                className: c()(u.message, u.details),
                children: l.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
            })
        ]
    });
}
