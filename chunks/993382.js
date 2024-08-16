a.r(s), a(47120);
var t = a(735250),
    r = a(470079),
    i = a(442837),
    n = a(481060),
    l = a(367907),
    o = a(313201),
    c = a(434404),
    d = a(999382),
    E = a(416162),
    S = a(296386),
    _ = a(919947),
    m = a(506491),
    R = a(957783),
    x = a(753583),
    u = a(219369),
    g = a(731455),
    h = a(981631),
    I = a(689938),
    C = a(457172),
    p = a(438825);
s.default = (e) => {
    let { transitionState: s, onClose: T } = e,
        { guild: N, guildMetadata: v } = (0, i.cj)([d.Z], () => d.Z.getProps()),
        O = (0, o.Dt)(),
        [D, f] = r.useState(!1),
        [b, j] = r.useState(0),
        [A, V] = r.useState(!1);
    if (
        (r.useEffect(() => {
            l.ZP.trackWithMetadata(h.rMx.OPEN_MODAL, { type: h.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == N)
    )
        return null;
    let M = (0, t.jsx)(m.Z, {
            guild: N,
            headerId: O
        }),
        L = (0, t.jsx)(_.Z, {
            guild: N,
            guildMetadata: v,
            headerId: O
        }),
        Z = (0, t.jsx)(x.Z, {
            guild: N,
            guildMetadata: v,
            headerId: O
        }),
        y = (0, t.jsx)(R.Z, {
            guild: N,
            headerId: O,
            onAgreedChange: V
        }),
        P = (0, t.jsx)('img', {
            alt: '',
            src: p,
            className: C.footerImage,
            width: 240
        }),
        k = async () => {
            if (0 === b) {
                f(!0);
                try {
                    await c.Z.saveGuild(
                        N.id,
                        { description: N.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        j(b + 1),
                        (0, u.Nx)(u.tK.DESCRIPTION, u.tK.CATEGORIES, N.id);
                } catch (e) {}
            } else if (1 === b) j(b + 1), (0, u.Nx)(u.tK.CATEGORIES, u.tK.TAGS, N.id);
            else if (2 === b) {
                f(!0);
                try {
                    await (0, S.Vv)({
                        guildId: N.id,
                        primaryCategoryId: v.primaryCategoryId,
                        keywords: v.keywords,
                        emojiDiscoverabilityEnabled: v.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: v.partnerActionedTimestamp,
                        partnerApplicationTimestamp: v.partnerApplicationTimestamp,
                        isPublished: v.isPublished,
                        reasonsToJoin: v.reasonsToJoin,
                        socialLinks: v.socialLinks,
                        about: v.about
                    }),
                        j(b + 1),
                        (0, u.Nx)(u.tK.TAGS, u.tK.AGREE_TO_RULES, N.id);
                } catch (e) {}
            }
            f(!1);
        },
        Y = [
            {
                modalContent: M,
                disableNextStep: null == N.description,
                overviewTitle: I.Z.Messages.SERVER_DISCOVERY_DESCRIPTION
            },
            {
                modalContent: L,
                disableNextStep: v.primaryCategoryId === g.o3 || null == v.primaryCategoryId,
                overviewTitle: I.Z.Messages.SERVER_DISCOVERY_CATEGORY
            },
            {
                modalContent: Z,
                disableNextStep: 0 === v.keywords.length,
                overviewTitle: I.Z.Messages.SERVER_DISCOVERY_TAGS
            },
            {
                modalContent: y,
                disableNextStep: !A,
                overviewTitle: I.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
            }
        ];
    return (0, t.jsx)(E.Z, {
        stepData: Y,
        title: I.Z.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
        transitionState: s,
        onClose: T,
        completeButtonText: I.Z.Messages.ALL_DONE,
        onNextPressed: k,
        onPrevPressed: () => {
            j(b - 1);
        },
        forceStep: b,
        onComplete: () => {
            let e = N.features;
            !N.hasFeature(h.oNc.DISCOVERABLE) && e.add(h.oNc.DISCOVERABLE),
                c.Z.saveGuild(N.id, {
                    features: e,
                    description: N.description
                }),
                (0, n.openModalLazy)(async () => {
                    let { default: e } = await a.e('89069').then(a.bind(a, 646364));
                    return (s) =>
                        (0, t.jsx)(e, {
                            ...s,
                            guild: N
                        });
                });
        },
        overviewFooter: P,
        submitting: D,
        sequencerClassName: C.container
    });
};
