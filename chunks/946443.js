n.d(t, {
    Z: function () {
        return A;
    },
    h: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    m = n(481060),
    h = n(570140),
    f = n(607070),
    p = n(724757),
    g = n(626135),
    _ = n(585483),
    C = n(358085),
    E = n(143316),
    I = n(240126),
    x = n(791914),
    v = n(147522),
    N = n(809780),
    T = n(981631),
    S = n(388032),
    b = n(129640);
function A(e) {
    let { setTab: t, onJump: n, showTutorial: l, setSeenTutorial: o, closePopout: A, badgeState: Z } = e,
        R = r.useRef(null),
        [P, y] = (0, N.ZP)(R),
        { loadState: L, channels: O } = P,
        { maybeLoadMore: M, markAllRead: k } = y;
    (function (e, t, n) {
        r.useLayoutEffect(() => {
            var i;
            let { scrollToChannelIndex: r } = t;
            n.clearScrollToChannelIndex();
            let { current: l } = e;
            if (null == l || null == r) return;
            let a = null === (i = l.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == a) return;
            let o = a[r];
            if (null == o) return;
            let { scrollTop: s, offsetHeight: c } = l.getScrollerState();
            (o.offsetTop < s || o.offsetTop > s + c) && l.scrollTo({ to: o.offsetTop });
        });
    })(R, P, y),
        (function (e, t) {
            r.useEffect(() => {
                let n = () => {
                    let n = e.channels.find((e) => !e.collapsed);
                    null != n && t.markChannelRead(n);
                };
                return (
                    _.S.subscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
                    () => {
                        _.S.unsubscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                    }
                );
            }, [t, e.channels]);
        })(P, y),
        (function (e) {
            r.useEffect(() => {
                let t = (t) => {
                    ((0, C.isMac)() || (0, C.isMacWeb)() ? t.metaKey : t.ctrlKey) && !t.shiftKey && !t.altKey && 'z' === t.key && e.undoMarkChannelRead();
                };
                return (
                    document.addEventListener('keydown', t),
                    () => {
                        document.removeEventListener('keydown', t);
                    }
                );
            }, [e]);
        })(y),
        r.useEffect(() => {
            g.default.track(T.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        r.useEffect(
            () => (
                h.Z.subscribe('CONNECTION_OPEN', A),
                () => {
                    h.Z.unsubscribe('CONNECTION_OPEN', A);
                }
            ),
            [A]
        );
    let D = (0, d.e7)([f.Z], () => f.Z.messageGroupSpacing),
        B = (0, p.Z)('unreads', R);
    if (0 === O.length) {
        var w;
        return (0, i.jsxs)('div', {
            className: b.container,
            children: [
                (0, i.jsx)(x.Z, {
                    tab: u.X.UNREADS,
                    setTab: t,
                    badgeState: Z,
                    closePopout: A
                }),
                (0, i.jsx)(I.Z, {
                    Icon: m.InboxIcon,
                    header: S.intl.string(S.t['6XMM+P']),
                    tip: (null === (w = s().os) || void 0 === w ? void 0 : w.family) === 'OS X' ? S.intl.string(S.t.w9uDOT) : S.intl.string(S.t.BiUJCw)
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(b.container, 'group-spacing-'.concat(D)),
        'aria-label': S.intl.string(S.t.sRUdBw),
        children: [
            (0, i.jsx)(x.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: Z,
                closePopout: A,
                children: (0, i.jsx)(E.Z, {
                    type: 'top-header',
                    onClick: k
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: B,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...r } = e;
                        return (0, i.jsxs)(m.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (R.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...r,
                            onScroll: L === N.jd.Done ? void 0 : M,
                            className: b.scroller,
                            children: [l ? (0, i.jsx)(j, { setSeenTutorial: o }) : null, (0, v.Z)(O, y, n), L === N.jd.Done ? null : (0, i.jsx)(m.Spinner, { className: b.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function j(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: b.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: b.tutorialIcon,
                children: (0, i.jsx)(m.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(m.Heading, {
                        className: b.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: S.intl.string(S.t.vZPktL)
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.intl.string(S.t.vWkIIC)
                    }),
                    (0, i.jsx)(m.Button, {
                        className: b.tutorialButton,
                        onClick: t,
                        size: m.Button.Sizes.SMALL,
                        children: S.intl.string(S.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    let { setTab: t, badgeState: n, closePopout: r } = e;
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            (0, i.jsx)(x.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: r
            }),
            (0, i.jsx)(I.Z, {
                Icon: m.InboxIcon,
                disableStars: !0,
                header: S.intl.string(S.t['KG/ynZ']),
                tip: S.intl.string(S.t.cvcKzc)
            })
        ]
    });
}
