n.d(t, {
    Z: function () {
        return O;
    },
    h: function () {
        return M;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(525654), o = n.n(r), c = n(91192), d = n(442837), u = n(524437), _ = n(481060), E = n(570140), m = n(607070), I = n(724757), T = n(626135), h = n(585483), N = n(143316), f = n(240126), p = n(791914), C = n(207950), g = n(809780), S = n(981631), A = n(689938), x = n(608777);
function O(e) {
    let {
            setTab: t,
            onJump: n,
            showTutorial: s,
            setSeenTutorial: r,
            closePopout: O,
            badgeState: M
        } = e, v = a.useRef(null), [L, Z] = (0, g.ZP)(v), {
            loadState: P,
            channels: b
        } = L, {
            maybeLoadMore: D,
            markAllRead: j
        } = Z;
    (function (e, t, n) {
        a.useLayoutEffect(() => {
            var i;
            let {scrollToChannelIndex: a} = t;
            n.clearScrollToChannelIndex();
            let {current: s} = e;
            if (null == s || null == a)
                return;
            let l = null === (i = s.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == l)
                return;
            let r = l[a];
            if (null == r)
                return;
            let {
                scrollTop: o,
                scrollHeight: c
            } = s.getScrollerState();
            (r.offsetTop < o || r.offsetTop > o + c) && s.scrollTo({ to: r.offsetTop });
        });
    }(v, L, Z), function (e, t) {
        a.useEffect(() => {
            let n = () => {
                let n = e.channels.find(e => !e.collapsed);
                null != n && t.markChannelRead(n);
            };
            return h.S.subscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
                h.S.unsubscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
            };
        }, [
            t,
            e.channels
        ]);
    }(L, Z), a.useEffect(() => {
        T.default.track(S.rMx.OPEN_POPOUT, { type: 'Inbox' });
    }, []), a.useEffect(() => (E.Z.subscribe('CONNECTION_OPEN', O), () => {
        E.Z.unsubscribe('CONNECTION_OPEN', O);
    }), [O]));
    let U = (0, d.e7)([m.Z], () => m.Z.messageGroupSpacing), y = (0, I.Z)('unreads', v);
    if (0 === b.length) {
        var B;
        return (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsx)(p.Z, {
                    tab: u.X.UNREADS,
                    setTab: t,
                    badgeState: M,
                    closePopout: O
                }),
                (0, i.jsx)(f.Z, {
                    Icon: _.InboxIcon,
                    header: A.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                    tip: (null === (B = o().os) || void 0 === B ? void 0 : B.family) === 'OS X' ? A.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : A.Z.Messages.UNREADS_EMPTY_STATE_TIP
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: l()(x.container, 'group-spacing-'.concat(U)),
        'aria-label': A.Z.Messages.UNREADS_TAB_LABEL,
        children: [
            (0, i.jsx)(p.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: M,
                closePopout: O,
                children: (0, i.jsx)(N.Z, {
                    type: 'top-header',
                    onClick: j
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: y,
                children: (0, i.jsx)(c.SJ, {
                    children: e => {
                        let {
                            ref: t,
                            ...a
                        } = e;
                        return (0, i.jsxs)(_.AdvancedScrollerThin, {
                            ref: e => {
                                var n;
                                v.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                            },
                            ...a,
                            onScroll: P === g.jd.Done ? void 0 : D,
                            className: x.scroller,
                            children: [
                                s ? (0, i.jsx)(R, { setSeenTutorial: r }) : null,
                                (0, C.Z)(b, Z, n),
                                P === g.jd.Done ? null : (0, i.jsx)(_.Spinner, { className: x.spinner })
                            ]
                        });
                    }
                })
            })
        ]
    });
}
function R(e) {
    let {setSeenTutorial: t} = e;
    return (0, i.jsxs)('div', {
        className: x.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: x.tutorialIcon,
                children: (0, i.jsx)(_.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(_.Heading, {
                        className: x.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: A.Z.Messages.UNREADS_TUTORIAL_HEADER
                    }),
                    (0, i.jsx)(_.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: A.Z.Messages.UNREADS_TUTORIAL_BODY
                    }),
                    (0, i.jsx)(_.Button, {
                        className: x.tutorialButton,
                        onClick: t,
                        size: _.Button.Sizes.SMALL,
                        children: A.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let {
        setTab: t,
        badgeState: n,
        closePopout: a
    } = e;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(p.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: a
            }),
            (0, i.jsx)(f.Z, {
                Icon: _.InboxIcon,
                disableStars: !0,
                header: A.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                tip: A.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
            })
        ]
    });
}
