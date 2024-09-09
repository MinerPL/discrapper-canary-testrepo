a.d(n, {
    Z: function () {
        return A;
    }
});
var i = a(735250);
a(470079);
var r = a(481060),
    s = a(81245),
    o = a(867176),
    l = a(654904),
    t = a(486324),
    u = a(228168),
    c = a(689938),
    d = a(360247);
function A(e) {
    let { user: n, displayProfile: a, guildId: A, canUsePremiumCustomization: E, pendingBanner: _, isTryItOutFlow: I, disabledInputs: P, onUpsellClick: p } = e,
        v = E || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || !1,
        N = v ? r.PencilIcon : r.NitroWheelIcon,
        m = (0, s.Mu)('ProfileCustomizationPreviewBanner', v);
    return (0, i.jsx)(o.Z, {
        user: n,
        displayProfile: a,
        guildId: A,
        profileType: u.y0.BITE_SIZE,
        pendingBanner: _,
        canUsePremiumProfileCustomization: E,
        children:
            !P &&
            (0, i.jsxs)(r.Clickable, {
                onClick: () => {
                    if (!v && !m) {
                        null == p || p();
                        return;
                    }
                    (0, l.$r)(t.pC.BANNER, A, I);
                },
                className: d.clickable,
                children: [
                    (0, i.jsx)(N, {
                        size: 'xs',
                        color: 'white'
                    }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: v || m ? c.Z.Messages.CHANGE_BANNER : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                    })
                ]
            })
    });
}
