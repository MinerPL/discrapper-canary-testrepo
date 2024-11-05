n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(91192),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(287734),
    d = n(872810),
    f = n(393238),
    _ = n(40851),
    h = n(607070),
    p = n(258609),
    m = n(102172),
    g = n(210887),
    E = n(592125),
    v = n(430824),
    I = n(496675),
    S = n(979651),
    T = n(617136),
    b = n(113434),
    y = n(497505),
    A = n(475595),
    N = n(602667),
    C = n(644646),
    R = n(667105),
    O = n(341907),
    D = n(46140),
    L = n(981631),
    x = n(231338),
    w = n(388032),
    M = n(242468);
let P = '11px';
function k(e, t) {
    return null != e && null != t && (0, m.p9)(t, S.Z, v.Z, I.Z, p.Z)[0];
}
t.Z = function (e) {
    var t, n, p;
    let { quest: m, memberListItemRef: v, applicationStream: I, position: S, closePopout: U, updatePosition: G } = e,
        B = (0, o.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getChannel(null == I ? void 0 : I.channelId)) && void 0 !== e ? e : null;
        }),
        Z = (0, R.hf)({
            quest: m,
            location: y.jn.MEMBERS_LIST
        }),
        F = (0, b.tP)(m),
        V = (null == m ? void 0 : null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        j = (null == m ? void 0 : null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        H = (null == m ? void 0 : null === (p = m.userStatus) || void 0 === p ? void 0 : p.completedAt) != null,
        Y = (0, o.e7)([g.Z], () => g.Z.getState().theme),
        W = (0, l.wj)(Y) ? x.BR.DARK : x.BR.LIGHT,
        K = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: z, height: q } = (0, f.Z)(),
        [Q, X] = i.useState(K),
        J = (0, _.Aq)(),
        $ = (0, s.eg)();
    i.useEffect(() => {
        let e = $.current;
        return (
            null == e || e.addEventListener('scroll', U),
            () => {
                null == e || e.removeEventListener('scroll', U);
            }
        );
    }, [U, $]),
        i.useEffect(() => {
            let e = $.current,
                t = v.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => G());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [v, $, G]);
    let ee = (0, u.useSpring)({
            from: { height: 0 },
            height: null != q ? q : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => X(!0)
        }),
        et = (0, u.useTransition)(Q, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        en = () => {
            J.dispatch(L.CkL.POPOUT_CLOSE);
        },
        er = 'top' === S ? ''.concat('4px', ' ').concat('4px', ' 0 0') : '0 0 '.concat('4px', ' ').concat('4px');
    if (null == m || F || (V && !k(I, B))) return null;
    let ei = () => {
            (0, T._3)({
                questId: m.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: T.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, O.openDisclosureModal)(m, {
                    content: y.jn.MEMBERS_LIST,
                    ctaContent: T.jZ.OPEN_DISCLOSURE
                });
        },
        ea = () => {
            (0, T._3)({
                questId: m.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: T.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, O.navigateToQuestHome)(D.dr.MEMBERS_LIST, y.jn.MEMBERS_LIST, m.id);
        },
        es = (e) => {
            e.stopPropagation(), ei();
        },
        eo = () => {
            if (k(I, B) && null != B)
                return (
                    (0, T._3)({
                        questId: m.id,
                        questContent: y.jn.MEMBERS_LIST,
                        questContentCTA: T.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    c.default.selectVoiceChannel(B.id),
                    (0, d.iV)(I)
                );
            ea();
        },
        el =
            H && !V
                ? {
                      headerText: w.intl.string(w.t.gHerLS),
                      ctaText: w.intl.string(w.t.cfY4PD),
                      handleClickCta: Z,
                      tileAssetType: 'reward'
                  }
                : j && !V
                  ? {
                        headerText: w.intl.string(w.t.uH2sf3),
                        ctaText: w.intl.string(w.t.VN1Ajo),
                        handleClickCta: ea,
                        tileAssetType: 'reward'
                    }
                  : k(I, B)
                    ? {
                          headerText: w.intl.string(w.t.Bz6SkJ),
                          ctaText: w.intl.string(w.t.BXFP39),
                          handleClickCta: eo,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: w.intl.string(w.t.Bz6SkJ),
                          ctaText: w.intl.string(w.t.BSXPZ2),
                          handleClickCta: ea,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(N.A, {
        questOrQuests: m,
        questContent: y.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(a.animated.div, {
                ref: (t) => {
                    e.current = t;
                },
                'aria-expanded': Q,
                className: M.wrapper,
                style: {
                    width: null !== (n = null === (t = v.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
                    height: ee.height,
                    overflow: Q ? 'visible' : 'hidden',
                    borderRadius: er
                },
                children: (0, r.jsxs)('div', {
                    ref: (e) => {
                        z.current = e;
                    },
                    className: M.container,
                    style: { borderRadius: er },
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.top,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: M.left,
                                    children: [
                                        (0, r.jsx)(u.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: el.headerText
                                        }),
                                        (0, r.jsxs)(u.Clickable, {
                                            className: M.help,
                                            onClick: (e) => {
                                                en(), es(e);
                                            },
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    className: M.helpText,
                                                    children: w.intl.format(w.t['Lm8/mJ'], { gamePublisher: m.config.messages.gamePublisher })
                                                }),
                                                (0, r.jsx)(u.CircleQuestionIcon, {
                                                    size: 'custom',
                                                    className: M.helpIcon,
                                                    width: P,
                                                    height: P,
                                                    color: u.tokens.colors.INTERACTIVE_NORMAL
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: M.right,
                                    children: (0, r.jsxs)('div', {
                                        className: M.imgWrapper,
                                        children: [
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, r.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: M.imgUnderlay
                                                    })
                                            ),
                                            'game' === el.tileAssetType &&
                                                (0, r.jsx)('img', {
                                                    alt: w.intl.formatToPlainString(w.t.IskzPj, {
                                                        gameTitle: m.config.messages.gameTitle,
                                                        gamePublisher: m.config.messages.gamePublisher
                                                    }),
                                                    className: M.assetTile,
                                                    src: (0, A.fh)(m, A.eC.GAME_TILE, W).url
                                                }),
                                            'reward' === el.tileAssetType &&
                                                (0, r.jsx)(C.Z, {
                                                    className: M.assetTile,
                                                    quest: m,
                                                    questContent: y.jn.MEMBERS_LIST,
                                                    learnMoreStyle: 'icon',
                                                    location: D.dr.MEMBERS_LIST,
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
                            className: M.ctaButton,
                            children: el.ctaText
                        })
                    ]
                })
            });
        }
    });
};
