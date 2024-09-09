n(47120);
var i,
    l,
    r,
    a = n(735250),
    s = n(470079),
    o = n(299608),
    c = n.n(o),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    _ = n(481060),
    f = n(925549),
    g = n(607070),
    m = n(367907),
    C = n(453542),
    I = n(762914),
    E = n(702321),
    N = n(82295),
    x = n(313201),
    S = n(860144),
    v = n(214852),
    Z = n(518311),
    T = n(355298),
    L = n(869404),
    A = n(333984),
    b = n(210887),
    M = n(592125),
    R = n(158776),
    P = n(55589),
    O = n(515753),
    y = n(981631),
    j = n(689938),
    D = n(680136);
function w(e, t, n) {
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
let U = s.memo(function () {
    return (0, a.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: D.empty,
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
class G extends (l = s.Component) {
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
                let { ref: l, role: r, ...s } = i;
                return (0, a.jsx)(_.FocusJumpSection, {
                    children: (i) =>
                        (0, a.jsx)(_.List, {
                            fade: !0,
                            innerRole: r,
                            innerAriaLabel: j.Z.Messages.DIRECT_MESSAGES,
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            onScroll: this.handleScroll,
                            className: D.scroller,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...s,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            w(this, '_list', null),
            w(this, 'hasReportedAnalytics', !1),
            w(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = s.Children.count(this.props.children);
                if (null == t) return;
                let r = Math.round((t.offsetHeight - 44 * l) / 44),
                    a = r > n.length ? n.slice(0, r + 1) : n,
                    o = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, E.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: o.filter((e) => null != e && R.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    m.ZP.trackWithMetadata(y.rMx.DM_LIST_VIEWED, {
                        ...u,
                        ...(0, C.X)(),
                        changelog_dm_visible: c
                    });
            }),
            w(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t } = this.props;
                return 0 === e ? 0 : t ? 40 : 0;
            }),
            w(
                this,
                'handleScroll',
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && f.Z.updateChannelListScroll(y.ME, e.scrollTop);
                    }
                }, 100)
            ),
            w(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
                    { totalRowCount: r, preRenderedChildren: s } = this.state,
                    o = i[n[t]];
                return null == o
                    ? null
                    : (0, a.jsx)(
                          O.ZP,
                          {
                              channel: o,
                              selected: o.id === l,
                              'aria-posinset': s + t + 1,
                              'aria-setsize': r
                          },
                          o.id
                      );
            }),
            w(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return s.isValidElement(i)
                    ? s.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            w(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, a.jsx)(U, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            w(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, a.jsxs)(
                          N.Z,
                          {
                              className: D.privateChannelsHeaderContainer,
                              children: [
                                  (0, a.jsx)('span', {
                                      className: D.headerText,
                                      children: j.Z.Messages.DIRECT_MESSAGES
                                  }),
                                  (0, a.jsx)(Z.Z, {
                                      tooltip: j.Z.Messages.CREATE_DM,
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: D.privateChannelRecipientsInviteButtonIcon,
                                      icon: _.PlusSmallIcon,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            w(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n } = this.props;
                return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
    }
}
w(G, 'defaultProps', { padding: 8 });
t.Z = (e) => {
    let { version: t, theme: n, children: i, showDMHeader: l } = e,
        r = s.Children.count(i),
        o = M.Z.getMutablePrivateChannels(),
        c = (0, L.k1)(o),
        p = (0, h.Wu)(
            [P.Z, T.Z, A.Z],
            () => {
                let e = P.Z.getPrivateChannelIds(),
                    t = (0, L.tU)(e, [T.Z, A.Z]);
                return (0, I.Ce)(t);
            },
            []
        );
    (0, v.z)(S.R);
    let _ = (0, h.cj)([g.Z, b.Z, M.Z], () => ({
            theme: b.Z.darkSidebar ? y.BRd.DARK : n,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version: null != t ? ''.concat(t, ':').concat(M.Z.getPrivateChannelsVersion()) : M.Z.getPrivateChannelsVersion()
        })),
        f = s.useRef(null),
        m = s.useCallback((e) => {
            let t = f.current,
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
        C = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        E = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        N = (0, x.Dt)(),
        Z = (0, d.ZP)({
            id: 'private-channels-'.concat(N),
            isEnabled: _.keyboardModeEnabled,
            scrollToStart: C,
            scrollToEnd: E,
            defaultFocused: (r + (l ? 1 : 0)).toString(),
            setFocus: m
        });
    return (0, a.jsx)(u.bG, {
        navigator: Z,
        children: (0, a.jsx)(G, {
            channels: c,
            privateChannelIds: p,
            listRef: f,
            theme: n,
            version: t,
            ...e,
            children: i,
            ..._
        })
    });
};
