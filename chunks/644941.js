t.r(n), t(47120), t(653041);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    o = t.n(s),
    i = t(512722),
    l = t.n(i),
    c = t(392711),
    d = t(913527),
    u = t.n(d),
    _ = t(758713),
    E = t(705512),
    I = t(442837),
    A = t(433517),
    m = t(481060),
    p = t(224706),
    T = t(812206),
    O = t(168551),
    g = t(485267),
    R = t(26033),
    N = t(561308),
    P = t(669764),
    h = t(962250),
    f = t(706454),
    C = t(768581),
    M = t(814225),
    L = t(709054),
    S = t(810568),
    x = t(998058),
    v = t(839392),
    G = t(96856),
    Z = t(567409),
    j = t(774073),
    b = t(124030),
    D = t(383895),
    y = t(183391),
    U = t(715318),
    w = t(206583),
    F = t(689938),
    k = t(707443);
let K = 'GameProfileModal',
    B = (e) => {
        let { game: n, onClose: t, trackClick: r } = e,
            s = (0, I.e7)([T.Z], () => {
                var e;
                return T.Z.getApplication(null !== (e = null == n ? void 0 : n.applicationId) && void 0 !== e ? e : '');
            });
        if (null == n) return null;
        let o = n.coverImageUrl;
        return (0, a.jsx)(m.Tooltip, {
            text: n.name,
            children: (e) => {
                var i;
                return (0, a.jsx)(m.Clickable, {
                    ...e,
                    className: k.clickable,
                    onClick: async () => {
                        r(S.as.ClickSimilarGame, n.applicationId),
                            (0, m.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, a.jsx)(z, {
                                        applicationId: n.applicationId,
                                        source: S.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            t();
                    },
                    children: (0, a.jsx)('img', {
                        src: o,
                        className: k.similarGames,
                        alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == n ? void 0 : n.name })
                    })
                });
            }
        });
    },
    H = () =>
        (0, a.jsxs)('div', {
            className: k.gameBadge,
            children: [
                (0, a.jsx)(m.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    Q = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
    W = (e) => {
        let { platforms: n } = e,
            t = [...new Set(n)];
        !t.includes(_.z.DESKTOP) && (t.includes(_.z.MACOS) || t.includes(_.z.LINUX)) && t.push(_.z.DESKTOP);
        let r = (t = t.filter((e) => Q.includes(e))).map((e) => {
            switch (e) {
                case _.z.DESKTOP:
                    return (0, a.jsx)(m.ScreenIcon, { size: 'xs' }, e);
                case _.z.XBOX:
                    return (0, a.jsx)(m.XboxNeutralIcon, { size: 'xs' }, e);
                case _.z.PLAYSTATION:
                    return (0, a.jsx)(m.PlaystationNeutralIcon, { size: 'xs' }, e);
                case _.z.NINTENDO:
                    return (0, a.jsx)(m.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, a.jsxs)('div', {
            className: o()(k.row, k.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, a.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    Y = (e) => e.filter(j.z6).slice(0, 5),
    z = (e) => {
        var n, s;
        let { applicationId: i, source: d, sourceUserId: _, transitionState: Q, onClose: z } = e,
            { clientThemesClassName: V } = (0, O.ZP)(),
            { width: X, height: J } = (0, h.b)(),
            [q, $] = r.useState(() => {
                var e;
                return null === (e = A.K.get(K)) || void 0 === e ? void 0 : e[i];
            }),
            ee = (0, I.e7)([f.default], () => f.default.locale),
            [en, et] = r.useState(null),
            [ea, er] = r.useState(!0),
            [es, eo] = r.useState(!1),
            ei = r.useRef(null),
            el = r.useMemo(() => (0, S.fP)(), []);
        r.useEffect(() => {
            let e = ei.current;
            null != e && eo(e.scrollHeight - e.clientHeight > 1);
        }, [ei, X, J]),
            r.useEffect(() => {
                (0, g.Jn)();
            }, []);
        let ec = (0, I.Wu)([v.Z], () => {
                var e;
                return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ed = (0, I.Wu)([P.Z], () =>
                ec
                    .map((e) => P.Z.getGame(e))
                    .filter(j.W1)
                    .slice(0, 5)
            ),
            eu = r.useRef([]);
        r.useEffect(() => {
            eu.current = ec;
        }, [ec]),
            r.useEffect(() => {
                (async () => {
                    if (0 === ec.length) {
                        et(null);
                        try {
                            await (0, x.i)(i);
                        } catch (e) {
                            et(e);
                        }
                    }
                })(),
                    p.Z.getDetectableGamesSupplemental([i, ...ec]);
            }, [i, ec]);
        let e_ = (0, I.e7)([v.Z, P.Z], () => {
                let e = void 0 === v.Z.getSimilarGames(i),
                    n = ec.some((e) => P.Z.isFetching(e));
                return e || n;
            }),
            { entries: eE } = (0, Z.Z)(),
            eI = r.useMemo(() => {
                var e;
                return null !== (e = null == eE ? void 0 : eE.filter((e) => (0, R.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [eE, i]),
            eA = eI.length > 7,
            [em, ep] = r.useState(!1);
        r.useEffect(() => {
            var e, n;
            return (
                (0, S.IS)({
                    source: d,
                    viewId: el,
                    applicationId: i,
                    gameName: null !== (n = null !== (e = null == eO ? void 0 : eO.name) && void 0 !== e ? e : null == eT ? void 0 : eT.name) && void 0 !== n ? n : '',
                    authorId: _
                }),
                () => {
                    var e, n;
                    let t = Date.now(),
                        a = eI.map((e) => {
                            let n = (0, N.kr)(e) ? (0, N.T_)(e, t) : (0, N.GL)(e, ee);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: n
                            });
                        });
                    (0, S.wz)({
                        viewId: el,
                        applicationId: i,
                        gameName: null !== (n = null !== (e = null == eO ? void 0 : eO.name) && void 0 !== e ? e : null == eT ? void 0 : eT.name) && void 0 !== n ? n : '',
                        playedFriendIds: eI.map((e) => e.author_id),
                        playedFriendsData: a,
                        similarGames: Y(eu.current)
                    });
                }
            );
        }, []);
        let eT = T.Z.getApplication(i),
            eO = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eg = r.useMemo(() => (null == eO ? void 0 : eO.genres.map(M.P3).join(', ')), [eO]),
            eR = r.useMemo(() => {
                if (null == eO) return '';
                let { artwork: e, screenshots: n } = eO;
                if (e.length > 0) {
                    let n = Math.floor(Math.random() * (e.length - 1));
                    return e[n];
                }
                if (n.length > 0) {
                    let e = Math.floor(Math.random() * (n.length - 1));
                    return n[e];
                }
                return '';
            }, [eO]),
            eN = r.useMemo(() => {
                var e, n;
                let t = (null !== (e = null == eO ? void 0 : eO.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (n = null == eO ? void 0 : eO.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...t];
            }, [null == eO ? void 0 : eO.artwork, null == eO ? void 0 : eO.screenshots]),
            eP = (e, n) => {
                (0, S.UE)({
                    gameName: null != eC ? eC : '',
                    applicationId: i,
                    action: e,
                    similarGameId: n,
                    viewId: el
                });
            },
            eh = (0, G.p)('GameProfileModal'),
            { shouldOpenGameProfile: ef } = (0, j.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((l()(ef, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == eO)) return null;
        let eC = null !== (n = eO.name) && void 0 !== n ? n : null == eT ? void 0 : eT.name,
            eM = null == eT ? void 0 : eT.getIconURL(160, C.$k ? 'webp' : 'png'),
            eL = null !== (s = eO.coverImageUrl) && void 0 !== s ? s : eM,
            { summary: eS, websites: ex, publishers: ev, platforms: eG } = eO,
            eZ = L.default.extractTimestamp(i),
            ej = u()().diff(u()(eZ), 'days') <= w.G,
            eb = eI.some((e) => (0, N.ig)(e) === E.o.GLOBAL);
        return (0, a.jsx)(m.ModalRoot, {
            transitionState: Q,
            size: m.ModalSize.DYNAMIC,
            className: o()(V, k.gameProfileModal),
            children: (0, a.jsxs)(m.ScrollerNone, {
                className: k.scrollable,
                children: [
                    (0, a.jsx)('div', {
                        className: o()(k.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eR, '")') }
                    }),
                    (0, a.jsxs)('div', {
                        className: o()(k.content, k.column, k.headerInfo),
                        children: [
                            (0, a.jsxs)('div', {
                                className: k.coverArtRow,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: k.logoWrapper,
                                        children:
                                            null != eL &&
                                            (0, a.jsx)('img', {
                                                className: k.logo,
                                                src: eL,
                                                alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eC })
                                            })
                                    }),
                                    (0, a.jsx)(U.Z, {
                                        applicationId: i,
                                        className: k.overflowMenu
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: o()(k.row, k.gapSm, k.gameDetails),
                                children: [
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)(m.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eC
                                            }),
                                            (0, a.jsxs)('div', {
                                                className: o()(k.row, k.gapSm),
                                                children: [
                                                    null != eM &&
                                                        (0, a.jsx)('img', {
                                                            src: eM,
                                                            height: 16,
                                                            alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eC })
                                                        }),
                                                    (0, a.jsx)(m.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eg
                                                    }),
                                                    ej &&
                                                        (0, a.jsx)(m.Text, {
                                                            variant: 'eyebrow',
                                                            className: k.newBadge,
                                                            children: F.Z.Messages.NEW
                                                        }),
                                                    eb &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(m.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, a.jsx)(H, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        children:
                                            eh &&
                                            (0, a.jsx)(m.Tooltip, {
                                                text: q ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, a.jsxs)(m.Button, {
                                                        ...e,
                                                        innerClassName: k.followButton,
                                                        color: q ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let n = null !== (e = A.K.get(K)) && void 0 !== e ? e : {};
                                                            (n[i] = !n[i]),
                                                                A.K.set(K, n),
                                                                eP(n[i] ? S.as.FollowGame : S.as.UnfollowGame),
                                                                n[i] &&
                                                                    (0, b.L)() &&
                                                                    (0, m.openModalLazy)(async () => {
                                                                        let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                                                                        return (n) =>
                                                                            (0, a.jsx)(e, {
                                                                                ...n,
                                                                                applicationId: i,
                                                                                background: eR,
                                                                                viewId: el
                                                                            });
                                                                    }),
                                                                $(n[i]);
                                                        },
                                                        children: [q ? (0, a.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(m.BellIcon, { color: 'white' }), q ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : F.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(m.HeadingLevel, {
                        children: (0, a.jsxs)('div', {
                            className: o()(k.content, k.mainContent),
                            children: [
                                (0, a.jsxs)('div', {
                                    className: k.column,
                                    children: [
                                        (0, a.jsx)(m.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: F.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: o()(k.section, { [k.fadedEntries]: eA && !em }),
                                            children: [
                                                0 === eI.length &&
                                                    (0, a.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: k.emptyFriendsWhoPlay,
                                                        children: F.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, a.jsx)('div', {
                                                    className: o()(k.column, k.gapNone),
                                                    children:
                                                        null == eI
                                                            ? void 0
                                                            : eI.slice(0, eA && !em ? 6 : void 0).map((e) =>
                                                                  (0, a.jsx)(
                                                                      D.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: el,
                                                                          onClose: z
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        eA &&
                                            !em &&
                                            (0, a.jsxs)(m.Clickable, {
                                                className: k.expandEntriesButton,
                                                onClick: () => ep(!0),
                                                children: [
                                                    (0, a.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: F.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, a.jsx)(m.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eN.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(m.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: F.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, a.jsx)(m.Scroller, {
                                                        className: o()(k.row, k.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eN.map((e, n) =>
                                                            (0, a.jsx)(
                                                                m.Clickable,
                                                                {
                                                                    className: k.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: k.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eP(S.as.ClickImage),
                                                                            (0, m.openModalLazy)(async () => {
                                                                                let { default: e } = await t.e('99857').then(t.bind(t, 895023));
                                                                                return (t) => {
                                                                                    let { ...r } = t;
                                                                                    return (0, a.jsx)(e, {
                                                                                        className: k.mediaModal,
                                                                                        ...r,
                                                                                        items: eN,
                                                                                        startingIndex: n
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, a.jsx)('img', {
                                                                        src: e.src,
                                                                        className: k.gameArtwork,
                                                                        alt: F.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eC })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, a.jsx)(m.Spacer, { size: 8 })
                                                ]
                                            }),
                                        e_ &&
                                            null == en &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)('div', { className: k.loadingHeadingSimilarGames }),
                                                    (0, a.jsx)('div', {
                                                        className: k.row,
                                                        children: (0, c.range)(0, 5).map((e) => (0, a.jsx)('div', { className: k.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !e_ &&
                                            ed.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(m.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: F.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, a.jsx)('div', {
                                                        className: k.row,
                                                        style: {},
                                                        children: ed.map((e) =>
                                                            (0, a.jsx)(
                                                                B,
                                                                {
                                                                    game: e,
                                                                    onClose: z,
                                                                    trackClick: eP
                                                                },
                                                                null == e ? void 0 : e.applicationId
                                                            )
                                                        )
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, a.jsxs)('div', {
                                    className: o()(k.sidebar, k.column),
                                    children: [
                                        (0, a.jsx)(m.Heading, {
                                            variant: 'heading-md/bold',
                                            children: F.Z.Messages.ABOUT
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: k.sidebarSections,
                                            children: [
                                                null != eS &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(k.column, k.gapSm),
                                                        children: [
                                                            (0, a.jsx)(m.Text, {
                                                                ref: ei,
                                                                lineClamp: ea ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eS
                                                            }),
                                                            (es || !ea) &&
                                                                (0, a.jsx)(m.Clickable, {
                                                                    className: k.clickable,
                                                                    onClick: () => {
                                                                        eP(ea ? S.as.ShowMore : S.as.ShowLess), er(!ea);
                                                                    },
                                                                    children: (0, a.jsx)(m.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: ea ? F.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : F.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, a.jsx)(y.Z, {
                                                    websites: ex,
                                                    trackClick: eP
                                                }),
                                                (ev.length > 0 || eG.length > 0) &&
                                                    (0, a.jsx)('div', {
                                                        className: o()(k.column),
                                                        children:
                                                            ev.length > 0 &&
                                                            (0, a.jsxs)('div', {
                                                                className: o()(k.column, k.gapSm),
                                                                children: [
                                                                    (0, a.jsx)(m.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: F.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, a.jsxs)('div', {
                                                                        className: o()(k.row, k.gapMd),
                                                                        children: [
                                                                            (0, a.jsx)(m.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: ev.join(', ')
                                                                            }),
                                                                            eG.length > 0 && (0, a.jsx)(W, { platforms: eG })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                    })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
n.default = z;
