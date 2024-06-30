n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var s = n(481060), i = n(78675), l = n(654904), o = n(486324), a = n(228168), c = n(689938), d = n(795346);
function u(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: u,
            canUsePremiumCustomization: f,
            pendingBanner: m,
            hasProfileEffect: E,
            isTryItOutFlow: p,
            disabledInputs: _,
            onUpsellClick: h
        } = e, I = f || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1, g = I ? s.PencilIcon : s.NitroWheelIcon;
    return (0, r.jsx)(i.Z, {
        user: t,
        displayProfile: n,
        guildId: u,
        profileType: a.y0.BITE_SIZE,
        pendingBanner: m,
        hasProfileEffect: E,
        canUsePremiumCustomization: f,
        children: !_ && (0, r.jsxs)(s.Clickable, {
            onClick: () => {
                if (!I) {
                    null == h || h();
                    return;
                }
                (0, l.$r)(o.pC.BANNER, u, p);
            },
            className: d.clickable,
            children: [
                (0, r.jsx)(g, {
                    size: 'xs',
                    color: 'white'
                }),
                (0, r.jsx)(s.Heading, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: I ? c.Z.Messages.CHANGE_BANNER : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                })
            ]
        })
    });
}
