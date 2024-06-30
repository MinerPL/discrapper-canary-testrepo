n.d(t, {
    ZP: function () {
        return U;
    },
    h4: function () {
        return Z;
    },
    nH: function () {
        return P;
    }
}), n(47120), n(653041);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(392711), o = n.n(r), c = n(91192), d = n(442837), u = n(481060), _ = n(668781), E = n(904245), m = n(724757), I = n(294218), T = n(703656), h = n(210887), N = n(592125), f = n(375954), p = n(496675), C = n(933429), g = n(451478), S = n(387204), A = n(626135), x = n(585483), O = n(981631), R = n(689938), M = n(555194);
function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function L(e) {
    e.stopPropagation();
}
let Z = e => {
        let {
            title: t,
            children: n,
            className: a
        } = e;
        return (0, i.jsxs)('div', {
            className: l()(a, M.header),
            children: [
                null == t ? null : (0, i.jsx)(u.Heading, {
                    variant: 'heading-md/medium',
                    children: t
                }),
                n
            ]
        });
    }, P = e => {
        let {
            msg: t,
            image: n
        } = e;
        return (0, i.jsxs)('div', {
            className: M.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: M.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: M.body,
                    children: t
                })
            ]
        });
    };
class b extends a.PureComponent {
    renderJumpButton() {
        let {jumping: e} = this.props;
        return (0, i.jsxs)(u.Clickable, {
            className: M.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: l()(M.__invalid_text, { hidden: e }),
                    children: R.Z.Messages.JUMP
                }),
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                    className: l()(M.loading, { [M.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: n,
            channel: a
        } = this.props;
        return null != e && (t || n || null != a && a.isPrivate()) ? (0, i.jsx)(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            onClick: this.handleClickClose,
            children: (0, i.jsx)(u.CloseSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: M.closeIcon
            })
        }) : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: M.actionButtons,
            children: [
                this.renderJumpButton(),
                this.renderCloseButton()
            ]
        });
    }
    constructor(...e) {
        super(...e), v(this, 'handleClickJump', e => {
            let {
                jumpTo: t,
                message: n
            } = this.props;
            t(n, e);
        }), v(this, 'handleClickClose', e => {
            let {
                onCloseMessage: t,
                message: n
            } = this.props;
            null != t && t(n, e);
        });
    }
}
let D = d.ZP.connectStores([p.Z], e => {
    let {channel: t} = e;
    return { canManageMessages: null != t && p.Z.can(O.Plq.MANAGE_MESSAGES, t) };
})(b);
function j(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: s,
            loading: r,
            loadMore: _,
            renderHeader: E,
            renderEmptyState: I,
            renderItem: T,
            getProTip: N,
            scrollerClassName: f,
            className: p,
            listName: v
        } = e, Z = a.useRef(null), P = (0, m.Z)(v, Z), b = (0, d.e7)([C.Z], () => C.Z.hasNotice()), D = (0, d.e7)([g.Z], () => g.Z.windowSize());
    a.useEffect(() => {
        A.default.track(O.rMx.OPEN_POPOUT, { type: t });
    }, [t]), a.useEffect(() => {
        function e() {
            var e;
            null === (e = Z.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
        }
        function t() {
            var e;
            null === (e = Z.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
        }
        return x.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t), x.S.subscribe(O.CkL.SCROLL_PAGE_UP, e), () => {
            x.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), x.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e);
        };
    }, []);
    let j = a.useCallback(() => {
            var e;
            let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == _ || _());
        }, [
            s,
            _,
            r
        ]), U = [], y = !0;
    null == n ? U = [(0, i.jsx)('div', {
            className: l()(M.emptyPlaceholder, M.loadingPlaceholder),
            children: (0, i.jsx)(u.Spinner, {})
        }, 'spinner')] : 0 === n.length ? U.push((0, i.jsx)(a.Fragment, { children: I(h.Z.theme) }, 'empty-state')) : (y = !1, U = [], o().each(n, e => {
        U.push(...T(e));
    }));
    let B = null;
    null != n && n.length > 0 && null != _ && (B = r ? (0, i.jsx)('div', {
        className: M.loadingMore,
        children: (0, i.jsx)(u.Spinner, {})
    }, 'loading-more-after') : s ? (0, i.jsx)('div', {
        className: M.hasMore,
        children: (0, i.jsx)(u.Button, {
            look: u.Button.Looks.FILLED,
            color: u.Button.Colors.PRIMARY,
            size: u.Button.Sizes.MAX,
            onClick: _,
            children: R.Z.Messages.LOAD_MORE_MESSAGES
        })
    }) : (0, i.jsx)('div', {
        className: M.scrollingFooterWrap,
        children: I(h.Z.theme)
    }));
    let k = null == N ? void 0 : N(), G = y && null != k ? (0, i.jsx)('div', {
            className: M.footer,
            children: (0, i.jsx)(S.Z, {
                style: {
                    width: '100%',
                    paddingTop: 10,
                    paddingBottom: 10
                },
                children: k
            })
        }) : null, F = { maxHeight: D.height - 43 - 25 };
    b && (F.maxHeight -= 40);
    let w = null != _ && s;
    return (0, i.jsx)('div', {
        className: l()(p, M.messagesPopoutWrap),
        style: F,
        onClick: L,
        onDoubleClick: L,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(u.HeadingLevel, {
            component: E(),
            children: [
                (0, i.jsxs)(u.AdvancedScroller, {
                    className: l()(M.messagesPopout, f),
                    onScroll: w ? j : void 0,
                    ref: Z,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: P,
                            children: (0, i.jsx)(c.SJ, {
                                children: e => {
                                    let {
                                        ref: t,
                                        ...n
                                    } = e;
                                    return (0, i.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: U
                                    });
                                }
                            })
                        }),
                        B
                    ]
                }),
                G
            ]
        })
    });
}
function U(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: s,
            messages: l,
            hasMore: r,
            loading: o,
            loadMore: c,
            onJump: u,
            canCloseAllMessages: m = !1,
            renderHeader: h,
            renderEmptyState: p,
            renderMessage: C,
            getProTip: g,
            scrollerClassName: S,
            className: A,
            onCloseMessage: x,
            listName: v
        } = e, L = (0, d.e7)([f.Z], () => {
            let e = null != s ? f.Z.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function Z(e, n) {
        let {
            id: i,
            blocked: a,
            author: s,
            channel_id: l
        } = e;
        if (a)
            _.Z.show({
                title: R.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                body: R.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: s.username }),
                confirmText: R.Z.Messages.OKAY
            });
        else if (!L) {
            let e = N.Z.getChannel(l);
            null != e && (E.Z.trackJump(l, i, t), (0, T.uL)(O.Z5c.CHANNEL(e.getGuildId(), l, i))), null == u || u(n);
        }
    }
    a.useEffect(() => {
        n(s);
    }, [
        s,
        n
    ]);
    let P = a.useMemo(() => null == l ? void 0 : l.map(e => ({
        message: e,
        channel: s
    })), [
        l,
        s
    ]);
    return (0, i.jsx)(j, {
        className: A,
        scrollerClassName: S,
        items: P,
        loading: o,
        analyticsName: t,
        renderEmptyState: p,
        renderHeader: h,
        hasMore: r,
        loadMore: c,
        getProTip: g,
        renderItem: function (e) {
            let {
                message: t,
                channel: n
            } = e;
            if (null == t)
                return [];
            if (null != C)
                return C(t, e => Z(t, e));
            let a = [];
            return null == n ? [] : (a.push((0, i.jsxs)('div', {
                className: M.messageGroupWrapper,
                children: [
                    (0, i.jsx)(I.Z, {
                        className: M.messageGroupCozy,
                        message: t,
                        channel: n
                    }),
                    (0, i.jsx)(D, {
                        channel: s,
                        message: t,
                        jumping: L,
                        canCloseAllMessages: m,
                        jumpTo: Z,
                        onCloseMessage: x
                    })
                ]
            }, t.id)), a);
        },
        listName: v,
        'aria-label': e['aria-label']
    });
}
