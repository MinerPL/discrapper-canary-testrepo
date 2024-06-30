i.d(n, {
    Z: function () {
        return I;
    }
});
var t = i(735250);
i(470079);
var o = i(481060), s = i(239091), l = i(785717), a = i(705556), r = i(30556), c = i(225714), d = i(228168), u = i(26912);
function I(e) {
    let {
            user: n,
            isCurrentUser: I,
            guildId: E,
            friendToken: _,
            canDM: f,
            relationshipType: Z,
            originalFriendingEnabled: m = !1,
            improvedFriendingEnabled: S = !1,
            persistentCallCtaEnabled: v = !1,
            activeInviteToCallCtaEnabled: x = !1,
            viewProfileItem: h,
            onClose: N
        } = e, {trackUserProfileAction: g} = (0, l.KZ)();
    function C(e) {
        g({ action: 'PRESS_OPTIONS' }), (0, s.jW)(e, async () => {
            let {default: e} = await i.e('29136').then(i.bind(i, 193646));
            return i => (0, t.jsx)(e, {
                ...i,
                originalFriendingEnabled: m,
                relationshipType: Z,
                viewProfileItem: h,
                user: n,
                isCurrentUser: I,
                guildId: E,
                trackUserProfileAction: g,
                onClose: N
            });
        });
    }
    return (0, t.jsxs)('div', {
        className: u.buttons,
        children: [
            (m || S) && (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(c.Z, {
                        user: n,
                        isCurrentUser: I,
                        relationshipType: Z,
                        originalFriendingEnabled: m,
                        improvedFriendingEnabled: S,
                        persistentCallCtaEnabled: v,
                        activeInviteToCallCtaEnabled: x,
                        friendToken: _,
                        onClose: N
                    }),
                    I && (0, t.jsx)(a.Z, {
                        user: n,
                        guildId: E,
                        profileType: d.y0.FULL_SIZE,
                        onClose: N
                    }),
                    !n.isNonUserBot() && m ? (0, t.jsx)(o.Clickable, {
                        focusProps: { offset: { left: 8 } },
                        onClick: C,
                        children: (0, t.jsx)(o.MoreVerticalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u.additionalActionsIcon
                        })
                    }) : null
                ]
            }),
            !m && !S && (f ? (0, t.jsx)(r.Z, {
                user: n,
                onClose: N
            }) : (0, t.jsx)(a.Z, {
                user: n,
                guildId: E,
                profileType: d.y0.FULL_SIZE,
                onClose: N
            }))
        ]
    });
}
