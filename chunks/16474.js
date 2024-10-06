n.d(t, {
    U: function () {
        return a;
    },
    Z: function () {
        return L;
    }
});
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    _ = n(481060),
    E = n(758059),
    I = n(700582),
    m = n(906732),
    T = n(213609),
    N = n(963249),
    h = n(703656),
    C = n(594174),
    p = n(51144),
    f = n(479446),
    g = n(522558),
    A = n(441623),
    S = n(317271),
    M = n(474936),
    x = n(981631),
    O = n(182294),
    R = n(689938),
    v = n(186363);
function L(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: a, onMouseLeave: r, popoutPosition: L, analyticsPage: Z, analyticsSection: P, glow: D, showSecondaryCta: b } = e,
        j = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: U } = (0, m.ZP)(),
        { enableEmojiCTA: y } = g.w.useExperiment({ location: 'GiftIntentCard' }, { autoTrackExposure: !1 }),
        B = (0, d.e7)([A.Z], () => A.Z.getFriendAnniversaryYears(i.id));
    l.useEffect(() => {
        (0, T.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: A.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let k = () => {
            if (t === M.hX.FRIEND_ANNIVERSARY) return R.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: B });
            return (0, f.Ou)(t);
        },
        G = 'coachmark' === n,
        F = G ? v.innerContentCoachmark : v.innerContent,
        w = G ? v.recipientUserAvatarCoachmark : v.recipientUserAvatar,
        V = G ? v.currentUserAvatarCoachmark : v.currentUserAvatar,
        H = G ? v.subHeaderTextCoachmark : v.subHeaderText,
        Y = G ? _.Button.Colors.BRAND : _.Button.Colors.WHITE,
        W = G ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        K = G ? v.buttonTextPrimaryCoachmark : v.buttonTextPrimary;
    return (0, s.jsx)('div', {
        className: o()(v.content, {
            [v.contentTextCTAPopout]: null != L && !y,
            [v.outerGlow]: D,
            [v.contentCoachmark]: G
        }),
        onMouseEnter: a,
        onMouseLeave: r,
        children: (0, s.jsxs)('div', {
            className: o()(F, { [v.innerGlow]: D }),
            children: [
                (0, s.jsxs)('div', {
                    className: v.subContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: v.avatars,
                            children: [
                                (0, s.jsx)(I.Z, {
                                    className: w,
                                    user: i,
                                    'aria-label': i.username,
                                    size: O.EF.SIZE_56
                                }),
                                null != j &&
                                    (0, s.jsx)(I.Z, {
                                        className: V,
                                        user: j,
                                        'aria-label': i.username,
                                        size: O.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: v.textContainer,
                            children: [
                                (0, s.jsx)(_.Text, {
                                    variant: 'text-md/medium',
                                    color: G ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === M.hX.FRIEND_ANNIVERSARY) return R.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: p.ZP.getName(i) });
                                        return (0, f.Ou)(t);
                                    })()
                                }),
                                (0, s.jsx)(_.Text, {
                                    className: H,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === M.hX.FRIEND_ANNIVERSARY) return R.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: B });
                                        return (0, f.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: v.buttonContainer,
                    children: [
                        b &&
                            (0, s.jsx)(_.Button, {
                                className: o()(v.button, v.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(), (0, h.uL)(x.Z5c.FRIENDS), E.Z.setSection(x.pJs.ALL);
                                },
                                size: _.Button.Sizes.MEDIUM,
                                color: _.Button.Colors.CUSTOM,
                                look: _.Button.Looks.OUTLINED,
                                children: (0, s.jsx)('div', {
                                    className: v.buttonContentContainer,
                                    children: (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(v.buttonText, v.buttonTextSecondary),
                                        children: (() => {
                                            if (t === M.hX.FRIEND_ANNIVERSARY) return R.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
                                        })()
                                    })
                                })
                            }),
                        (0, s.jsx)(_.Button, {
                            className: v.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let a = (0, S.F)(t);
                                (0, N.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? a.chat : a.actionButtonCoachmark,
                                    analyticsLocations: U,
                                    analyticsObject: {
                                        page: Z,
                                        section: P,
                                        object: x.qAy.BUTTON_CTA,
                                        objectType: x.Qqv.GIFT
                                    },
                                    giftMessage: k()
                                });
                            },
                            size: _.Button.Sizes.MEDIUM,
                            color: Y,
                            children: (0, s.jsxs)('div', {
                                className: v.buttonContentContainer,
                                children: [
                                    (0, s.jsx)(_.GiftIcon, {
                                        color: W,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(v.buttonText, K),
                                        children: R.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != L &&
                    (0, s.jsx)('div', {
                        className: o()(v.connector, {
                            [v.leftPopoutConnector]: 'left' === L,
                            [v.rightPopoutConnector]: 'right' === L
                        })
                    })
            ]
        })
    });
}
((i = a || (a = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
