s.d(n, {
    Z: function () {
        return I;
    },
    e: function () {
        return u;
    }
});
var i = s(735250);
s(470079);
var t = s(120356),
    l = s.n(t),
    r = s(481060),
    a = s(689938),
    c = s(341896),
    o = s(491809);
function u() {
    return (0, i.jsxs)('div', {
        className: l()(c.upsellFooter, c.reverseTrialUpsellContainer),
        children: [
            (0, i.jsx)('img', {
                src: o,
                alt: 'reverse trial unlock',
                className: c.unlockIcon
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: c.upsellText,
                children: a.Z.Messages.PREMIUM_REVERSE_TRIAL_SERVER_BOOST.format()
            })
        ]
    });
}
function I(e) {
    let { text: n, color: s } = e;
    return (0, i.jsxs)('div', {
        className: c.upsellFooter,
        children: [
            (0, i.jsx)(r.NitroWheelIcon, {
                size: 'md',
                className: c.upsellFooterIcon,
                color: s
            }),
            (0, i.jsx)('div', { children: n })
        ]
    });
}
