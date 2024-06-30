i.d(n, {
    Z: function () {
        return g;
    }
}), i(47120);
var t = i(735250);
i(470079);
var o = i(481060), s = i(100527), l = i(906732), a = i(5192), r = i(785717), c = i(318661), d = i(741308), u = i(681837), I = i(502762), E = i(530), _ = i(437758), f = i(544989), Z = i(740021), m = i(616140), S = i(29530), v = i(228168), x = i(981631), h = i(689938), N = i(327570);
function g(e) {
    let {
            user: n,
            currentUser: i,
            guildId: g,
            channelId: C,
            messageId: p,
            roleId: R,
            initialSection: T,
            initialSubsection: M,
            transitionState: j,
            onClose: A,
            sourceAnalyticsLocations: P = []
        } = e, U = g === x.ME ? void 0 : g, L = (0, c.ZP)(n.id, U), {analyticsLocations: O} = (0, l.ZP)([
            ...P,
            s.Z.SIMPLIFIED_PROFILE_MODAL
        ]), b = (0, S.Z)(n);
    return (0, t.jsx)(l.Gt, {
        value: O,
        children: (0, t.jsx)(r.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: U,
            channelId: C,
            messageId: p,
            roleId: R,
            showGuildProfile: !0,
            children: (0, t.jsx)(o.ModalRoot, {
                transitionState: j,
                className: N.root,
                hideShadow: !0,
                'aria-label': h.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsxs)(I.Z, {
                    user: n,
                    displayProfile: L,
                    profileType: v.y0.FULL_SIZE,
                    children: [
                        (0, t.jsx)(f.Z, {
                            profileType: v.y0.FULL_SIZE,
                            children: (0, t.jsx)(_.Z, {
                                user: n,
                                guildId: U
                            })
                        }),
                        (0, t.jsx)(Z.Z, {
                            user: n,
                            displayProfile: L,
                            guildId: U,
                            channelId: C,
                            activity: void 0,
                            transitionState: j,
                            onClose: A
                        }),
                        (0, t.jsxs)('div', {
                            className: N.body,
                            children: [
                                (0, t.jsx)(E.Z, {
                                    user: n,
                                    profileType: v.y0.FULL_SIZE,
                                    nickname: a.ZP.getName(U, C, n),
                                    pronouns: null == L ? void 0 : L.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, t.jsx)(u.Z, { userId: n.id }),
                                    tags: (0, t.jsx)(d.Z, {
                                        displayProfile: L,
                                        profileType: v.y0.FULL_SIZE,
                                        onClose: A
                                    })
                                }),
                                (0, t.jsx)(I.Z.Overlay, {
                                    className: N.overlay,
                                    children: (0, t.jsx)(m.Z, {
                                        user: n,
                                        currentUser: i,
                                        displayProfile: L,
                                        items: b,
                                        initialSection: T,
                                        initialSubsection: M,
                                        onClose: A
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
