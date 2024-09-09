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
    p = t(481060),
    m = t(224706),
    T = t(812206),
    O = t(168551),
    N = t(485267),
    R = t(26033),
    g = t(561308),
    P = t(669764),
    h = t(962250),
    C = t(706454),
    L = t(768581),
    f = t(814225),
    S = t(709054),
    M = t(810568),
    x = t(998058),
    v = t(839392),
    G = t(96856),
    Z = t(567409),
    D = t(774073),
    j = t(124030),
    y = t(383895),
    b = t(183391),
    U = t(206583),
    w = t(689938),
    K = t(707443);
let F = 'GameProfileModal',
    k = (e) => {
        let { game: n, onClose: t, trackClick: r } = e,
            s = (0, I.e7)([T.Z], () => {
                var e;
                return T.Z.getApplication(null !== (e = null == n ? void 0 : n.applicationId) && void 0 !== e ? e : '');
            });
        if (null == n) return null;
        let o = n.coverImageUrl;
        return (0, a.jsx)(p.Tooltip, {
            text: n.name,
            children: (e) => {
                var i;
                return (0, a.jsx)(p.Clickable, {
                    ...e,
                    className: K.clickable,
                    onClick: async () => {
                        r(M.as.ClickSimilarGame, n.applicationId),
                            (0, p.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, a.jsx)(Y, {
                                        applicationId: n.applicationId,
                                        source: M.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            t();
                    },
                    children: (0, a.jsx)('img', {
                        src: o,
                        className: K.similarGames,
                        alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : null == n ? void 0 : n.name })
                    })
                });
            }
        });
    },
    B = () =>
        (0, a.jsxs)('div', {
            className: K.gameBadge,
            children: [
                (0, a.jsx)(p.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: w.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    H = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
    Q = (e) => {
        let { platforms: n } = e,
            t = [...new Set(n)];
        !t.includes(_.z.DESKTOP) && (t.includes(_.z.MACOS) || t.includes(_.z.LINUX)) && t.push(_.z.DESKTOP);
        let r = (t = t.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
                case _.z.DESKTOP:
                    return (0, a.jsx)(p.ScreenIcon, { size: 'xs' }, e);
                case _.z.XBOX:
                    return (0, a.jsx)(p.XboxNeutralIcon, { size: 'xs' }, e);
                case _.z.PLAYSTATION:
                    return (0, a.jsx)(p.PlaystationNeutralIcon, { size: 'xs' }, e);
                case _.z.NINTENDO:
                    return (0, a.jsx)(p.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, a.jsxs)('div', {
            className: o()(K.row, K.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, a.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    W = (e) => e.filter(D.z6).slice(0, 5),
    Y = (e) => {
        var n, s;
        let { applicationId: i, source: d, sourceUserId: _, transitionState: H, onClose: Y } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, h.b)(),
            [J, q] = r.useState(() => {
                var e;
                return null === (e = A.K.get(F)) || void 0 === e ? void 0 : e[i];
            }),
            $ = (0, I.e7)([C.default], () => C.default.locale),
            [ee, en] = r.useState(null),
            [et, ea] = r.useState(!0),
            [er, es] = r.useState(!1),
            eo = r.useRef(null),
            ei = r.useMemo(() => (0, M.fP)(), []);
        r.useEffect(() => {
            let e = eo.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
        }, [eo, V, X]),
            r.useEffect(() => {
                (0, N.Jn)();
            }, []);
        let el = (0, I.Wu)([v.Z], () => {
                var e;
                return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            ec = (0, I.Wu)([P.Z], () =>
                el
                    .map((e) => P.Z.getGame(e))
                    .filter(D.W1)
                    .slice(0, 5)
            ),
            ed = r.useRef([]);
        r.useEffect(() => {
            ed.current = el;
        }, [el]),
            r.useEffect(() => {
                (async () => {
                    if (0 === el.length) {
                        en(null);
                        try {
                            await (0, x.i)(i);
                        } catch (e) {
                            en(e);
                        }
                    }
                })(),
                    m.Z.getDetectableGamesSupplemental([i, ...el]);
            }, [i, el]);
        let eu = (0, I.e7)([v.Z, P.Z], () => {
                let e = void 0 === v.Z.getSimilarGames(i),
                    n = el.some((e) => P.Z.isFetching(e));
                return e || n;
            }),
            { entries: e_ } = (0, Z.Z)(),
            eE = r.useMemo(() => {
                var e;
                return null !== (e = null == e_ ? void 0 : e_.filter((e) => (0, R.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [e_, i]),
            eI = eE.length > 7,
            [eA, ep] = r.useState(!1);
        r.useEffect(() => {
            var e, n;
            return (
                (0, M.IS)({
                    source: d,
                    viewId: ei,
                    applicationId: i,
                    gameName: null !== (n = null !== (e = null == eT ? void 0 : eT.name) && void 0 !== e ? e : null == em ? void 0 : em.name) && void 0 !== n ? n : '',
                    authorId: _
                }),
                () => {
                    var e, n;
                    let t = Date.now(),
                        a = eE.map((e) => {
                            let n = (0, g.kr)(e) ? (0, g.T_)(e, t) : (0, g.GL)(e, $);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: n
                            });
                        });
                    (0, M.wz)({
                        viewId: ei,
                        applicationId: i,
                        gameName: null !== (n = null !== (e = null == eT ? void 0 : eT.name) && void 0 !== e ? e : null == em ? void 0 : em.name) && void 0 !== n ? n : '',
                        playedFriendIds: eE.map((e) => e.author_id),
                        playedFriendsData: a,
                        similarGames: W(ed.current)
                    });
                }
            );
        }, []);
        let em = T.Z.getApplication(i),
            eT = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eO = r.useMemo(() => (null == eT ? void 0 : eT.genres.map(f.P3).join(', ')), [eT]),
            eN = r.useMemo(() => {
                if (null == eT) return '';
                let { artwork: e, screenshots: n } = eT;
                if (e.length > 0) {
                    let n = Math.floor(Math.random() * (e.length - 1));
                    return e[n];
                }
                if (n.length > 0) {
                    let e = Math.floor(Math.random() * (n.length - 1));
                    return n[e];
                }
                return '';
            }, [eT]),
            eR = r.useMemo(() => {
                var e, n;
                let t = (null !== (e = null == eT ? void 0 : eT.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (n = null == eT ? void 0 : eT.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...t];
            }, [null == eT ? void 0 : eT.artwork, null == eT ? void 0 : eT.screenshots]),
            eg = (e, n) => {
                (0, M.UE)({
                    gameName: null != eC ? eC : '',
                    applicationId: i,
                    action: e,
                    similarGameId: n,
                    viewId: ei
                });
            },
            eP = (0, G.p)('GameProfileModal'),
            { shouldOpenGameProfile: eh } = (0, D.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((l()(eh, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == eT)) return null;
        let eC = null !== (n = eT.name) && void 0 !== n ? n : null == em ? void 0 : em.name,
            eL = null == em ? void 0 : em.getIconURL(160, L.$k ? 'webp' : 'png'),
            ef = null !== (s = eT.coverImageUrl) && void 0 !== s ? s : eL,
            { summary: eS, websites: eM, publishers: ex, platforms: ev } = eT,
            eG = S.default.extractTimestamp(i),
            eZ = u()().diff(u()(eG), 'days') <= U.G,
            eD = eE.some((e) => (0, g.ig)(e) === E.o.GLOBAL);
        return (0, a.jsx)(p.ModalRoot, {
            transitionState: H,
            size: p.ModalSize.DYNAMIC,
            className: o()(z, K.gameProfileModal),
            children: (0, a.jsxs)(p.ScrollerNone, {
                className: K.scrollable,
                children: [
                    (0, a.jsx)('div', {
                        className: o()(K.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eN, '")') }
                    }),
                    (0, a.jsxs)('div', {
                        className: o()(K.content, K.column, K.headerInfo),
                        children: [
                            (0, a.jsx)('div', {
                                className: K.logoWrapper,
                                children:
                                    null != ef &&
                                    (0, a.jsx)('img', {
                                        className: K.logo,
                                        src: ef,
                                        alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eC })
                                    })
                            }),
                            (0, a.jsxs)('div', {
                                className: o()(K.row, K.gapSm, K.gameDetails),
                                children: [
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)(p.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eC
                                            }),
                                            (0, a.jsxs)('div', {
                                                className: o()(K.row, K.gapSm),
                                                children: [
                                                    null != eL &&
                                                        (0, a.jsx)('img', {
                                                            src: eL,
                                                            height: 16,
                                                            alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eC })
                                                        }),
                                                    (0, a.jsx)(p.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eO
                                                    }),
                                                    eZ &&
                                                        (0, a.jsx)(p.Text, {
                                                            variant: 'eyebrow',
                                                            className: K.newBadge,
                                                            children: w.Z.Messages.NEW
                                                        }),
                                                    eD &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(p.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, a.jsx)(B, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        children:
                                            eP &&
                                            (0, a.jsx)(p.Tooltip, {
                                                text: J ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : w.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, a.jsxs)(p.Button, {
                                                        ...e,
                                                        innerClassName: K.followButton,
                                                        color: J ? p.Button.Colors.PRIMARY : p.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let n = null !== (e = A.K.get(F)) && void 0 !== e ? e : {};
                                                            (n[i] = !n[i]),
                                                                A.K.set(F, n),
                                                                eg(n[i] ? M.as.FollowGame : M.as.UnfollowGame),
                                                                n[i] &&
                                                                    (0, j.L)() &&
                                                                    (0, p.openModalLazy)(async () => {
                                                                        let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                                                                        return (n) =>
                                                                            (0, a.jsx)(e, {
                                                                                ...n,
                                                                                applicationId: i,
                                                                                background: eN,
                                                                                viewId: ei
                                                                            });
                                                                    }),
                                                                q(n[i]);
                                                        },
                                                        children: [J ? (0, a.jsx)(p.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(p.BellIcon, { color: 'white' }), J ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : w.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(p.HeadingLevel, {
                        children: (0, a.jsxs)('div', {
                            className: o()(K.content, K.mainContent),
                            children: [
                                (0, a.jsxs)('div', {
                                    className: K.column,
                                    children: [
                                        (0, a.jsx)(p.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: w.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: o()(K.section, { [K.fadedEntries]: eI && !eA }),
                                            children: [
                                                0 === eE.length &&
                                                    (0, a.jsx)(p.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: K.emptyFriendsWhoPlay,
                                                        children: w.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, a.jsx)('div', {
                                                    className: o()(K.column, K.gapNone),
                                                    children:
                                                        null == eE
                                                            ? void 0
                                                            : eE.slice(0, eI && !eA ? 6 : void 0).map((e) =>
                                                                  (0, a.jsx)(
                                                                      y.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: ei,
                                                                          onClose: Y
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        eI &&
                                            !eA &&
                                            (0, a.jsxs)(p.Clickable, {
                                                className: K.expandEntriesButton,
                                                onClick: () => ep(!0),
                                                children: [
                                                    (0, a.jsx)(p.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: w.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, a.jsx)(p.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eR.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(p.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: w.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, a.jsx)(p.Scroller, {
                                                        className: o()(K.row, K.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eR.map((e, n) =>
                                                            (0, a.jsx)(
                                                                p.Clickable,
                                                                {
                                                                    className: K.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: K.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eg(M.as.ClickImage),
                                                                            (0, p.openModalLazy)(async () => {
                                                                                let { default: e } = await t.e('99857').then(t.bind(t, 895023));
                                                                                return (t) => {
                                                                                    let { ...r } = t;
                                                                                    return (0, a.jsx)(e, {
                                                                                        className: K.mediaModal,
                                                                                        ...r,
                                                                                        items: eR,
                                                                                        startingIndex: n
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, a.jsx)('img', {
                                                                        src: e.src,
                                                                        className: K.gameArtwork,
                                                                        alt: w.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eC })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, a.jsx)(p.Spacer, { size: 8 })
                                                ]
                                            }),
                                        eu &&
                                            null == ee &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)('div', { className: K.loadingHeadingSimilarGames }),
                                                    (0, a.jsx)('div', {
                                                        className: K.row,
                                                        children: (0, c.range)(0, 5).map((e) => (0, a.jsx)('div', { className: K.loadingSimilarGamesArtwork }, e))
                                                    })
                                                ]
                                            }),
                                        !eu &&
                                            ec.length > 0 &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(p.Heading, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: w.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, a.jsx)('div', {
                                                        className: K.row,
                                                        style: {},
                                                        children: ec.map((e) =>
                                                            (0, a.jsx)(
                                                                k,
                                                                {
                                                                    game: e,
                                                                    onClose: Y,
                                                                    trackClick: eg
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
                                    className: o()(K.sidebar, K.column),
                                    children: [
                                        (0, a.jsx)(p.Heading, {
                                            variant: 'heading-md/bold',
                                            children: w.Z.Messages.ABOUT
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: K.sidebarSections,
                                            children: [
                                                null != eS &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(K.column, K.gapSm),
                                                        children: [
                                                            (0, a.jsx)(p.Text, {
                                                                ref: eo,
                                                                lineClamp: et ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eS
                                                            }),
                                                            (er || !et) &&
                                                                (0, a.jsx)(p.Clickable, {
                                                                    className: K.clickable,
                                                                    onClick: () => {
                                                                        eg(et ? M.as.ShowMore : M.as.ShowLess), ea(!et);
                                                                    },
                                                                    children: (0, a.jsx)(p.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: et ? w.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : w.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, a.jsx)(b.Z, {
                                                    websites: eM,
                                                    trackClick: eg
                                                }),
                                                (ex.length > 0 || ev.length > 0) &&
                                                    (0, a.jsx)('div', {
                                                        className: o()(K.column),
                                                        children:
                                                            ex.length > 0 &&
                                                            (0, a.jsxs)('div', {
                                                                className: o()(K.column, K.gapSm),
                                                                children: [
                                                                    (0, a.jsx)(p.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: w.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, a.jsxs)('div', {
                                                                        className: o()(K.row, K.gapMd),
                                                                        children: [
                                                                            (0, a.jsx)(p.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: ex.join(', ')
                                                                            }),
                                                                            ev.length > 0 && (0, a.jsx)(Q, { platforms: ev })
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
n.default = Y;
