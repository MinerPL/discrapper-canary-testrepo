var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(283029), o = s(964497);
t.Z = function (e) {
    let {
        className: t,
        hasCooldown: a,
        isCanceled: l,
        useReducedMotion: c
    } = e;
    return (0, n.jsxs)('div', {
        className: i()(o.boostIconContainer, t),
        children: [
            l ? (0, n.jsx)('img', {
                className: i()(o.boostIcon, o.boostIconCanceled),
                src: s(457026),
                alt: ''
            }) : (0, n.jsx)(r.Z, {
                className: o.boostIcon,
                boostInCooldown: a,
                useReducedMotion: c
            }),
            !l && a && (0, n.jsx)('img', {
                className: o.snowflake,
                src: s(765028),
                alt: ''
            })
        ]
    });
};
