n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var s = n(120356), i = n.n(s), l = n(442837), o = n(481060), a = n(906732), c = n(1585), d = n(158776), u = n(998502), f = n(445924), m = n(654904), E = n(486324), p = n(532277);
let _ = u.ZP.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;
function h(e) {
    let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: u,
            previewAvatar: h,
            previewAvatarDecoration: I,
            previewTheme: g,
            previewPrimaryColor: v,
            className: C,
            disabledInputs: x,
            isTryItOutFlow: Z,
            onUpsellClick: P
        } = e, {analyticsLocations: A} = (0, a.ZP)(), N = (0, l.e7)([d.Z], () => d.Z.getStatus(t.id)), T = null == n || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || u, S = (0, r.jsx)(_, {
            src: h,
            avatarDecoration: I,
            imageClassName: i()(C, { [p.overlay]: !x }),
            size: o.AvatarSizes.SIZE_80,
            'aria-label': t.username,
            status: N,
            statusTooltip: !1,
            statusBackdropColor: null != v ? (0, o.getStatusBackdropColor)(g) : void 0
        });
    return x ? (0, r.jsx)('div', {
        className: p.avatar,
        children: S
    }) : T ? (0, r.jsx)(o.Popout, {
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, r.jsx)(f.Z, {
                className: p.menu,
                onClose: t,
                onChangeAvatar: () => (0, m.$r)(E.pC.AVATAR, null == n ? void 0 : n.id, Z),
                onChangeAvatarDecoration: () => {
                    (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: A,
                        isTryItOutFlow: Z
                    });
                }
            });
        },
        children: e => (0, r.jsxs)(o.Clickable, {
            ...e,
            className: i()(p.avatar, p.clickable),
            children: [
                S,
                (0, r.jsx)(o.PencilIcon, {
                    size: 'custom',
                    className: p.overlayIcon,
                    width: 20,
                    height: 20,
                    color: 'white'
                })
            ]
        })
    }) : (0, r.jsxs)(o.Clickable, {
        onClick: P,
        className: i()(p.avatar, p.clickable),
        children: [
            S,
            (0, r.jsx)(o.NitroWheelIcon, {
                size: 'custom',
                className: p.overlayIcon,
                width: 20,
                height: 20,
                color: 'white'
            })
        ]
    });
}
