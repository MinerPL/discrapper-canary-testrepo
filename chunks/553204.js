n.d(t, {
    Z: function () {
        return m;
    }
});
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(477690), o = n(481060), c = n(518738), d = n(208567), u = n(176278), _ = n(624138), E = n(689938), I = n(15110);
let T = (0, _.Mg)(l.Z.ROLE_ICON_UPLOADER_ICON_SIZE);
function m(e) {
    let {
            role: t,
            'aria-label': n = E.Z.Messages.UPLOAD_IMAGE,
            className: i,
            onClick: l,
            disabled: _ = !1
        } = e, m = a.useRef(null), N = a.useMemo(() => null != t ? (0, c.Kz)(t, T) : null, [t]), S = null != N ? (0, s.jsx)(u.Z, {
            enableTooltip: !1,
            className: I.icon,
            ...N
        }) : (0, s.jsx)(o.ImagePlusIcon, {
            size: 'md',
            color: 'currentColor',
            className: I.icon
        });
    return (0, s.jsx)(o.FocusRing, {
        ringTarget: m,
        children: (0, s.jsxs)(o.Clickable, {
            'aria-label': n,
            className: r()(I.container, i, { [I.disabled]: _ }),
            onClick: _ ? void 0 : l,
            'aria-disabled': _,
            children: [
                (0, s.jsx)('div', {
                    ref: m,
                    className: I.preview,
                    children: S
                }),
                null != N ? (0, s.jsx)(d.S, { className: I.uploaderIcon }) : null
            ]
        })
    });
}
