n.d(t, {
    m: function () {
        return w;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(613828), o = n(772848), c = n(442837), u = n(481060), d = n(2052), h = n(40851), p = n(607070), m = n(100527), _ = n(906732), f = n(703656), E = n(210887), C = n(390322), g = n(626135), I = n(348600), x = n(566620), T = n(520599), N = n(611370), v = n(138138), S = n(127255), Z = n(5200), A = n(558317), M = n(403404), b = n(701488), R = n(981631), j = n(689938), L = n(496), P = n(587952), O = n(736733), y = n(932463), D = n(988967), k = n(463738);
let U = 'vc-activities-'.concat((0, o.Z)()), w = a.forwardRef(function (e, t) {
        let {
                channel: n,
                isHovered: l,
                closePopout: o,
                onMouseEnter: w,
                onMouseLeave: B,
                onClick: H,
                className: G
            } = e, {enabled: V} = I.Z.useExperiment({ location: '8009ca_3' }), {enableRythmMiniShelfBanner: F} = v.u.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }), {enableAmazonMusicShelfPoster: W} = T.p.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }), {enableFarmMergeValleyMiniShelfBanner: z} = N.T.useExperiment({ location: 'ActivitiesMiniShelf' }, { autoTrackExposure: !0 }), Y = (0, c.e7)([E.Z], () => E.Z.getState().theme), K = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), {
                id: q,
                guild_id: X
            } = n;
        a.useEffect(() => {
            g.default.track(R.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: q,
                guild_id: X
            });
        }, [
            q,
            X
        ]), a.useEffect(() => {
            !l && o();
        }, [
            o,
            l
        ]);
        let Q = (0, h.bp)(), {analyticsLocations: J} = (0, _.ZP)(m.Z.ACTIVITIES_MINI_SHELF), {analyticsLocations: $} = (0, _.ZP)([
                ...J,
                m.Z.ACTIVITIES_MINI_SHELF_BANNER
            ]), ee = Q === R.IlC.POPOUT, et = (0, d.O)(), en = function (e, t) {
                return (0, S.Z)({
                    guildId: e,
                    channel: t
                }).slice(0, 5);
            }(n.getGuildId(), n);
        a.useEffect(() => {
            let e = setTimeout(() => x.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let ei = a.useCallback(() => {
                var e;
                (0, M.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: et.location,
                    openInPopout: ee,
                    analyticsLocations: J,
                    opensAppLauncherModal: !0
                }), B(), H();
            }, [
                et,
                J,
                n,
                H,
                B,
                ee
            ]), ea = a.useCallback(e => {
                w(), g.default.track(R.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                    channel_id: n.id,
                    guild_id: n.getGuildId()
                });
            }, [
                w,
                n
            ]), el = V ? (0, i.jsxs)(r.rU, {
                to: R.Z5c.ACTIVITIES,
                children: [
                    (0, i.jsx)('img', {
                        alt: j.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
                        src: 'light' === Y ? P : O,
                        className: L.poster
                    }),
                    (0, i.jsx)('div', { className: L.posterDivider })
                ]
            }) : W ? (0, i.jsxs)(u.Clickable, {
                className: s()(L.clickableBanner),
                onClick: () => {
                    H(), o(), (0, f.uL)(R.Z5c.ACTIVITY_DETAILS(b.Fu), void 0, void 0, $);
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: j.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT,
                        src: y,
                        className: L.poster
                    }),
                    (0, i.jsx)('div', { className: L.posterDivider })
                ]
            }) : F ? (0, i.jsxs)(u.Clickable, {
                className: s()(L.clickableBanner),
                onClick: () => {
                    H(), o(), (0, f.uL)(R.Z5c.ACTIVITY_DETAILS(b.NC), void 0, void 0, $);
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: j.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_RYTHM_POSTER_ALT,
                        src: k,
                        className: L.poster
                    }),
                    (0, i.jsx)('div', { className: L.posterDivider })
                ]
            }) : z ? (0, i.jsxs)(u.Clickable, {
                className: s()(L.clickableBanner),
                onClick: () => {
                    H(), o(), (0, f.uL)(R.Z5c.ACTIVITY_DETAILS(b.Cw), void 0, void 0, $);
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: j.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_FARM_MERGE_VALLEY_POSTER_ALT,
                        src: D,
                        className: L.poster
                    }),
                    (0, i.jsx)('div', { className: L.posterDivider })
                ]
            }) : null;
        return (0, i.jsx)(_.Gt, {
            value: J,
            children: (0, i.jsx)(C.Z, {
                children: (0, i.jsxs)(u.Dialog, {
                    ref: t,
                    'aria-labelledby': U,
                    className: G,
                    children: [
                        (0, i.jsx)(u.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(u.HiddenVisually, {
                                children: (0, i.jsx)(u.H, {
                                    id: U,
                                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: L.container,
                            onMouseEnter: ea,
                            onMouseLeave: B,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: L.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: L.titleLeft,
                                            children: [
                                                (0, i.jsx)(u.ActivitiesIcon, {
                                                    size: 'md',
                                                    className: L.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'eyebrow',
                                                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(u.Clickable, {
                                            className: L.titleRight,
                                            onClick: ei,
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'eyebrow',
                                                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                                                }),
                                                (0, i.jsx)(u.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    width: 12,
                                                    height: 12,
                                                    color: 'var(--interactive-active)',
                                                    className: L.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(_.Gt, {
                                    value: $,
                                    children: el
                                }),
                                (0, i.jsxs)('div', {
                                    className: L.activityContainer,
                                    children: [
                                        en.map(e => (0, i.jsx)(Z.Y, {
                                            channel: n,
                                            activityItem: e,
                                            onClick: () => {
                                                o(), H();
                                            },
                                            aspectRatio: Z.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: L.activitySuggestion
                                        }, e.application.id)),
                                        (0, i.jsx)('div', {
                                            className: s()(L.wumpusRocketOuterContainer, { [L.wumpusReducedMotion]: K }),
                                            children: (0, i.jsx)('div', {
                                                className: L.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(A.Z, { className: L.wumpusRocket })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    });
