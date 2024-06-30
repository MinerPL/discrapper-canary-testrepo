a.r(l), a(47120), a(653041);
var n = a(735250), t = a(470079), s = a(120356), i = a.n(s), r = a(512722), o = a.n(r), c = a(758713), d = a(442837), u = a(433517), m = a(481060), h = a(224706), x = a(812206), g = a(168551), I = a(485267), E = a(26033), v = a(561308), p = a(669764), _ = a(962250), M = a(706454), A = a(768581), N = a(814225), f = a(810568), j = a(998058), O = a(839392), T = a(567409), L = a(774073), S = a(383895), P = a(183391), R = a(689938), G = a(997844);
let Z = 'GameProfileModal', C = e => {
        let {
                game: l,
                onClose: a,
                trackClick: t
            } = e, s = (0, d.e7)([x.Z], () => {
                var e;
                return x.Z.getApplication(null !== (e = null == l ? void 0 : l.applicationId) && void 0 !== e ? e : '');
            });
        if (null == l)
            return null;
        let i = l.coverImageUrl;
        return (0, n.jsx)(m.Tooltip, {
            text: l.name,
            children: e => {
                var r;
                return (0, n.jsx)(m.Clickable, {
                    ...e,
                    className: G.clickable,
                    onClick: async () => {
                        t(f.as.ClickSimilarGame, l.applicationId), (0, m.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(y, {
                            applicationId: l.applicationId,
                            source: f.m1.SimilarGames,
                            ...e
                        }))), await new Promise(e => setTimeout(e, 10)), a();
                    },
                    children: (0, n.jsx)('img', {
                        src: i,
                        className: G.similarGames,
                        alt: R.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (r = null == s ? void 0 : s.name) && void 0 !== r ? r : null == l ? void 0 : l.name })
                    })
                });
            }
        });
    }, w = [
        c.z.DESKTOP,
        c.z.XBOX,
        c.z.PLAYSTATION,
        c.z.NINTENDO
    ], b = e => {
        let {platforms: l} = e, a = [...new Set(l)];
        !a.includes(c.z.DESKTOP) && (a.includes(c.z.MACOS) || a.includes(c.z.LINUX)) && a.push(c.z.DESKTOP);
        let t = (a = a.filter(e => w.includes(e))).map(e => {
            switch (e) {
            case c.z.DESKTOP:
                return (0, n.jsx)(m.ScreenIcon, {}, e);
            case c.z.XBOX:
                return (0, n.jsx)(m.XboxIcon, {}, e);
            case c.z.PLAYSTATION:
                return (0, n.jsx)(m.PlaystationIcon, {}, e);
            case c.z.NINTENDO:
                return (0, n.jsx)(m.NintendoSwitchNeutralIcon, {}, e);
            default:
                return null;
            }
        });
        return (0, n.jsx)('div', {
            className: G.row,
            children: t
        });
    }, F = e => e.filter(L.z6).slice(0, 5), y = e => {
        var l, s, r;
        let {
                applicationId: c,
                source: w,
                sourceUserId: y,
                transitionState: D,
                onClose: k
            } = e, {clientThemesClassName: U} = (0, g.ZP)(), {
                width: B,
                height: W
            } = (0, _.b)(), [H, z] = t.useState(null !== (l = u.K.get(Z)) && void 0 !== l ? l : {}), Y = (0, d.e7)([M.default], () => M.default.locale), [K, X] = t.useState(!0), [J, V] = t.useState(!1), q = t.useRef(null), Q = t.useMemo(() => (0, f.fP)(), []);
        t.useEffect(() => {
            let e = q.current;
            null != e && V(e.scrollHeight - e.clientHeight > 1);
        }, [
            q,
            B,
            W
        ]), t.useEffect(() => {
            (0, I.J)();
        }, []);
        let $ = (0, d.Wu)([O.Z], () => {
                var e;
                return (null !== (e = O.Z.getSimilarGames(c)) && void 0 !== e ? e : []).slice(0, 25);
            }), ee = (0, d.Wu)([p.Z], () => $.map(e => p.Z.getGame(e)).filter(L.W1).slice(0, 5)), el = t.useRef([]);
        t.useEffect(() => {
            el.current = $;
        }, [$]);
        let {entries: ea} = (0, T.Z)(), en = t.useMemo(() => {
                var e;
                return null !== (e = null == ea ? void 0 : ea.filter(e => (0, E.d)(e) && e.extra.application_id === c)) && void 0 !== e ? e : [];
            }, [
                ea,
                c
            ]);
        t.useEffect(() => {
            var e, l;
            return (0, f.IS)({
                source: w,
                viewId: Q,
                applicationId: c,
                gameName: null !== (l = null !== (e = null == es ? void 0 : es.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== l ? l : '',
                authorId: y
            }), () => {
                var e, l;
                let a = Date.now(), n = en.map(e => {
                        let l = (0, v.kr)(e) ? (0, v.T_)(e, a) : (0, v.GL)(e, Y);
                        return JSON.stringify({
                            user_id: e.author_id,
                            item_id: e.id,
                            trait: e.traits,
                            time_played: l
                        });
                    });
                (0, f.wz)({
                    viewId: Q,
                    applicationId: c,
                    gameName: null !== (l = null !== (e = null == es ? void 0 : es.name) && void 0 !== e ? e : null == et ? void 0 : et.name) && void 0 !== l ? l : '',
                    playedFriends: n,
                    similarGames: F(el.current)
                });
            };
        }, []), t.useEffect(() => {
            0 === $.length && (0, j.i)(c);
        }, [
            c,
            $
        ]), t.useEffect(() => {
            h.Z.getDetectableGamesSupplemental([
                c,
                ...$
            ]);
        }, [
            c,
            $
        ]);
        let et = x.Z.getApplication(c), es = (0, d.e7)([p.Z], () => p.Z.getGame(c)), ei = t.useMemo(() => null == es ? void 0 : es.genres.map(N.P3).join(', '), [es]), er = t.useMemo(() => {
                if (null == es)
                    return 0;
                let {
                    artwork: e,
                    screenshots: l
                } = es;
                if (e.length > 0) {
                    let l = Math.floor(Math.random() * (e.length - 1));
                    return e[l];
                }
                if (l.length > 0) {
                    let e = Math.floor(Math.random() * (l.length - 1));
                    return l[e];
                }
                return '';
            }, [es]), eo = t.useMemo(() => {
                var e, l;
                let a = (null !== (e = null == es ? void 0 : es.artwork) && void 0 !== e ? e : []).map(e => ({ src: e }));
                return [
                    ...a,
                    ...(null !== (l = null == es ? void 0 : es.screenshots) && void 0 !== l ? l : []).map(e => ({ src: e }))
                ];
            }, [
                null == es ? void 0 : es.artwork,
                null == es ? void 0 : es.screenshots
            ]), ec = (e, l) => {
                (0, f.UE)({
                    gameName: null != eu ? eu : '',
                    applicationId: c,
                    action: e,
                    similarGameId: l,
                    viewId: Q
                });
            }, ed = (0, L.ZP)({
                location: 'GameProfileModal',
                applicationId: c
            });
        if (o()(ed, 'Game Profile was opened when it thinks it shouldn\'t have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openModalLazy`'), null == es)
            return null;
        let eu = null !== (s = es.name) && void 0 !== s ? s : null == et ? void 0 : et.name, em = null == et ? void 0 : et.getIconURL(160, A.$k ? 'webp' : 'png'), eh = null !== (r = es.coverImageUrl) && void 0 !== r ? r : em, {
                summary: ex,
                websites: eg,
                publishers: eI,
                platforms: eE
            } = es, ev = H[c];
        return (0, n.jsxs)(m.ModalRoot, {
            transitionState: D,
            size: m.ModalSize.DYNAMIC,
            className: i()(U, G.gameProfileModal),
            children: [
                (0, n.jsxs)('div', {
                    className: G.gameArtHero,
                    children: [
                        (0, n.jsx)('div', {
                            className: G.gameArtBackground,
                            style: { backgroundImage: 'url("'.concat(er, '")') }
                        }),
                        (0, n.jsx)('div', { className: G.gameHeroGradient })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: i()(G.content, G.column, G.headerInfo),
                    children: [
                        (0, n.jsx)('div', {
                            className: G.logoWrapper,
                            children: null != eh && (0, n.jsx)('img', {
                                className: G.logo,
                                src: eh,
                                alt: R.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: eu })
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: i()(G.row, G.gapSm, G.gameDetails),
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(m.Heading, {
                                            variant: 'heading-xl/bold',
                                            children: eu
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: i()(G.row, G.gapSm),
                                            children: [
                                                (0, n.jsx)(m.Text, {
                                                    variant: 'text-sm/semibold',
                                                    color: 'text-muted',
                                                    children: ei
                                                }),
                                                null != em && (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(m.Text, {
                                                            variant: 'text-sm/semibold',
                                                            children: ' \u2022 '
                                                        }),
                                                        (0, n.jsx)('img', {
                                                            src: em,
                                                            height: 16,
                                                            alt: R.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: eu })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)('div', {
                                    children: (0, n.jsx)(m.Tooltip, {
                                        text: ev ? R.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : R.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: e => (0, n.jsxs)(m.Button, {
                                            ...e,
                                            innerClassName: G.followButton,
                                            color: ev ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                            onClick: () => {
                                                let e = { ...H };
                                                e[c] = !e[c], z(e), u.K.set(Z, e), ec(e[c] ? f.as.FollowGame : f.as.UnfollowGame);
                                            },
                                            children: [
                                                ev ? (0, n.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, n.jsx)(m.BellIcon, { color: 'white' }),
                                                ev ? R.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : R.Z.Messages.FOLLOW
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(m.Scroller, {
                    children: (0, n.jsxs)('div', {
                        className: i()(G.content, G.mainContent),
                        children: [
                            (0, n.jsxs)('div', {
                                className: G.column,
                                children: [
                                    (0, n.jsx)(m.Heading, {
                                        variant: 'heading-md/bold',
                                        color: 'text-primary',
                                        children: R.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: G.section,
                                        children: [
                                            0 === en.length && (0, n.jsx)(m.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-primary',
                                                className: G.emptyFriendsWhoPlay,
                                                children: R.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                                            }),
                                            (0, n.jsx)('div', {
                                                className: i()(G.column, G.gapNone),
                                                children: null == en ? void 0 : en.map(e => (0, n.jsx)(S.Z, {
                                                    entry: e,
                                                    viewId: Q,
                                                    onClose: k
                                                }, e.id))
                                            })
                                        ]
                                    }),
                                    eo.length > 0 && (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(m.Heading, {
                                                variant: 'heading-md/bold',
                                                children: R.Z.Messages.GAME_PROFILE_SCREENSHOTS
                                            }),
                                            (0, n.jsx)(m.Scroller, {
                                                style: { overflowY: 'visible' },
                                                className: i()(G.row, G.imageScroller),
                                                orientation: 'horizontal',
                                                children: eo.map((e, l) => (0, n.jsx)(m.Clickable, {
                                                    className: G.clickable,
                                                    onClick: () => {
                                                        ec(f.as.ClickImage), (0, m.openModalLazy)(async () => {
                                                            let {default: e} = await a.e('99857').then(a.bind(a, 895023));
                                                            return a => {
                                                                let {...t} = a;
                                                                return (0, n.jsx)(e, {
                                                                    className: G.mediaModal,
                                                                    ...t,
                                                                    items: eo,
                                                                    startingIndex: l
                                                                });
                                                            };
                                                        });
                                                    },
                                                    children: (0, n.jsx)('img', {
                                                        src: e.src,
                                                        className: G.gameArtwork,
                                                        alt: R.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: eu })
                                                    })
                                                }, e.src))
                                            })
                                        ]
                                    }),
                                    ee.length > 0 && (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(m.Heading, {
                                                variant: 'heading-md/bold',
                                                children: R.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                                            }),
                                            (0, n.jsx)('div', {
                                                className: G.row,
                                                style: {},
                                                children: ee.map(e => (0, n.jsx)(C, {
                                                    game: e,
                                                    onClose: k,
                                                    trackClick: ec
                                                }, null == e ? void 0 : e.applicationId))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: i()(G.sidebar, G.column, G.padded),
                                children: [
                                    (0, n.jsx)(m.Heading, {
                                        variant: 'heading-md/bold',
                                        children: R.Z.Messages.ABOUT
                                    }),
                                    null != ex && (0, n.jsxs)('div', {
                                        className: i()(G.column, G.gapSm),
                                        children: [
                                            (0, n.jsx)(m.Text, {
                                                ref: q,
                                                lineClamp: K ? 8 : void 0,
                                                variant: 'text-sm/normal',
                                                children: ex
                                            }),
                                            (J || !K) && (0, n.jsx)(m.Clickable, {
                                                className: G.clickable,
                                                onClick: () => {
                                                    ec(K ? f.as.ShowMore : f.as.ShowLess), X(!K);
                                                },
                                                children: (0, n.jsx)(m.Text, {
                                                    variant: 'text-sm/semibold',
                                                    children: K ? R.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : R.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                                                })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(P.Z, {
                                        websites: eg,
                                        trackClick: ec
                                    }),
                                    (eI.length > 0 || eE.length > 0) && (0, n.jsxs)('div', {
                                        className: i()(G.column),
                                        children: [
                                            eI.length > 0 && (0, n.jsxs)('div', {
                                                className: i()(G.column, G.gapSm),
                                                children: [
                                                    (0, n.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: R.Z.Messages.GAME_PROFILE_PUBLISHER
                                                    }),
                                                    (0, n.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: eI.join(', ')
                                                    })
                                                ]
                                            }),
                                            eE.length > 0 && (0, n.jsxs)('div', {
                                                className: i()(G.column, G.gapSm),
                                                children: [
                                                    (0, n.jsx)(m.Text, {
                                                        variant: 'text-xs/semibold',
                                                        children: R.Z.Messages.GAME_PROFILE_PLATFORMS
                                                    }),
                                                    (0, n.jsx)(b, { platforms: eE })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
l.default = y;
