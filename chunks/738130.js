n.d(t, {
    Z: function () {
        return V;
    }
});
var i = n(735250), l = n(470079), r = n(120356), o = n.n(r), a = n(392711), s = n(772848), c = n(873546), u = n(481060), d = n(425493), C = n(612226), p = n(714338), h = n(782568), f = n(252618), _ = n(434404), m = n(703656), E = n(292665), v = n(671533), A = n(626135), g = n(63063), Z = n(674588), L = n(463571), M = n(887706), N = n(132871), I = n(147890), S = n(981631), T = n(420212), x = n(689938), y = n(232329);
let P = g.Z.getArticleURL(S.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function O(e) {
    let {onClose: t} = e, n = l.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: y.closeWrapper,
        children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: y.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: y.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function R(e) {
    let {
            onTitleClick: t,
            showsLearnMoreCta: n,
            guildId: r,
            children: a
        } = e, s = (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: x.Z.Messages.APP_DIRECTORY }),
                n && (0, i.jsx)(u.Anchor, {
                    onClick: function () {
                        A.default.track(S.rMx.APP_DIRECTORY_CTA_CLICKED, {
                            cta: 'directory-help-center',
                            current_page: N.ApplicationDirectoryViews.HOME,
                            guild_id: r
                        }), (0, h.Z)(P);
                    },
                    children: x.Z.Messages.LEARN_MORE
                })
            ]
        });
    return (0, i.jsxs)('div', {
        className: y.header,
        children: [
            null != t ? (0, i.jsx)(L.Z, {
                href: S.Z5c.APPLICATION_DIRECTORY,
                children: (0, i.jsx)(u.Clickable, {
                    onClick: t,
                    className: o()(y.titleContainer, y.clickable),
                    children: s
                })
            }) : (0, i.jsx)('div', {
                className: y.titleContainer,
                children: s
            }),
            a
        ]
    });
}
function j(e) {
    let t, {
            view: n,
            onClick: l
        } = e;
    if (null == n)
        return null;
    switch (n.type) {
    case N.ApplicationDirectoryViews.HOME:
        t = x.Z.Messages.HOME;
        break;
    case N.ApplicationDirectoryViews.SEARCH:
        t = x.Z.Messages.SEARCH;
        break;
    case N.ApplicationDirectoryViews.APPLICATION:
        var r;
        t = null !== (r = null == n ? void 0 : n.applicationName) && void 0 !== r ? r : x.Z.Messages.BACK;
        break;
    default:
        t = x.Z.Messages.BACK;
    }
    return (0, i.jsxs)(u.Clickable, {
        className: y.back,
        onClick: l,
        children: [
            (0, i.jsx)(v.Z, {
                direction: v.Z.Directions.LEFT,
                className: y.backIcon
            }),
            (0, i.jsx)(u.Heading, {
                className: y.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let D = (0, a.debounce)(e => {
    let {
        scrollTop: t,
        scrollOffset: n,
        scrollHeight: i,
        location: l,
        guildId: r,
        sessionId: o
    } = e;
    t > 0 && A.default.track(S.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
        scroll_visible_percentile: (t + n) / i,
        guild_id: r,
        location: l,
        directory_session_id: o
    });
}, 200);
function V(e) {
    let {children: t} = e, n = l.useRef(null), r = (0, M.Z)(), a = (0, N.useApplicationDirectoryHistory)(e => e.guildId), d = (0, N.useApplicationDirectoryHistory)(e => e.entrypoint), h = (0, N.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), E = (0, N.getCurrentView)(), v = (0, N.getPreviousView)(), g = l.useRef(), L = (null == E ? void 0 : E.type) !== N.ApplicationDirectoryViews.HOME, P = (null == E ? void 0 : E.type) === N.ApplicationDirectoryViews.APPLICATION ? null == E ? void 0 : E.applicationId : void 0;
    (0, f.Tt)({ location: x.Z.Messages.APP_DIRECTORY });
    let V = (null == E ? void 0 : E.type) !== N.ApplicationDirectoryViews.HOME && null != v;
    l.useEffect(() => {
        !h && null == d && (A.default.track(S.rMx.APP_DIRECTORY_OPENED, { source: N.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, N.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [
        d,
        h
    ]), l.useEffect(() => {
        if (r)
            return p.Z.setLayout(C.ZP), p.Z.enable(), () => p.Z.disable();
    }, [r]), l.useEffect(() => {
        Z.CP();
    }, []), l.useEffect(() => {
        r && Z.g5();
    }, [r]), l.useEffect(() => {
        g.current = (0, s.Z)();
    }, [
        null == E ? void 0 : E.type,
        P
    ]);
    let U = l.useCallback(() => {
        var e, t;
        (0, m.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === N.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != a && _.Z.open(a, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [
        d,
        a
    ]);
    return l.useEffect(() => {
        let e = e => {
            e.key === T.vn.ESCAPE && (e.stopPropagation(), U());
        };
        return document.addEventListener('keydown', e), () => {
            document.removeEventListener('keydown', e);
        };
    }, [U]), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(u.AdvancedScroller, {
            className: o()(y.directoryContainer, {
                [y.directoryContainerMobile]: c.tq,
                [y.directoryContainerTablet]: c.Em
            }),
            ref: n,
            onScroll: () => {
                var e, t, i;
                return D({
                    scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                    scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                    scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                    location: null == E ? void 0 : E.type,
                    guildId: a,
                    sessionId: g.current
                });
            },
            children: (0, i.jsxs)('div', {
                className: y.content,
                children: [
                    (0, i.jsx)(R, {
                        onTitleClick: L ? I.goHome : void 0,
                        showsLearnMoreCta: (null == E ? void 0 : E.type) === N.ApplicationDirectoryViews.HOME,
                        guildId: a,
                        children: r ? (0, i.jsx)(O, { onClose: U }) : null
                    }),
                    V && (0, i.jsx)(j, {
                        view: v,
                        onClick: () => {
                            (0, m.op)();
                        }
                    }),
                    t
                ]
            })
        })
    });
}
