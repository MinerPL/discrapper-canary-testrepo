n(47120);
var i,
    l,
    r,
    a = n(200651),
    o = n(192379),
    s = n(299608),
    c = n.n(s),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    f = n(481060),
    m = n(925549),
    g = n(607070),
    C = n(367907),
    _ = n(453542),
    x = n(702321),
    v = n(485267),
    I = n(82295),
    b = n(313201),
    S = n(860144),
    Z = n(214852),
    N = n(518311),
    E = n(355298),
    y = n(869404),
    j = n(333984),
    T = n(249978),
    P = n(210887),
    A = n(592125),
    M = n(158776),
    w = n(55589),
    L = n(515753),
    R = n(981631),
    D = n(388032),
    O = n(156762);
function k(e, t, n) {
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
((r = i || (i = {}))[(r.PAGES = 0)] = 'PAGES'), (r[(r.DMS = 1)] = 'DMS');
let U = o.memo(function () {
    return (0, a.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: O.empty,
        children: [
            (0, a.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class G extends (l = o.Component) {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t)
            return {
                preRenderedChildren: 0,
                nonNullChildren: [],
                totalRowCount: n.length
            };
        {
            let e = t.filter((e) => null != e),
                i = e.length;
            return {
                preRenderedChildren: i,
                nonNullChildren: e,
                totalRowCount: i + n.length
            };
        }
    }
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, p.Z)(this.props, e, ['children']);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics();
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: l })
            : ((l += 44 * (i + n) + t),
              this._list.scrollIntoViewRect({
                  start: Math.max(l - 8, 0),
                  end: l + 44 + 8
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, a.jsx)(u.SJ, {
            children: (i) => {
                let { ref: l, role: r, ...o } = i;
                return (0, a.jsx)(f.FocusJumpSection, {
                    children: (i) =>
                        (0, a.jsx)(f.List, {
                            fade: !0,
                            innerRole: r,
                            innerAriaLabel: D.intl.string(D.t.YUU0RE),
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            onScroll: this.handleScroll,
                            className: O.scroller,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...o,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            k(this, '_list', null),
            k(this, 'hasReportedAnalytics', !1),
            k(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = o.Children.count(this.props.children);
                if (null == t) return;
                let r = Math.round((t.offsetHeight - 44 * l) / 44),
                    a = r > n.length ? n.slice(0, r + 1) : n,
                    s = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, x.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && M.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    C.ZP.trackWithMetadata(R.rMx.DM_LIST_VIEWED, {
                        ...u,
                        ...(0, _.X)(),
                        visible_user_ids: s.filter((e) => null != e),
                        changelog_dm_visible: c
                    });
            }),
            k(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t } = this.props;
                return 0 === e ? 0 : t ? 40 : 0;
            }),
            k(
                this,
                'handleScroll',
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && m.Z.updateChannelListScroll(R.ME, e.scrollTop);
                    }
                }, 100)
            ),
            k(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
                    { totalRowCount: r, preRenderedChildren: o } = this.state,
                    s = i[n[t]];
                return null == s
                    ? null
                    : (0, a.jsx)(
                          L.ZP,
                          {
                              channel: s,
                              selected: s.id === l,
                              'aria-posinset': o + t + 1,
                              'aria-setsize': r
                          },
                          s.id
                      );
            }),
            k(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return o.isValidElement(i)
                    ? o.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            k(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, a.jsx)(U, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            k(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, a.jsxs)(
                          I.Z,
                          {
                              className: O.privateChannelsHeaderContainer,
                              children: [
                                  (0, a.jsx)('span', {
                                      className: O.headerText,
                                      children: D.intl.string(D.t.YUU0RE)
                                  }),
                                  (0, a.jsx)(N.Z, {
                                      tooltip: D.intl.string(D.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: O.privateChannelRecipientsInviteButtonIcon,
                                      icon: f.PlusSmallIcon,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            k(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n } = this.props;
                return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
    }
}
k(G, 'defaultProps', { padding: 8 });
t.Z = (e) => {
    let { version: t, theme: n, children: i, showDMHeader: l } = e,
        r = o.Children.count(i),
        s = A.Z.getMutablePrivateChannels(),
        c = (0, y.k1)(s),
        p = (0, h.Wu)(
            [w.Z, E.Z, j.Z],
            () => {
                let e = w.Z.getPrivateChannelIds();
                return (0, y.tU)(e, [E.Z, j.Z]);
            },
            []
        );
    (0, Z.z)(S.R);
    let { recentActivityStatusEnabled: f } = (0, T.U)({ location: 'PrivateChannelsList' });
    o.useEffect(() => {
        f && (0, v.Jn)();
    }, [f]);
    let m = (0, h.cj)([g.Z, P.Z, A.Z], () => ({
            theme: P.Z.darkSidebar ? R.BRd.DARK : n,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version: null != t ? ''.concat(t, ':').concat(A.Z.getPrivateChannelsVersion()) : A.Z.getPrivateChannelsVersion()
        })),
        C = o.useRef(null),
        _ = o.useCallback((e) => {
            let t = C.current,
                n = document.querySelector(e);
            null != t &&
                null != n &&
                t.scrollIntoViewNode({
                    node: n,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    }
                });
        }, []),
        x = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        I = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        N = (0, b.Dt)(),
        M = (0, d.ZP)({
            id: 'private-channels-'.concat(N),
            isEnabled: m.keyboardModeEnabled,
            scrollToStart: x,
            scrollToEnd: I,
            defaultFocused: (r + (l ? 1 : 0)).toString(),
            setFocus: _
        });
    return (0, a.jsx)(u.bG, {
        navigator: M,
        children: (0, a.jsx)(G, {
            channels: c,
            privateChannelIds: p,
            listRef: C,
            theme: n,
            version: t,
            ...e,
            children: i,
            ...m
        })
    });
};
