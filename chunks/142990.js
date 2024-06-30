n.d(t, {
    Z: function () {
        return u;
    }
}), n(789020);
var r = n(735250), i = n(470079), a = n(865427), o = n(853425), s = n(830121);
let l = RegExp('^' + s.oO.source, s.oO.flags);
function u(e) {
    return {
        match: (e, t) => t.allowLinks && t.allowDevLinks ? l.exec(e) : null,
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let s = e.target[0];
            return (0, a.mG)(s) ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('span', { children: s }),
                    (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(o.Z, { url: s }, s) }, n.key)
                ]
            }) : (0, r.jsx)('span', { children: s });
        },
        order: 6
    };
}
