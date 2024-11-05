n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    p = n(113434),
    f = n(569984),
    v = n(497505),
    C = n(918701),
    g = n(475595),
    x = n(566078),
    S = n(164495),
    h = n(472144),
    E = n(644646),
    _ = n(604162),
    T = n(747717),
    b = n(963123),
    N = n(46140),
    j = n(981631),
    I = n(388032),
    y = n(417575);
function k(e) {
    var t, n, i;
    let { transitionState: f, onClose: k, quest: B, autoplay: D } = e,
        A = (0, C.il)(B),
        L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, s.wj)(L) ? j.BRd.DARK : j.BRd.LIGHT,
        M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [R, O] = o.useState(A.progressSeconds),
        [U, F] = o.useState(!1),
        { completedRatio: w, completedRatioDisplay: Z } = (0, p.I)(B),
        [G, V] = (0, _.G6)(I.intl.string(I.t.WqhZsr), I.intl.string(I.t['+5kSoa']), 1700),
        H = (null === (t = B.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? I.intl.string(I.t.vTgCW1) : I.intl.string(I.t.cfY4PD),
        z = o.useCallback(() => {
            (0, C.f2)(B.id, {
                content: v.jn.QUEST_SHARE_LINK,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                V();
        }, [B.id, V]),
        q = o.useMemo(() => x.r.build(B.config).defaultReward.messages.name, [B]),
        Y = I.intl.formatToPlainString(I.t['12IWPz'], { rewardName: q });
    return (0, r.jsx)(c.ModalRoot, {
        transitionState: f,
        size: c.ModalSize.DYNAMIC,
        className: y.modalRoot,
        children: (0, r.jsx)('div', {
            className: y.modalBg,
            children: (0, r.jsx)('div', {
                className: y.modalBody,
                children: (0, r.jsxs)('div', {
                    className: y.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.contentHeader,
                            children: [
                                (0, r.jsxs)(c.Clickable, {
                                    className: y.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, C.FE)(B, {
                                            content: v.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                            ctaContent: m.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: B.config.messages.gameTitle,
                                            className: l()(y.contentHeaderLogotype, y.accentOnHover),
                                            src: (0, g.fh)(B, g.eC.LOGO_TYPE, P).url
                                        }),
                                        (0, r.jsx)(T.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: y.questHeading,
                                            children: [
                                                (0, r.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: I.intl.format(I.t.EQa7oq, { questName: B.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: B.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Tooltip, {
                                    position: 'left',
                                    text: Y,
                                    onTooltipShow: () => {
                                        F(!0);
                                    },
                                    onTooltipHide: () => {
                                        F(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(c.Clickable, {
                                            className: y.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(h.Z, {
                                                quest: B,
                                                size: 48,
                                                percentComplete: w,
                                                percentCompleteText: U ? Z : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(E.Z, {
                                                    className: y.questProgressRewardTile,
                                                    quest: B,
                                                    questContent: v.jn.QUEST_BAR_V2,
                                                    autoplay: !1,
                                                    location: N.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(b.Z, {
                            quest: B,
                            parentTransitionState: f,
                            onOptimisticProgressUpdate: O,
                            autoplay: D
                        }),
                        (0, r.jsxs)('div', {
                            className: y.contentFooter,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: z,
                                    size: c.Button.Sizes.MEDIUM,
                                    className: y.copyLinkBtn,
                                    children: G
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            onClick: k,
                                            color: c.Button.Colors.PRIMARY,
                                            size: c.Button.Sizes.MEDIUM,
                                            children: I.intl.string(I.t.cpT0Cg)
                                        }),
                                        (0, r.jsx)(S.i0, {
                                            className: y.claimBtn,
                                            size: c.Button.Sizes.MEDIUM,
                                            quest: B,
                                            useReducedMotion: M,
                                            isExpanded: (null === (n = B.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = B.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                            ctaLabel: H
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
function B(e) {
    let { questId: t, autoplay: n, ...o } = e,
        i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
    return null != i
        ? (0, r.jsx)(k, {
              ...o,
              quest: i,
              autoplay: n
          })
        : null;
}
