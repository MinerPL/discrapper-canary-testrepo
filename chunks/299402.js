n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var o = n(735250), l = n(470079), a = n(512722), r = n.n(a), s = n(990547), i = n(481060), c = n(110924), u = n(626135), _ = n(215292), d = n(382086), I = n(996453), E = n(446706), N = n(867581), m = n(675999), p = n(981631), T = n(656999);
function f(e) {
    let {
            transitionState: t,
            initialSlide: n = m._m.GUILD_TEMPLATES,
            onSuccess: a,
            onClose: f,
            onSlideChange: S,
            hasJoinButton: C
        } = e, [L, A] = l.useState(n), D = (0, c.Z)(L), [M, O] = l.useState(null), [U, R] = l.useState(null), [g, G] = l.useState(null), [h, x] = l.useState(!1);
    l.useEffect(() => {
        A(n);
    }, [
        A,
        n
    ]), l.useEffect(() => {
        L !== D && S(L);
    }, [
        S,
        L,
        D
    ]);
    let w = l.useCallback(e => {
            A(m._m.CREATION_INTENT), R(e), u.default.track(p.rMx.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code
            });
        }, []), v = l.useCallback(e => {
            x(e === m.lr.COMMUNITY), A(m._m.CUSTOMIZE_GUILD);
        }, []), Z = l.useCallback(() => A(m._m.JOIN_GUILD), [A]), P = l.useCallback(() => {
            if (L === m._m.CUSTOMIZE_GUILD) {
                A(m._m.CREATION_INTENT);
                return;
            }
            A(m._m.GUILD_TEMPLATES), R(null);
        }, [L]), k = l.useCallback(e => {
            G(e), a(e);
        }, [
            a,
            G
        ]), b = l.useCallback(() => {
            r()(null != g, 'handleSuccess called before onGuildCreated'), a(g);
        }, [
            a,
            g
        ]), B = { impression_group: s.ImpressionGroups.GUILD_ADD_FLOW };
    return (0, o.jsx)('div', {
        children: (0, o.jsx)(i.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, o.jsx)('div', {
                className: T.container,
                children: (0, o.jsxs)(i.Slides, {
                    activeSlide: L,
                    width: 440,
                    onSlideReady: e => O(e),
                    children: [
                        (0, o.jsx)(i.Slide, {
                            id: m._m.GUILD_TEMPLATES,
                            impressionName: s.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: B,
                            children: (0, o.jsx)(E.Z, {
                                isNewUser: !1,
                                onJoin: C ? Z : void 0,
                                onChooseTemplate: w,
                                onClose: f
                            })
                        }),
                        (0, o.jsx)(i.Slide, {
                            id: m._m.CREATION_INTENT,
                            impressionName: s.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: B,
                            children: (0, o.jsx)(d.Z, {
                                onClose: f,
                                onBack: P,
                                onCreationIntentChosen: v
                            })
                        }),
                        (0, o.jsx)(i.Slide, {
                            id: m._m.CUSTOMIZE_GUILD,
                            impressionName: s.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: B,
                            children: (0, o.jsx)(I.Z, {
                                guildTemplate: U,
                                onGuildCreated: k,
                                onClose: f,
                                onBack: P,
                                isSlideReady: M === m._m.CUSTOMIZE_GUILD,
                                isCommunity: h
                            })
                        }),
                        (0, o.jsx)(i.Slide, {
                            id: m._m.CHANNEL_PROMPT,
                            impressionName: s.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: B,
                            children: (0, o.jsx)(_.Z, {
                                createdGuildId: g,
                                onClose: f,
                                onChannelPromptCompleted: b,
                                isSlideReady: M === m._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, o.jsx)(i.Slide, {
                            id: m._m.JOIN_GUILD,
                            impressionName: s.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: B,
                            children: (0, o.jsx)(N.Z, {
                                onBack: P,
                                onClose: f,
                                isSlideReady: M === m._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
