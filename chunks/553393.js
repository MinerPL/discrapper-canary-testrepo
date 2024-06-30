n(47120);
var r = n(735250), i = n(470079), a = n(920906), o = n(91192), s = n(442837), l = n(780384), u = n(481060), c = n(287734), d = n(872810), _ = n(230711), E = n(393238), f = n(40851), h = n(607070), p = n(258609), m = n(382182), I = n(210887), T = n(592125), g = n(430824), S = n(496675), A = n(979651), N = n(617136), v = n(113434), O = n(497505), R = n(918701), C = n(602667), y = n(644646), D = n(667105), L = n(981631), b = n(231338), M = n(689938), P = n(13801);
let U = '11px';
function w(e, t) {
    return null != e && null != t && (0, m.p9)(t, A.Z, g.Z, S.Z, p.Z)[0];
}
t.Z = function (e) {
    var t, p, m;
    let {
            quest: g,
            memberListItemRef: S,
            applicationStream: A,
            position: x,
            closePopout: G,
            updatePosition: k
        } = e, B = (0, s.e7)([T.Z], () => {
            var e;
            return null !== (e = T.Z.getChannel(null == A ? void 0 : A.channelId)) && void 0 !== e ? e : null;
        }), F = (0, D.hf)({
            quest: g,
            location: O.jn.MEMBERS_LIST
        }), V = (0, v.tP)(g), H = (null == g ? void 0 : null === (t = g.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, Z = (null == g ? void 0 : null === (p = g.userStatus) || void 0 === p ? void 0 : p.enrolledAt) != null, Y = (null == g ? void 0 : null === (m = g.userStatus) || void 0 === m ? void 0 : m.completedAt) != null, j = (0, s.e7)([I.Z], () => I.Z.getState().theme), W = (0, l.wj)(j) ? b.BR.DARK : b.BR.LIGHT, K = (0, s.e7)([h.Z], () => h.Z.useReducedMotion), {
            ref: z,
            height: q
        } = (0, E.Z)(), [Q, X] = i.useState(K), $ = (0, f.Aq)(), J = (0, o.eg)();
    i.useEffect(() => {
        let e = J.current;
        return null == e || e.addEventListener('scroll', G), () => {
            null == e || e.removeEventListener('scroll', G);
        };
    }, [
        G,
        J
    ]), i.useEffect(() => {
        let e = J.current, t = S.current;
        if (null == e || null == t)
            return;
        let n = new MutationObserver(() => k());
        return n.observe(e, {
            childList: !0,
            subtree: !0
        }), () => {
            n.disconnect();
        };
    }, [
        S,
        J,
        k
    ]);
    let ee = (0, a.useSpring)({
            from: { height: 0 },
            height: null != q ? q : 0,
            config: {
                tension: 450,
                friction: 45
            },
            immediate: K,
            onRest: () => X(!0)
        }), et = (0, a.useTransition)(Q, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }), en = () => {
            $.dispatch(L.CkL.POPOUT_CLOSE);
        }, er = 'top' === x ? ''.concat('4px', ' ').concat('4px', ' 0 0') : '0 0 '.concat('4px', ' ').concat('4px');
    if (null == g || V || H && !w(A, B))
        return null;
    let ei = () => {
            (0, N._3)({
                questId: g.id,
                questContent: O.jn.MEMBERS_LIST,
                questContentCTA: N.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }), (0, u.openModalLazy)(async () => {
                let {default: e} = await n.e('4266').then(n.bind(n, 316210));
                return t => (0, r.jsx)(e, {
                    ...t,
                    questContent: O.jn.MEMBERS_LIST,
                    quest: g
                });
            });
        }, ea = () => {
            (0, N._3)({
                questId: g.id,
                questContent: O.jn.MEMBERS_LIST,
                questContentCTA: N.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }), _.Z.open(L.oAB.INVENTORY);
        }, eo = e => {
            e.stopPropagation(), ei();
        }, es = () => {
            if (w(A, B) && null != B)
                return (0, N._3)({
                    questId: g.id,
                    questContent: O.jn.MEMBERS_LIST,
                    questContentCTA: N.jZ.WATCH_STREAM,
                    trackGuildAndChannelMetadata: !0
                }), c.default.selectVoiceChannel(B.id), (0, d.iV)(A);
            ea();
        }, el = Y && !H ? {
            headerText: M.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
            ctaText: M.Z.Messages.QUESTS_CLAIM_REWARD,
            handleClickCta: F,
            tileAssetType: 'reward'
        } : Z && !H ? {
            headerText: M.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
            ctaText: M.Z.Messages.QUESTS_CHECK_PROGRESS,
            handleClickCta: ea,
            tileAssetType: 'reward'
        } : w(A, B) ? {
            headerText: M.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
            ctaText: M.Z.Messages.QUESTS_JOIN_ME,
            handleClickCta: es,
            tileAssetType: 'game'
        } : {
            headerText: M.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
            ctaText: M.Z.Messages.QUESTS_UNLOCK_REWARDS,
            handleClickCta: ea,
            tileAssetType: 'game'
        };
    return (0, r.jsx)(C.A, {
        questOrQuests: g,
        questContent: O.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        children: e => {
            var t, n;
            return (0, r.jsx)(a.animated.div, {
                ref: t => {
                    e.current = t;
                },
                'aria-expanded': Q,
                className: P.wrapper,
                style: {
                    width: null !== (n = null === (t = S.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
                    height: ee.height,
                    overflow: Q ? 'visible' : 'hidden',
                    borderRadius: er
                },
                children: (0, r.jsxs)('div', {
                    ref: e => {
                        z.current = e;
                    },
                    className: P.container,
                    style: { borderRadius: er },
                    children: [
                        (0, r.jsxs)('div', {
                            className: P.top,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: P.left,
                                    children: [
                                        (0, r.jsx)(u.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: el.headerText
                                        }),
                                        (0, r.jsxs)(u.Clickable, {
                                            className: P.help,
                                            onClick: e => {
                                                en(), eo(e);
                                            },
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    className: P.helpText,
                                                    children: M.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({ gamePublisher: g.config.messages.gamePublisher })
                                                }),
                                                (0, r.jsx)(u.CircleQuestionIcon, {
                                                    size: 'custom',
                                                    className: P.helpIcon,
                                                    width: U,
                                                    height: U,
                                                    color: u.tokens.colors.INTERACTIVE_NORMAL
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: P.right,
                                    children: (0, r.jsxs)('div', {
                                        className: P.imgWrapper,
                                        children: [
                                            et((e, t) => t && (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: P.imgUnderlay
                                            })),
                                            'game' === el.tileAssetType && (0, r.jsx)('img', {
                                                alt: M.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                                    gameTitle: g.config.messages.gameTitle,
                                                    gamePublisher: g.config.messages.gamePublisher
                                                }),
                                                className: P.assetTile,
                                                src: (0, R.uo)(g, W)
                                            }),
                                            'reward' === el.tileAssetType && (0, r.jsx)(y.Z, {
                                                className: P.assetTile,
                                                quest: g,
                                                questContent: O.jn.MEMBERS_LIST,
                                                learnMoreStyle: 'icon',
                                                onClick: en
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.Button, {
                            onClick: () => {
                                en(), el.handleClickCta();
                            },
                            color: u.Button.Colors.CUSTOM,
                            className: P.ctaButton,
                            children: el.ctaText
                        })
                    ]
                })
            });
        }
    });
};
