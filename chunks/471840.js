n.r(t), n.d(t, {
    default: function () {
        return k;
    }
}), n(47120), n(653041);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(990547), o = n(442837), c = n(477690), d = n(481060), u = n(110924), g = n(40851), p = n(367907), v = n(565384), m = n(906732), x = n(835473), I = n(592125), f = n(451478), _ = n(285952), h = n(626135), T = n(585483), C = n(624138), E = n(115130), S = n(566620), j = n(421), N = n(895395), b = n(49978), A = n(427996), M = n(701488), Z = n(981631), y = n(689938), D = n(419973), L = n(361205), O = n(812320);
let B = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING), V = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH), R = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function k(e) {
    let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            initialSelectedApplicationId: g,
            initialSlide: f = M.ag.DIRECTORY,
            enableSelectedTextChannelInvite: C,
            analyticsLocations: B,
            ...R
        } = e, k = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), {analyticsLocations: P} = (0, m.ZP)(B), [F, U] = a.useState(f), Y = (0, u.Z)(F), [w, G] = a.useState(null), [W, z] = a.useState(g), [q, J] = a.useState(void 0), [K] = (0, x.Z)(null == W ? [] : [W]), X = a.useRef(null), $ = a.useMemo(() => ({
            application_id: W,
            source_section: l.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
        }), [
            l.section,
            W
        ]);
    a.useEffect(() => {
        if (F === M.ag.DIRECTORY && null != Y && Y !== M.ag.DIRECTORY && null != w) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: w });
        }
    }, [
        w,
        Y,
        F
    ]);
    let Q = a.useCallback(e => {
            var t;
            let {applicationId: n} = e, i = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), z(n), U(M.ag.SELECT_CHANNEL);
        }, []), ee = a.useCallback(e => {
            let {applicationId: t} = e;
            z(t), U(M.ag.DETAIL_PAGE);
        }, []);
    a.useEffect(() => {
        h.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [
        t,
        n
    ]), a.useEffect(() => (T.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q), () => {
        T.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
    }), [Q]), a.useEffect(() => (T.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee), () => {
        T.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
    }), [ee]), a.useEffect(() => {
        S.ux();
    }, []);
    let et = () => {
            U(M.ag.DIRECTORY);
        }, en = a.useRef(Date.now()), ei = a.useRef(!1), ea = a.useRef([]), el = a.useCallback(e => {
            null == ea.current.find(t => t === e.applicationId) && ea.current.push(e.applicationId);
        }, []);
    return a.useEffect(() => {
        let e = X.current;
        if (null != e) {
            let t = () => ei.current = !0;
            return null != e && e.addEventListener('scroll', t), () => {
                null != e && e.removeEventListener('scroll', t);
            };
        }
    }, []), a.useEffect(() => () => {
        let e = {
                activity_tiles_viewed: ea.current,
                duration_ms: Date.now() - en.current,
                scrolled: ei.current
            }, i = {
                channel_id: null == t ? void 0 : t.id,
                guild_id: n,
                location: (0, v.k$)(),
                ...(0, p.hH)(n),
                ...(0, p.v_)(I.Z.getChannel(null == t ? void 0 : t.id)),
                ...$,
                ...e
            };
        h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
    }, [
        null == t ? void 0 : t.id,
        $,
        n
    ]), (0, i.jsx)(m.Gt, {
        value: P,
        children: (0, i.jsxs)(d.ModalRoot, {
            className: s()(D.root),
            'aria-label': y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
            ...R,
            children: [
                (0, i.jsx)('img', {
                    alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                    src: L,
                    className: D.shelfTopBackground
                }),
                (0, i.jsx)('img', {
                    alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                    src: O,
                    className: D.shelfTopForeground
                }),
                (0, i.jsxs)(d.ModalHeader, {
                    separator: !1,
                    justify: _.Z.Justify.BETWEEN,
                    className: s()(D.modalHeader),
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.headerTextContainer,
                            children: [
                                (() => {
                                    if (F === M.ag.DETAIL_PAGE)
                                        return null == K ? null : (0, i.jsxs)('div', {
                                            className: D.activityShelfTitle,
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: K.name
                                                }),
                                                (0, i.jsxs)(d.Clickable, {
                                                    className: D.headerBackButton,
                                                    onClick: et,
                                                    children: [
                                                        (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                            size: 'md',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            variant: 'text-sm/semibold',
                                                            children: y.Z.Messages.BACK
                                                        })
                                                    ]
                                                })
                                            ]
                                        });
                                    return (0, i.jsx)('div', {
                                        className: D.activityShelfTitle,
                                        children: (0, i.jsx)(d.Heading, {
                                            variant: 'heading-xl/extrabold',
                                            children: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                                        })
                                    });
                                })(),
                                (() => {
                                    if (F === M.ag.DIRECTORY)
                                        return (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            children: k ? y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                                        });
                                    return null;
                                })()
                            ]
                        }),
                        (0, i.jsx)(d.ModalCloseButton, {
                            className: D.modalCloseButton,
                            onClick: c
                        })
                    ]
                }),
                F === M.ag.DIRECTORY && k ? (0, i.jsx)(A.W, {}) : null,
                (0, i.jsx)('div', { className: D.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                    activeSlide: F,
                    centered: !1,
                    width: V,
                    children: [
                        (0, i.jsx)(d.Slide, {
                            id: M.ag.DIRECTORY,
                            impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                            impressionProperties: {
                                source_section: l.section,
                                impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
                            },
                            children: (0, i.jsx)(H, {
                                slide: F,
                                children: (0, i.jsx)(N.Z, {
                                    scrollerRef: X,
                                    channel: t,
                                    guildId: n,
                                    locationObject: l,
                                    onActivityItemVisible: el,
                                    onClose: c
                                })
                            })
                        }),
                        (0, i.jsx)(d.Slide, {
                            id: M.ag.SELECT_CHANNEL,
                            impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                            impressionProperties: {
                                source_section: l.section,
                                impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                application_id: W
                            },
                            children: (0, i.jsx)(H, {
                                slide: F,
                                children: (0, i.jsx)(b.Z, {
                                    applicationId: W,
                                    selectedChannelId: q,
                                    setSelectedChannelId: J,
                                    guildId: n,
                                    enableSelectedTextChannelInvite: C
                                })
                            })
                        }),
                        (0, i.jsx)(d.Slide, {
                            id: M.ag.DETAIL_PAGE,
                            impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                            impressionProperties: $,
                            children: (0, i.jsx)(H, {
                                slide: F,
                                children: null == W ? null : (0, i.jsx)(j.Z, {
                                    applicationId: W,
                                    channelId: null == t ? void 0 : t.id,
                                    guildId: n,
                                    onActivityLaunch: c
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: D.modalDivider }),
                (0, i.jsx)(d.ModalFooter, {
                    separator: !1,
                    className: D.footer,
                    children: (() => {
                        switch (F) {
                        case M.ag.DIRECTORY:
                            return (0, i.jsx)(N.d, {});
                        case M.ag.SELECT_CHANNEL:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', { className: D.modalDivider }),
                                    (0, i.jsx)(d.ModalFooter, {
                                        separator: !1,
                                        className: D.footer,
                                        children: (0, i.jsx)(b.q, {
                                            onBack: et,
                                            onClose: c,
                                            guildId: n,
                                            applicationId: W,
                                            locationObject: l,
                                            selectedChannelId: q,
                                            enableSelectedTextChannelInvite: C
                                        })
                                    })
                                ]
                            });
                        case M.ag.DETAIL_PAGE:
                        case M.ag.DIRECTORY:
                        default:
                            return null;
                        }
                    })()
                })
            ]
        })
    });
}
let H = e => {
    let {
            children: t,
            slide: n
        } = e, l = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []), r = a.useContext(g.ZP), c = (0, o.e7)([f.Z], () => f.Z.windowSize(r.windowId).height, [r.windowId]);
    return (0, i.jsx)('div', {
        className: s()(D.slideContentOuterContainerSquished, {
            [D.slideContentOuterContainerSquishedWithDev]: n === M.ag.DIRECTORY && l,
            [D.slideContentOuterContainerTall]: n === M.ag.DIRECTORY && c > R,
            [D.slideContentOuterContainerTallWithDev]: n === M.ag.DIRECTORY && c > R && l,
            [D.slideContentOuterContainerNoMetaTextSquished]: n === M.ag.SELECT_CHANNEL,
            [D.slideContentOuterContainerNoMetaTextTall]: n === M.ag.SELECT_CHANNEL && c > R,
            [D.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === M.ag.DETAIL_PAGE,
            [D.slideContentOuterContainerNoMetaTextNoFooterTall]: n === M.ag.DETAIL_PAGE && c > R
        }),
        children: t
    });
};
