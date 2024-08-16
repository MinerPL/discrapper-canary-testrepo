n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(789020);
var r = n(735250),
    i = n(470079),
    a = n(865427),
    s = n(853425),
    o = n(830121);
let l = RegExp('^' + o.oO.source, o.oO.flags);
function u(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? l.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let o = e.target[0];
            return (0, a.mG)(o)
                ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)('span', { children: o }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(s.Z, { url: o }, o) }, n.key)]
                  })
                : (0, r.jsx)('span', { children: o });
        },
        order: 6
    };
}
