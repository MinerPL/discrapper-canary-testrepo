"use strict";
n.r(t), n("47120");
var l, a, s, i = n("735250"),
  r = n("470079"),
  o = n("299608"),
  u = n.n(o),
  d = n("924826"),
  c = n("442837"),
  f = n("902704"),
  h = n("481060"),
  C = n("925549"),
  p = n("607070"),
  m = n("367907"),
  g = n("453542"),
  E = n("762914"),
  S = n("518311"),
  _ = n("355298"),
  I = n("869404"),
  N = n("333984"),
  T = n("210887"),
  A = n("592125"),
  L = n("158776"),
  v = n("55589"),
  x = n("153124"),
  R = n("908773"),
  M = n("151827"),
  O = n("515753"),
  y = n("981631"),
  D = n("689938"),
  b = n("82545");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = l || (l = {}))[s.PAGES = 0] = "PAGES", s[s.DMS = 1] = "DMS";
let G = r.memo(function() {
  return (0, i.jsxs)("svg", {
    width: "184",
    height: "428",
    viewBox: "0 0 184 428",
    className: b.empty,
    children: [(0, i.jsx)("rect", {
      x: 40,
      y: 6,
      width: 144,
      height: 20,
      rx: 10
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 16,
      r: 16
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 50,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .9
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 60,
      r: 16,
      opacity: .9
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 94,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .8
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 104,
      r: 16,
      opacity: .8
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 138,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .7
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 148,
      r: 16,
      opacity: .7
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 182,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .6
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 192,
      r: 16,
      opacity: .6
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 226,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .5
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 236,
      r: 16,
      opacity: .5
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 270,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .4
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 280,
      r: 16,
      opacity: .4
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 314,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .3
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 324,
      r: 16,
      opacity: .3
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 358,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .2
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 368,
      r: 16,
      opacity: .2
    }), (0, i.jsx)("rect", {
      x: 40,
      y: 402,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .1
    }), (0, i.jsx)("circle", {
      cx: 16,
      cy: 412,
      r: 16,
      opacity: .1
    })]
  })
});
class U extends(a = r.Component) {
  static getDerivedStateFromProps(e) {
    let {
      children: t,
      privateChannelIds: n
    } = e;
    if (null == t) return {
      preRenderedChildren: 0,
      nonNullChildren: [],
      totalRowCount: n.length
    };
    {
      let e = t.filter(e => null != e),
        l = e.length;
      return {
        preRenderedChildren: l,
        nonNullChildren: e,
        totalRowCount: l + n.length
      }
    }
  }
  componentDidMount() {
    let {
      selectedChannelId: e,
      homeLink: t
    } = this.props;
    null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics()
  }
  shouldComponentUpdate(e) {
    return !(0, f.default)(this.props, e, ["children"])
  }
  componentDidUpdate(e) {
    let {
      selectedChannelId: t,
      homeLink: n
    } = this.props;
    null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics()
  }
  scrollToChannel(e) {
    if (null == this._list) return;
    let {
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state, l = null != e ? this.props.privateChannelIds.indexOf(e) : -1, a = 0;
    l < 0 || null == e ? this._list.scrollTo({
      to: a
    }) : (a += 44 * (l + n) + t, this._list.scrollIntoViewRect({
      start: Math.max(a - 8, 0),
      end: a + 44 + 8
    }))
  }
  render() {
    let {
      privateChannelIds: e,
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state;
    return (0, i.jsx)(d.ListNavigatorContainer, {
      children: l => {
        let {
          ref: a,
          role: s,
          ...r
        } = l;
        return (0, i.jsx)(h.FocusJumpSection, {
          children: l => (0, i.jsx)(h.List, {
            fade: !0,
            innerRole: s,
            innerAriaLabel: D.default.Messages.DIRECT_MESSAGES,
            innerTag: "ul",
            ref: e => {
              var t;
              this._list = e, this.props.listRef.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
            },
            onScroll: this.handleScroll,
            className: b.scroller,
            sectionHeight: this.getSectionHeight,
            paddingTop: t,
            paddingBottom: 8,
            rowHeight: this.getRowHeight,
            renderSection: this.renderSection,
            renderRow: this.renderRow,
            sections: [n, Math.max(e.length, 1)],
            ...r,
            ...l
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      initialized: !1,
      preRenderedChildren: 0,
      totalRowCount: 0,
      nonNullChildren: []
    }), j(this, "_list", null), j(this, "hasReportedAnalytics", !1), j(this, "reportAnalytics", () => {
      var e;
      if (this.hasReportedAnalytics) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let {
        privateChannelIds: n,
        channels: l
      } = this.props;
      if (0 === n.length) return;
      let a = r.Children.count(this.props.children);
      if (null == t) return;
      let s = Math.round((t.offsetHeight - 44 * a) / 44),
        i = s > n.length ? n.slice(0, s + 1) : n,
        o = i.map(e => null != l[e] ? l[e].getRecipientId() : null),
        u = {
          num_users_visible: i.length,
          num_users_visible_with_mobile_indicator: o.filter(e => null != e && L.default.isMobileOnline(e)).length
        };
      this.hasReportedAnalytics = !0, m.default.trackWithMetadata(y.AnalyticEvents.DM_LIST_VIEWED, {
        ...u,
        ...(0, g.getNowPlayingAnalytics)()
      })
    }), j(this, "getSectionHeight", e => {
      let {
        showDMHeader: t
      } = this.props;
      return 0 === e ? 0 : t ? 40 : 0
    }), j(this, "handleScroll", u()(() => {
      if (null != this._list) {
        let e = this._list.getScrollerNode();
        null != e && C.default.updateChannelListScroll(y.ME, e.scrollTop)
      }
    }, 100)), j(this, "renderDM", (e, t) => {
      let {
        privateChannelIds: n,
        channels: l,
        selectedChannelId: a
      } = this.props, {
        totalRowCount: s,
        preRenderedChildren: r
      } = this.state, o = l[n[t]];
      return null == o ? null : (0, i.jsx)(O.default, {
        channel: o,
        selected: o.id === a,
        "aria-posinset": r + t + 1,
        "aria-setsize": s
      }, o.id)
    }), j(this, "renderChild", e => {
      let {
        nonNullChildren: t,
        totalRowCount: n
      } = this.state, l = t[e];
      return r.isValidElement(l) ? r.cloneElement(l, {
        "aria-setsize": n,
        "aria-posinset": e + 1
      }) : l
    }), j(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        privateChannelIds: l
      } = this.props;
      return 0 === t ? this.renderChild(n) : 0 === n && 0 === l.length ? (0, i.jsx)(G, {}, "no-private-channels") : this.renderDM(t, n)
    }), j(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        showDMHeader: n
      } = this.props;
      return 0 !== t && n ? (0, i.jsxs)(M.default, {
        className: b.privateChannelsHeaderContainer,
        children: [(0, i.jsx)("span", {
          className: b.headerText,
          children: D.default.Messages.DIRECT_MESSAGES
        }), (0, i.jsx)(S.default, {
          tooltip: D.default.Messages.CREATE_DM,
          tooltipPosition: "top",
          popoutAlign: "left",
          iconClassName: b.privateChannelRecipientsInviteButtonIcon,
          icon: R.default,
          subscribeToGlobalHotkey: !0
        })]
      }, t) : null
    }), j(this, "getRowHeight", (e, t) => {
      let {
        privateChannelIds: n
      } = this.props;
      return 1 === e && 0 === t && 0 === n.length ? 428 : 44
    })
  }
}
j(U, "defaultProps", {
  padding: 8
});
t.default = e => {
  let {
    version: t,
    theme: n,
    children: l,
    showDMHeader: a
  } = e, s = r.Children.count(l), o = A.default.getMutablePrivateChannels(), u = (0, I.filterOutMessageRequestsAndSpam)(o), f = (0, c.useStateFromStoresArray)([v.default, _.default, N.default], () => {
    let e = v.default.getPrivateChannelIds(),
      t = (0, I.filterOutMessageRequestsAndSpamById)(e, [_.default, N.default]);
    return (0, E.filterBroadcastingGDMs)(t)
  }, []), h = (0, c.useStateFromStoresObject)([p.default, T.default, A.default], () => ({
    theme: T.default.darkSidebar ? y.ThemeTypes.DARK : n,
    keyboardModeEnabled: p.default.keyboardModeEnabled,
    version: null != t ? "".concat(t, ":").concat(A.default.getPrivateChannelsVersion()) : A.default.getPrivateChannelsVersion()
  })), C = r.useRef(null), m = r.useCallback(e => {
    let t = C.current,
      n = document.querySelector(e);
    null != t && null != n && t.scrollIntoViewNode({
      node: n,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), g = r.useCallback(() => new Promise(e => {
    let t = C.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), S = r.useCallback(() => new Promise(e => {
    let t = C.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), L = (0, x.useUID)(), R = (0, d.default)({
    id: "private-channels-".concat(L),
    isEnabled: h.keyboardModeEnabled,
    scrollToStart: g,
    scrollToEnd: S,
    defaultFocused: (s + (a ? 1 : 0)).toString(),
    setFocus: m
  });
  return (0, i.jsx)(d.ListNavigatorProvider, {
    navigator: R,
    children: (0, i.jsx)(U, {
      channels: u,
      privateChannelIds: f,
      listRef: C,
      theme: n,
      version: t,
      ...e,
      children: l,
      ...h
    })
  })
}