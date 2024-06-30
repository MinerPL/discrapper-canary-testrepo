s.r(t), s.d(t, {
    default: function () {
        return L;
    }
}), s(47120);
var a = s(735250), n = s(470079), l = s(990547), i = s(481060), o = s(458879), r = s(996453), c = s(601964), d = s(99325), u = s(454432), m = s(492749), C = s(66626), _ = s(892322), x = s(15608), E = s(486527), I = s(942693);
function L(e) {
    let {
            directoryChannelId: t,
            transitionState: s,
            initialSlide: L = E.VX.CHOOSE_GUILD,
            onClose: f,
            directoryGuildName: h,
            directoryGuildId: T,
            currentCategoryId: g
        } = e, [N, M] = n.useState(L), [B, p] = n.useState(null), [Z, j] = n.useState(null), [S, b] = n.useState(null), [U, R] = n.useState(null), [A, D] = n.useState(null), [H, O] = n.useState(''), [v, G] = n.useState(null != g ? g : E.AR.UNCATEGORIZED), [y, V] = n.useState(!1), {
            availableGuilds: k,
            addedGuilds: F,
            loading: w
        } = (0, u.Z)(T, t);
    n.useEffect(() => {
        M(L);
    }, [
        M,
        L
    ]);
    let P = async () => {
            let e = A;
            if (!y) {
                if (null == S || null == Z)
                    return;
                let t = await o.Z.createGuildFromTemplate(S, U, Z);
                D(e = new c.ZP(t));
            }
            null != e && (await d.bF(t, e.id, H, v), M(E.VX.CONFIRMATION));
        }, X = { impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW };
    return (0, a.jsx)('div', {
        children: (0, a.jsx)(i.ModalRoot, {
            transitionState: s,
            disableTrack: !0,
            children: (0, a.jsx)('div', {
                className: I.container,
                children: (0, a.jsxs)(i.Slides, {
                    activeSlide: N,
                    width: 440,
                    onSlideReady: e => p(e),
                    children: [
                        (0, a.jsx)(i.Slide, {
                            id: E.VX.CHOOSE_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                            impressionProperties: X,
                            children: (0, a.jsx)(m.Z, {
                                directoryChannelId: t,
                                directoryGuildName: h,
                                onGuildChosen: e => {
                                    V(!0), M(E.VX.CUSTOMIZE_EXISTING_GUILD), D(e);
                                },
                                handleChooseCreate: () => {
                                    V(!1), M(E.VX.GUILD_TEMPLATES);
                                },
                                onClose: f,
                                availableGuilds: k,
                                addedGuilds: F,
                                loading: w
                            })
                        }),
                        (0, a.jsx)(i.Slide, {
                            id: E.VX.GUILD_TEMPLATES,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                            impressionProperties: X,
                            children: (0, a.jsx)(x.Z, {
                                directoryGuildName: h,
                                onChooseTemplate: e => {
                                    V(!1), M(E.VX.CUSTOMIZE_NEW_GUILD), j(e);
                                },
                                onClose: f,
                                onBack: () => M(E.VX.CHOOSE_GUILD)
                            })
                        }),
                        (0, a.jsx)(i.Slide, {
                            id: E.VX.CUSTOMIZE_NEW_GUILD,
                            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, a.jsx)(r.Z, {
                                guildTemplate: Z,
                                onHubGuildInfoSet: (e, t) => {
                                    b(e), R(t), M(E.VX.CUSTOMIZE_EXISTING_GUILD);
                                },
                                onClose: f,
                                onBack: () => M(E.VX.GUILD_TEMPLATES),
                                isSlideReady: B === E.VX.CUSTOMIZE_NEW_GUILD
                            })
                        }),
                        (0, a.jsx)(i.Slide, {
                            id: E.VX.CUSTOMIZE_EXISTING_GUILD,
                            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                            impressionProperties: X,
                            children: (0, a.jsx)(C.Z, {
                                directoryChannelId: t,
                                description: H,
                                onDescriptionChange: O,
                                categoryId: v,
                                onCategoryIdChange: G,
                                onSubmit: P,
                                onBack: () => M(y ? E.VX.CHOOSE_GUILD : E.VX.CUSTOMIZE_NEW_GUILD),
                                onClose: f
                            })
                        }),
                        (0, a.jsx)(i.Slide, {
                            id: E.VX.CONFIRMATION,
                            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                            impressionProperties: X,
                            children: (0, a.jsx)(_.Z, {
                                directoryGuildName: h,
                                guildToAdd: A,
                                isExistingGuildFlow: y,
                                onClose: f
                            })
                        })
                    ]
                })
            })
        })
    });
}
