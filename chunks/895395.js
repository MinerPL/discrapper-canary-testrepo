n.d(t, {
    Z: function () {
        return O;
    },
    d: function () {
        return B;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(468194), o = n(442837), c = n(477690), d = n(481060), u = n(100527), g = n(906732), p = n(703656), v = n(430824), m = n(594174), x = n(792125), I = n(867176), f = n(115130), _ = n(566620), h = n(520599), T = n(127255), C = n(880308), E = n(451576), S = n(439934), j = n(701488), N = n(981631), b = n(689938), A = n(644620), M = n(497263), Z = n(932463);
let y = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP), D = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT), L = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function O(e) {
    let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: r,
            onActivityItemVisible: c,
            scrollerRef: O
        } = e, [B, V] = a.useState(0), R = (0, T.Z)({
            guildId: n,
            enableFilter: !0,
            channel: t
        }), k = (0, o.e7)([m.default], () => m.default.getCurrentUser()), H = (0, o.e7)([v.Z], () => v.Z.getGuild(n), [n]), {analyticsLocations: P} = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY), F = (0, E.Z)(null == t ? void 0 : t.id), U = (0, I.vp)(null == t ? void 0 : t.id, 'ActivityShelfSlideActivityDirectory'), {enableAmazonMusicShelfPoster: Y} = h.p.useExperiment({ location: 'ActivitiesShelf' }, { autoTrackExposure: !0 }), {
            isDeveloperActivityShelfEnabled: w,
            filter: G
        } = (0, o.cj)([f.Z], () => ({
            filter: f.Z.getFilter(),
            isDeveloperActivityShelfEnabled: f.Z.getIsEnabled()
        }));
    if (a.useEffect(() => {
            let e = O.current;
            if (null != e)
                return e.addEventListener('scroll', t, !1), () => {
                    if (null != e)
                        e.removeEventListener('scroll', t, !1);
                };
            function t() {
                var e, t;
                V(null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [O]), a.useEffect(() => {
            (F || null != n) && (0, _.w1)({
                guildId: n,
                force: !0
            });
        }, [
            n,
            F
        ]), (0, C.g)(), null == H && !F || null == k)
        return null;
    let W = R.length > 0;
    function z(e) {
        r();
    }
    return (0, i.jsx)(g.Gt, {
        value: P,
        children: (0, i.jsxs)('div', {
            className: A.scrollContainer,
            children: [
                W ? (0, i.jsx)('div', {
                    className: A.scrollBackgroundContainer,
                    style: { top: -B },
                    children: (0, i.jsx)('div', {
                        className: s()(A.scrollTierBackground),
                        style: {
                            height: (e => {
                                let t = 1 === e.length;
                                return y + Math.ceil(e.length / 2) * (t ? L : D);
                            })(R)
                        }
                    })
                }) : null,
                (0, i.jsxs)(d.Scroller, {
                    ref: O,
                    className: A.scroller,
                    children: [
                        function () {
                            if (Y) {
                                let e = b.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
                                return (0, i.jsxs)(d.Clickable, {
                                    className: A.posterClickable,
                                    'aria-label': e,
                                    onClick: () => {
                                        var e;
                                        e = j.Fu, r(), (0, p.uL)(N.Z5c.ACTIVITY_DETAILS(j.Fu), void 0, void 0, P);
                                    },
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: A.poster,
                                            children: (0, i.jsx)('img', {
                                                className: A.posterBackground,
                                                src: Z,
                                                alt: e
                                            })
                                        }),
                                        (0, i.jsx)('div', { className: A.posterDivider })
                                    ]
                                });
                            }
                            if (U) {
                                let e = b.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITIES_AVAILABLE_IN_TEXT, t = Math.min(Math.max(Math.ceil(1660 / e.length), 32), 48);
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: A.poster,
                                            children: [
                                                (0, i.jsx)('img', {
                                                    className: A.posterBackground,
                                                    src: M,
                                                    alt: e
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: A.posterTextParent,
                                                    children: (0, i.jsx)(d.Text, {
                                                        className: s()((0, x.Q)(N.BRd.DARK), A.posterText),
                                                        variant: 'display-sm',
                                                        style: { fontSize: t },
                                                        children: e
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)('div', { className: A.posterDivider })
                                    ]
                                });
                            }
                            return null;
                        }(),
                        W ? (0, i.jsx)('div', {
                            className: A.scrollSection,
                            children: (0, i.jsx)('div', {
                                className: s()(A.shelf),
                                children: R.map(e => (0, i.jsx)(S.Z, {
                                    large: 1 === R.length,
                                    activityItem: e,
                                    channel: t,
                                    guildId: n,
                                    locationObject: l,
                                    onActivityItemVisible: c,
                                    onActivityItemSelected: () => {
                                        var t;
                                        t = e.application.id, r();
                                    }
                                }, 'activity-shelf-item-'.concat(e.application.id)))
                            })
                        }) : w && G.length > 0 ? (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            className: A.filterError,
                            children: b.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({ filter: G })
                        }) : (0, i.jsx)('div', {
                            className: A.spinnerContainer,
                            children: (0, i.jsx)(d.Spinner, {})
                        })
                    ]
                })
            ]
        })
    });
}
function B() {
    return (0, i.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: b.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({ surveyURL: j.Es })
    });
}
