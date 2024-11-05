n.d(t, {
    U: function () {
        return r;
    },
    Z: function () {
        return M;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(493683),
    f = n(529103),
    p = n(700582),
    g = n(906732),
    _ = n(213609),
    C = n(541716),
    E = n(28546),
    I = n(963249),
    x = n(703656),
    v = n(594174),
    N = n(626135),
    T = n(51144),
    S = n(479446),
    b = n(795448),
    A = n(441623),
    j = n(317271),
    Z = n(474936),
    R = n(981631),
    P = n(182294),
    y = n(957825),
    L = n(388032),
    O = n(17500);
function M(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: r, onMouseLeave: o, popoutPosition: M, analyticsPage: k, analyticsSection: D, glow: B, giftIntentSecondaryAction: w } = e,
        U = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: F } = (0, g.ZP)(),
        G = (0, d.e7)([A.Z], () => A.Z.getFriendAnniversaryYears(i.id));
    a.useEffect(() => {
        (0, _.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: A.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let V = () => {
            if (t === Z.hX.FRIEND_ANNIVERSARY) return L.intl.formatToPlainString(L.t['L2s/Nz'], { numberOfYears: G });
            return (0, S.Ou)(t);
        },
        H = 'coachmark' === n,
        z = H ? O.innerContentCoachmark : O.innerContent,
        W = H ? O.recipientUserAvatarCoachmark : O.recipientUserAvatar,
        K = H ? O.currentUserAvatarCoachmark : O.currentUserAvatar,
        Y = H ? O.subHeaderTextCoachmark : O.subHeaderText,
        X = H ? m.Button.Colors.BRAND : m.Button.Colors.WHITE,
        Q = H ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        q = H ? O.buttonTextPrimaryCoachmark : O.buttonTextPrimary;
    return (0, l.jsx)('div', {
        className: s()(O.content, {
            [O.outerGlow]: B,
            [O.contentCoachmark]: H
        }),
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, l.jsxs)('div', {
            className: s()(z, { [O.innerGlow]: B }),
            children: [
                (0, l.jsxs)('div', {
                    className: O.subContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: O.avatars,
                            children: [
                                (0, l.jsx)(p.Z, {
                                    className: W,
                                    user: i,
                                    'aria-label': i.username,
                                    size: P.EF.SIZE_56
                                }),
                                null != U &&
                                    (0, l.jsx)(p.Z, {
                                        className: K,
                                        user: U,
                                        'aria-label': i.username,
                                        size: P.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, l.jsxs)('div', {
                            className: O.textContainer,
                            children: [
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-md/medium',
                                    color: H ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === Z.hX.FRIEND_ANNIVERSARY) return L.intl.formatToPlainString(L.t.BWJvAA, { friendUserName: T.ZP.getName(i) });
                                        return (0, S.Ou)(t);
                                    })()
                                }),
                                (0, l.jsx)(m.Text, {
                                    className: Y,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === Z.hX.FRIEND_ANNIVERSARY) return L.intl.formatToPlainString(L.t.S3fdq6, { numberOfYears: G });
                                        return (0, S.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: O.buttonContainer,
                    children: [
                        null != w &&
                            (0, l.jsx)(m.Button, {
                                className: s()(O.button, O.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        N.default.track(R.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: w
                                        }),
                                        w === Z.X2.VIEW_ALL
                                            ? ((0, x.uL)(R.Z5c.FRIENDS), f.Z.setSection(R.pJs.ALL))
                                            : w === Z.X2.SEND_MESSAGE &&
                                              ((0, b.PV)(i.id),
                                              h.Z.openPrivateChannel(i.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, E.PG)(y.X1.GIF, C.I.NORMAL),
                                                          setTimeout(() => {
                                                              (0, E.ql)(L.intl.string(L.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: m.Button.Sizes.MEDIUM,
                                color: m.Button.Colors.CUSTOM,
                                look: m.Button.Looks.OUTLINED,
                                children: (0, l.jsx)('div', {
                                    className: O.buttonContentContainer,
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(O.buttonText, O.buttonTextSecondary),
                                        children: (() => {
                                            switch (w) {
                                                case Z.X2.VIEW_ALL:
                                                    return L.intl.string(L.t.WkxniI);
                                                case Z.X2.SEND_MESSAGE:
                                                    return L.intl.string(L.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, l.jsx)(m.Button, {
                            className: O.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let r = (0, j.F)(t);
                                (0, I.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? r.chat : r.actionButtonCoachmark,
                                    analyticsLocations: F,
                                    analyticsObject: {
                                        page: k,
                                        section: D,
                                        object: R.qAy.BUTTON_CTA,
                                        objectType: R.Qqv.GIFT
                                    },
                                    giftMessage: V()
                                });
                            },
                            size: m.Button.Sizes.MEDIUM,
                            color: X,
                            children: (0, l.jsxs)('div', {
                                className: O.buttonContentContainer,
                                children: [
                                    (0, l.jsx)(m.GiftIcon, {
                                        color: Q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, l.jsx)(m.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(O.buttonText, q),
                                        children: L.intl.string(L.t['wg/30t'])
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != M &&
                    (0, l.jsx)('div', {
                        className: s()(O.connector, {
                            [O.leftPopoutConnector]: 'left' === M,
                            [O.rightPopoutConnector]: 'right' === M
                        })
                    })
            ]
        })
    });
}
((i = r || (r = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
