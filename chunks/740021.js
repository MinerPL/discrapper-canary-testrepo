i.d(n, {
    Z: function () {
        return T;
    }
}), i(47120);
var t = i(735250);
i(470079);
var o = i(442837), s = i(974674), l = i(696826), a = i(420660), r = i(233440), c = i(314897), d = i(158776), u = i(699516), I = i(998502), E = i(332390), _ = i(877485), f = i(505737), Z = i(204197), m = i(78675), S = i(438163), v = i(652853), x = i(900687), h = i(228168), N = i(182294), g = i(602091), C = i(231338), p = i(327570);
let R = I.ZP.getEnableHardwareAcceleration() ? s.Xo : s.qE;
function T(e) {
    let {
            user: n,
            displayProfile: i,
            activity: s,
            guildId: I,
            channelId: T,
            transitionState: M,
            viewProfileItem: j,
            onClose: A
        } = e, {theme: P} = (0, v.z)(), U = (0, f.Z)(n.id, I), {
            avatarSrc: L,
            eventHandlers: O,
            avatarDecorationSrc: b
        } = (0, Z.Z)({
            user: n,
            guildId: null == i ? void 0 : i.guildId,
            size: N.EF.SIZE_120
        }), {
            originalFriendingEnabled: y,
            improvedFriendingEnabled: D
        } = (0, _.V)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: B,
            activeInviteToCallCtaEnabled: F
        } = (0, E.l)({ location: 'SimplifiedUserProfileModalHeader' }), G = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), k = (0, o.e7)([c.default], () => c.default.getId() === n.id), [w, Y] = (0, o.Wu)([d.Z], () => {
            let e = d.Z.isMobileOnline(n.id);
            return (0, r.W)(n, T) ? [
                C.Sk.UNKNOWN,
                e
            ] : (0, a.Z)(s) ? [
                C.Sk.STREAMING,
                e
            ] : [
                d.Z.getStatus(n.id),
                e
            ];
        });
    return (0, t.jsxs)('header', {
        children: [
            (0, t.jsx)(m.Z, {
                user: n,
                displayProfile: i,
                profileType: h.y0.FULL_SIZE,
                hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
            }),
            (0, t.jsxs)('div', {
                className: p.headerInner,
                children: [
                    (0, t.jsx)('div', {
                        ...O,
                        children: (0, t.jsx)(R, {
                            src: L,
                            avatarDecoration: b,
                            size: N.EF.SIZE_120,
                            className: p.avatar,
                            status: w,
                            statusBackdropColor: (0, l.QF)(P),
                            'aria-label': n.username,
                            isMobile: Y,
                            statusTooltip: !0,
                            statusTooltipDelay: h.vB
                        })
                    }),
                    (0, t.jsx)(x.Z, {
                        user: n,
                        isCurrentUser: k,
                        guildId: I,
                        canDM: U,
                        relationshipType: G,
                        originalFriendingEnabled: y,
                        improvedFriendingEnabled: D,
                        persistentCallCtaEnabled: B,
                        activeInviteToCallCtaEnabled: F,
                        viewProfileItem: j,
                        onClose: A
                    }),
                    (0, t.jsx)(S.Z, {
                        user: n,
                        profileType: h.y0.FULL_SIZE,
                        hasEntered: M === g.Dv.ENTERED,
                        onClose: A
                    })
                ]
            })
        ]
    });
}
