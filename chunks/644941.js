a.r(s), a(47120), a(653041);
var n = a(735250),
    r = a(470079),
    l = a(120356),
    t = a.n(l),
    i = a(512722),
    o = a.n(i),
    E = a(913527),
    c = a.n(E),
    _ = a(758713),
    u = a(705512),
    I = a(442837),
    d = a(433517),
    A = a(481060),
    R = a(224706),
    N = a(812206),
    O = a(168551),
    T = a(485267),
    m = a(26033),
    g = a(561308),
    L = a(669764),
    M = a(962250),
    P = a(706454),
    S = a(768581),
    G = a(814225),
    f = a(709054),
    C = a(810568),
    h = a(998058),
    v = a(839392),
    x = a(96856),
    p = a(567409),
    Z = a(774073),
    K = a(124030),
    D = a(383895),
    j = a(183391),
    F = a(206583),
    B = a(689938),
    w = a(707443);
let U = 'GameProfileModal',
    y = (e) => {
        let { game: s, onClose: a, trackClick: r } = e,
            l = (0, I.e7)([N.Z], () => {
                var e;
                return N.Z.getApplication(null !== (e = null == s ? void 0 : s.applicationId) && void 0 !== e ? e : '');
            });
        if (null == s) return null;
        let t = s.coverImageUrl;
        return (0, n.jsx)(A.Tooltip, {
            text: s.name,
            children: (e) => {
                var i;
                return (0, n.jsx)(A.Clickable, {
                    ...e,
                    className: w.clickable,
                    onClick: async () => {
                        r(C.as.ClickSimilarGame, s.applicationId),
                            (0, A.openModalLazy)(() =>
                                Promise.resolve((e) =>
                                    (0, n.jsx)(W, {
                                        applicationId: s.applicationId,
                                        source: C.m1.SimilarGames,
                                        ...e
                                    })
                                )
                            ),
                            await new Promise((e) => setTimeout(e, 10)),
                            a();
                    },
                    children: (0, n.jsx)('img', {
                        src: t,
                        className: w.similarGames,
                        alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (i = null == l ? void 0 : l.name) && void 0 !== i ? i : null == s ? void 0 : s.name })
                    })
                });
            }
        });
    },
    k = () =>
        (0, n.jsxs)('div', {
            className: w.gameBadge,
            children: [
                (0, n.jsx)(A.FireIcon, { size: 'xxs' }),
                (0, n.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: B.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        }),
    Q = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
    b = (e) => {
        let { platforms: s } = e,
            a = [...new Set(s)];
        !a.includes(_.z.DESKTOP) && (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) && a.push(_.z.DESKTOP);
        let r = (a = a.filter((e) => Q.includes(e))).map((e) => {
            switch (e) {
                case _.z.DESKTOP:
                    return (0, n.jsx)(A.ScreenIcon, { size: 'xs' }, e);
                case _.z.XBOX:
                    return (0, n.jsx)(A.XboxNeutralIcon, { size: 'xs' }, e);
                case _.z.PLAYSTATION:
                    return (0, n.jsx)(A.PlaystationNeutralIcon, { size: 'xs' }, e);
                case _.z.NINTENDO:
                    return (0, n.jsx)(A.NintendoSwitchNeutralIcon, { size: 'xs' }, e);
                default:
                    return null;
            }
        });
        return (0, n.jsxs)('div', {
            className: t()(w.row, w.gapSm),
            style: { alignItems: 'center' },
            children: [
                (0, n.jsx)(A.Text, {
                    variant: 'text-sm/normal',
                    children: ' \xB7 '
                }),
                r
            ]
        });
    },
    H = (e) => e.filter(Z.z6).slice(0, 5),
    W = (e) => {
        var s, l;
        let { applicationId: i, source: E, sourceUserId: _, transitionState: Q, onClose: W } = e,
            { clientThemesClassName: Y } = (0, O.ZP)(),
            { width: z, height: V } = (0, M.b)(),
            [X, J] = r.useState(() => {
                var e;
                return null === (e = d.K.get(U)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, I.e7)([P.default], () => P.default.locale),
            [$, ee] = r.useState(!0),
            [es, ea] = r.useState(!1),
            en = r.useRef(null),
            er = r.useMemo(() => (0, C.fP)(), []);
        r.useEffect(() => {
            let e = en.current;
            null != e && ea(e.scrollHeight - e.clientHeight > 1);
        }, [en, z, V]),
            r.useEffect(() => {
                (0, T.Jn)();
            }, []);
        let el = (0, I.Wu)([v.Z], () => {
                var e;
                return (null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            et = (0, I.Wu)([L.Z], () =>
                el
                    .map((e) => L.Z.getGame(e))
                    .filter(Z.W1)
                    .slice(0, 5)
            ),
            ei = r.useRef([]);
        r.useEffect(() => {
            ei.current = el;
        }, [el]);
        let { entries: eo } = (0, p.Z)(),
            eE = r.useMemo(() => {
                var e;
                return null !== (e = null == eo ? void 0 : eo.filter((e) => (0, m.dX)(e) && e.extra.application_id === i)) && void 0 !== e ? e : [];
            }, [eo, i]),
            ec = eE.length > 7,
            [e_, eu] = r.useState(!1);
        r.useEffect(() => {
            var e, s;
            return (
                (0, C.IS)({
                    source: E,
                    viewId: er,
                    applicationId: i,
                    gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eI ? void 0 : eI.name) && void 0 !== s ? s : '',
                    authorId: _
                }),
                () => {
                    var e, s;
                    let a = Date.now(),
                        n = eE.map((e) => {
                            let s = (0, g.kr)(e) ? (0, g.T_)(e, a) : (0, g.GL)(e, q);
                            return JSON.stringify({
                                item_id: e.id,
                                trait: e.traits,
                                time_played: s
                            });
                        });
                    (0, C.wz)({
                        viewId: er,
                        applicationId: i,
                        gameName: null !== (s = null !== (e = null == ed ? void 0 : ed.name) && void 0 !== e ? e : null == eI ? void 0 : eI.name) && void 0 !== s ? s : '',
                        playedFriendIds: eE.map((e) => e.author_id),
                        playedFriendsData: n,
                        similarGames: H(ei.current)
                    });
                }
            );
        }, []),
            r.useEffect(() => {
                0 === el.length && (0, h.i)(i);
            }, [i, el]),
            r.useEffect(() => {
                R.Z.getDetectableGamesSupplemental([i, ...el]);
            }, [i, el]);
        let eI = N.Z.getApplication(i),
            ed = (0, I.e7)([L.Z], () => L.Z.getGame(i)),
            eA = r.useMemo(() => (null == ed ? void 0 : ed.genres.map(G.P3).join(', ')), [ed]),
            eR = r.useMemo(() => {
                if (null == ed) return '';
                let { artwork: e, screenshots: s } = ed;
                if (e.length > 0) {
                    let s = Math.floor(Math.random() * (e.length - 1));
                    return e[s];
                }
                if (s.length > 0) {
                    let e = Math.floor(Math.random() * (s.length - 1));
                    return s[e];
                }
                return '';
            }, [ed]),
            eN = r.useMemo(() => {
                var e, s;
                let a = (null !== (e = null == ed ? void 0 : ed.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
                return [...(null !== (s = null == ed ? void 0 : ed.screenshots) && void 0 !== s ? s : []).map((e) => ({ src: e })), ...a];
            }, [null == ed ? void 0 : ed.artwork, null == ed ? void 0 : ed.screenshots]),
            eO = (e, s) => {
                (0, C.UE)({
                    gameName: null != eg ? eg : '',
                    applicationId: i,
                    action: e,
                    similarGameId: s,
                    viewId: er
                });
            },
            eT = (0, x.p)('GameProfileModal'),
            { shouldOpenGameProfile: em } = (0, Z.ZP)({
                location: 'GameProfileModal',
                applicationId: i,
                trackEntryPointImpression: !1
            });
        if ((o()(em, "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`"), null == ed)) return null;
        let eg = null !== (s = ed.name) && void 0 !== s ? s : null == eI ? void 0 : eI.name,
            eL = null == eI ? void 0 : eI.getIconURL(160, S.$k ? 'webp' : 'png'),
            eM = null !== (l = ed.coverImageUrl) && void 0 !== l ? l : eL,
            { summary: eP, websites: eS, publishers: eG, platforms: ef } = ed,
            eC = f.default.extractTimestamp(i),
            eh = c()().diff(c()(eC), 'days') <= F.G,
            ev = eE.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
        return (0, n.jsx)(A.ModalRoot, {
            transitionState: Q,
            size: A.ModalSize.DYNAMIC,
            className: t()(Y, w.gameProfileModal),
            children: (0, n.jsxs)(A.ScrollerNone, {
                className: w.scrollable,
                children: [
                    (0, n.jsx)('div', {
                        className: t()(w.gameArtHero),
                        style: { backgroundImage: 'url("'.concat(eR, '")') }
                    }),
                    (0, n.jsxs)('div', {
                        className: t()(w.content, w.column, w.headerInfo),
                        children: [
                            (0, n.jsx)('div', {
                                className: w.logoWrapper,
                                children:
                                    null != eM &&
                                    (0, n.jsx)('img', {
                                        className: w.logo,
                                        src: eM,
                                        alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eg })
                                    })
                            }),
                            (0, n.jsxs)('div', {
                                className: t()(w.row, w.gapSm, w.gameDetails),
                                children: [
                                    (0, n.jsxs)('div', {
                                        children: [
                                            (0, n.jsx)(A.Heading, {
                                                variant: 'heading-xl/bold',
                                                children: eg
                                            }),
                                            (0, n.jsxs)('div', {
                                                className: t()(w.row, w.gapSm),
                                                children: [
                                                    null != eL &&
                                                        (0, n.jsx)('img', {
                                                            src: eL,
                                                            height: 16,
                                                            alt: B.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eg })
                                                        }),
                                                    (0, n.jsx)(A.Text, {
                                                        variant: 'text-sm/semibold',
                                                        color: 'text-muted',
                                                        children: eA
                                                    }),
                                                    eh &&
                                                        (0, n.jsx)(A.Text, {
                                                            variant: 'eyebrow',
                                                            className: w.newBadge,
                                                            children: B.Z.Messages.NEW
                                                        }),
                                                    ev &&
                                                        (0, n.jsxs)(n.Fragment, {
                                                            children: [
                                                                (0, n.jsx)(A.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    children: ' \xB7 '
                                                                }),
                                                                (0, n.jsx)(k, {})
                                                            ]
                                                        })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)('div', {
                                        children:
                                            eT &&
                                            (0, n.jsx)(A.Tooltip, {
                                                text: X ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : B.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                                children: (e) =>
                                                    (0, n.jsxs)(A.Button, {
                                                        ...e,
                                                        innerClassName: w.followButton,
                                                        color: X ? A.Button.Colors.PRIMARY : A.Button.Colors.BRAND,
                                                        onClick: () => {
                                                            var e;
                                                            let s = null !== (e = d.K.get(U)) && void 0 !== e ? e : {};
                                                            (s[i] = !s[i]),
                                                                d.K.set(U, s),
                                                                eO(s[i] ? C.as.FollowGame : C.as.UnfollowGame),
                                                                s[i] &&
                                                                    (0, K.L)() &&
                                                                    (0, A.openModalLazy)(async () => {
                                                                        let { default: e } = await a.e('86564').then(a.bind(a, 641758));
                                                                        return (s) =>
                                                                            (0, n.jsx)(e, {
                                                                                ...s,
                                                                                applicationId: i,
                                                                                background: eR,
                                                                                viewId: er
                                                                            });
                                                                    }),
                                                                J(s[i]);
                                                        },
                                                        children: [X ? (0, n.jsx)(A.BellSlashIcon, { color: 'white' }) : (0, n.jsx)(A.BellIcon, { color: 'white' }), X ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : B.Z.Messages.FOLLOW]
                                                    })
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(A.HeadingLevel, {
                        children: (0, n.jsxs)('div', {
                            className: t()(w.content, w.mainContent),
                            children: [
                                (0, n.jsxs)('div', {
                                    className: w.column,
                                    children: [
                                        (0, n.jsx)(A.Heading, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: B.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: t()(w.section, { [w.fadedEntries]: ec && !e_ }),
                                            children: [
                                                0 === eE.length &&
                                                    (0, n.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-primary',
                                                        className: w.emptyFriendsWhoPlay,
                                                        children: B.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                                    }),
                                                (0, n.jsx)('div', {
                                                    className: t()(w.column, w.gapNone),
                                                    children:
                                                        null == eE
                                                            ? void 0
                                                            : eE.slice(0, ec && !e_ ? 6 : void 0).map((e) =>
                                                                  (0, n.jsx)(
                                                                      D.Z,
                                                                      {
                                                                          entry: e,
                                                                          viewId: er,
                                                                          onClose: W
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                })
                                            ]
                                        }),
                                        ec &&
                                            !e_ &&
                                            (0, n.jsxs)(A.Clickable, {
                                                className: w.expandEntriesButton,
                                                onClick: () => eu(!0),
                                                children: [
                                                    (0, n.jsx)(A.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'interactive-normal',
                                                        children: B.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                                    }),
                                                    (0, n.jsx)(A.ChevronSmallDownIcon, { size: 'xs' })
                                                ]
                                            }),
                                        eN.length > 0 &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: B.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                                    }),
                                                    (0, n.jsx)(A.Scroller, {
                                                        className: t()(w.row, w.imageScroller),
                                                        orientation: 'horizontal',
                                                        children: eN.map((e, s) =>
                                                            (0, n.jsx)(
                                                                A.Clickable,
                                                                {
                                                                    className: w.clickable,
                                                                    focusProps: {
                                                                        offset: 4,
                                                                        ringClassName: w.gameArtworkFocusRing
                                                                    },
                                                                    onClick: () => {
                                                                        eO(C.as.ClickImage),
                                                                            (0, A.openModalLazy)(async () => {
                                                                                let { default: e } = await a.e('99857').then(a.bind(a, 895023));
                                                                                return (a) => {
                                                                                    let { ...r } = a;
                                                                                    return (0, n.jsx)(e, {
                                                                                        className: w.mediaModal,
                                                                                        ...r,
                                                                                        items: eN,
                                                                                        startingIndex: s
                                                                                    });
                                                                                };
                                                                            });
                                                                    },
                                                                    children: (0, n.jsx)('img', {
                                                                        src: e.src,
                                                                        className: w.gameArtwork,
                                                                        alt: B.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eg })
                                                                    })
                                                                },
                                                                e.src
                                                            )
                                                        )
                                                    }),
                                                    (0, n.jsx)(A.Spacer, { size: 8 })
                                                ]
                                            }),
                                        et.length > 0 &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(A.Heading, {
                                                        variant: 'heading-md/bold',
                                                        children: B.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                                    }),
                                                    (0, n.jsx)('div', {
                                                        className: w.row,
                                                        style: {},
                                                        children: et.map((e) =>
                                                            (0, n.jsx)(
                                                                y,
                                                                {
                                                                    game: e,
                                                                    onClose: W,
                                                                    trackClick: eO
                                                                },
                                                                null == e ? void 0 : e.applicationId
                                                            )
                                                        )
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, n.jsxs)('div', {
                                    className: t()(w.sidebar, w.column),
                                    children: [
                                        (0, n.jsx)(A.Heading, {
                                            variant: 'heading-md/bold',
                                            children: B.Z.Messages.ABOUT
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: w.sidebarSections,
                                            children: [
                                                null != eP &&
                                                    (0, n.jsxs)('div', {
                                                        className: t()(w.column, w.gapSm),
                                                        children: [
                                                            (0, n.jsx)(A.Text, {
                                                                ref: en,
                                                                lineClamp: $ ? 8 : void 0,
                                                                variant: 'text-sm/normal',
                                                                children: eP
                                                            }),
                                                            (es || !$) &&
                                                                (0, n.jsx)(A.Clickable, {
                                                                    className: w.clickable,
                                                                    onClick: () => {
                                                                        eO($ ? C.as.ShowMore : C.as.ShowLess), ee(!$);
                                                                    },
                                                                    children: (0, n.jsx)(A.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        children: $ ? B.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : B.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                                    })
                                                                })
                                                        ]
                                                    }),
                                                (0, n.jsx)(j.Z, {
                                                    websites: eS,
                                                    trackClick: eO
                                                }),
                                                (eG.length > 0 || ef.length > 0) &&
                                                    (0, n.jsx)('div', {
                                                        className: t()(w.column),
                                                        children:
                                                            eG.length > 0 &&
                                                            (0, n.jsxs)('div', {
                                                                className: t()(w.column, w.gapSm),
                                                                children: [
                                                                    (0, n.jsx)(A.Heading, {
                                                                        variant: 'text-xs/semibold',
                                                                        color: 'header-secondary',
                                                                        children: B.Z.Messages.GAME_PROFILE_PUBLISHER
                                                                    }),
                                                                    (0, n.jsxs)('div', {
                                                                        className: t()(w.row, w.gapMd),
                                                                        children: [
                                                                            (0, n.jsx)(A.Text, {
                                                                                variant: 'text-sm/normal',
                                                                                children: eG.join(', ')
                                                                            }),
                                                                            ef.length > 0 && (0, n.jsx)(b, { platforms: ef })
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
s.default = W;
