var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(715953);
t.Z = function (e) {
    let {
        glowOpacity: t,
        className: n
    } = e;
    return (0, r.jsxs)('div', {
        className: a()(s.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: s.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: s.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: a()(s.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: s.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: s.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(o.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: s.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', { className: s.nitroTopDividerLower })
        ]
    });
};
