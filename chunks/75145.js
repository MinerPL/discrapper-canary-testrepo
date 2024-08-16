n.d(t, {
    K: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(151059);
let l = 41;
t.Z = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = 0.2 } = e;
    return (0, r.jsxs)('div', {
        className: a()(o.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: o.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: o.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: a()(o.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: o.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: o.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(s.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: o.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: o.nitroTopDividerLower
            })
        ]
    });
};
