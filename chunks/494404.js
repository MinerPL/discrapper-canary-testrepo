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
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n.n(r),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    _ = n(668781),
    E = n(904245),
    I = n(724757),
    m = n(951844),
    T = n(294218),
    N = n(703656),
    h = n(210887),
    C = n(592125),
    p = n(375954),
    f = n(496675),
    g = n(933429),
    A = n(451478),
    S = n(626135),
    M = n(585483),
    x = n(981631),
    O = n(689938),
    R = n(177387);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    e.stopPropagation();
}
let Z = (e) => {
        let { title: t, icon: n, children: a, className: s } = e;
        return (0, i.jsxs)('div', {
            className: l()(s, R.header),
            children: [
                (0, i.jsxs)('div', {
                    className: R.titleContainer,
                    children: [
                        null != n ? (0, i.jsx)(n, { color: u.tokens.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, i.jsx)(u.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                a
            ]
        });
    },
    P = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)('div', {
            className: R.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: R.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: R.body,
                    children: t
                })
            ]
        });
    };
class D extends a.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(u.Clickable, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: l()(R.__invalid_text, { hidden: e }),
                    children: O.Z.Messages.JUMP
                }),
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                    className: l()(R.loading, { [R.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: a } = this.props;
        return null != e && (t || n || (null != a && a.isPrivate()))
            ? (0, i.jsx)(u.Button, {
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(u.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: R.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: R.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            v(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let b = d.ZP.connectStores([f.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && f.Z.can(x.Plq.MANAGE_MESSAGES, t) };
})(D);
function j(e) {
    let { analyticsName: t, items: n, hasMore: s, loading: r, loadMore: _, renderHeader: E, renderEmptyState: T, renderItem: N, getProTip: C, scrollerClassName: p, className: f, listName: v } = e,
        Z = a.useRef(null),
        P = (0, I.Z)(v, Z),
        D = (0, d.e7)([g.Z], () => g.Z.hasNotice()),
        b = (0, d.e7)([A.Z], () => A.Z.windowSize());
    a.useEffect(() => {
        S.default.track(x.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        a.useEffect(() => {
            function e() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                M.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, t),
                M.S.subscribe(x.CkL.SCROLL_PAGE_UP, e),
                () => {
                    M.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, t), M.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let j = a.useCallback(() => {
            var e;
            let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == _ || _());
        }, [s, _, r]),
        U = [],
        y = !0;
    null == n
        ? (U = [
              (0, i.jsx)(
                  'div',
                  {
                      className: l()(R.emptyPlaceholder, R.loadingPlaceholder),
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? U.push((0, i.jsx)(a.Fragment, { children: T(h.Z.theme) }, 'empty-state'))
          : ((y = !1),
            (U = []),
            o().each(n, (e) => {
                U.push(...N(e));
            }));
    let B = null;
    null != n &&
        n.length > 0 &&
        null != _ &&
        (B = r
            ? (0, i.jsx)(
                  'div',
                  {
                      className: R.loadingMore,
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'loading-more-after'
              )
            : s
              ? (0, i.jsx)('div', {
                    className: R.hasMore,
                    children: (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.FILLED,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.MAX,
                        onClick: _,
                        children: O.Z.Messages.LOAD_MORE_MESSAGES
                    })
                })
              : (0, i.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: T(h.Z.theme)
                }));
    let k = null == C ? void 0 : C(),
        G =
            y && null != k
                ? (0, i.jsx)('div', {
                      className: R.footer,
                      children: (0, i.jsx)(m.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: k
                      })
                  })
                : null,
        F = { maxHeight: b.height - 43 - 25 };
    D && (F.maxHeight -= 40);
    let w = null != _ && s;
    return (0, i.jsx)('div', {
        className: l()(f, R.messagesPopoutWrap),
        style: F,
        onClick: L,
        onDoubleClick: L,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(u.HeadingLevel, {
            component: E(),
            children: [
                (0, i.jsxs)(u.AdvancedScroller, {
                    className: l()(R.messagesPopout, p),
                    onScroll: w ? j : void 0,
                    ref: Z,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: P,
                            children: (0, i.jsx)(c.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
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
    let { analyticsName: t, onFetch: n, channel: s, messages: l, hasMore: r, loading: o, loadMore: c, onJump: u, canCloseAllMessages: I = !1, renderHeader: m, renderEmptyState: h, renderMessage: f, getProTip: g, scrollerClassName: A, className: S, onCloseMessage: M, listName: v } = e,
        L = (0, d.e7)([p.Z], () => {
            let e = null != s ? p.Z.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function Z(e, n) {
        let { id: i, blocked: a, author: s, channel_id: l } = e;
        if (a)
            _.Z.show({
                title: O.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                body: O.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: s.username }),
                confirmText: O.Z.Messages.OKAY
            });
        else if (!L) {
            let e = C.Z.getChannel(l);
            null != e && (E.Z.trackJump(l, i, t), (0, N.uL)(x.Z5c.CHANNEL(e.getGuildId(), l, i))), null == u || u(n);
        }
    }
    a.useEffect(() => {
        n(s);
    }, [s, n]);
    let P = a.useMemo(
        () =>
            null == l
                ? void 0
                : l.map((e) => ({
                      message: e,
                      channel: s
                  })),
        [l, s]
    );
    return (0, i.jsx)(j, {
        className: S,
        scrollerClassName: A,
        items: P,
        loading: o,
        analyticsName: t,
        renderEmptyState: h,
        renderHeader: m,
        hasMore: r,
        loadMore: c,
        getProTip: g,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != f) return f(t, (e) => Z(t, e));
            let a = [];
            return null == n
                ? []
                : (a.push(
                      (0, i.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, i.jsx)(T.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, i.jsx)(b, {
                                      channel: s,
                                      message: t,
                                      jumping: L,
                                      canCloseAllMessages: I,
                                      jumpTo: Z,
                                      onCloseMessage: M
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  a);
        },
        listName: v,
        'aria-label': e['aria-label']
    });
}
