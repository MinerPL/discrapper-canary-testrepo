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
  m = n("925549"),
  C = n("607070"),
  p = n("367907"),
  g = n("453542"),
  E = n("762914"),
  _ = n("702321"),
  S = n("518311"),
  I = n("355298"),
  N = n("869404"),
  T = n("333984"),
  A = n("210887"),
  L = n("592125"),
  v = n("158776"),
  x = n("55589"),
  R = n("153124"),
  M = n("908773"),
  y = n("151827"),
  O = n("515753"),
  D = n("981631"),
  b = n("689938"),
  j = n("181235");

function P(e, t, n) {
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
    className: j.empty,
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
            innerAriaLabel: b.default.Messages.DIRECT_MESSAGES,
            innerTag: "ul",
            ref: e => {
              var t;
              this._list = e, this.props.listRef.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
            },
            onScroll: this.handleScroll,
            className: j.scroller,
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
    super(...e), P(this, "state", {
      initialized: !1,
      preRenderedChildren: 0,
      totalRowCount: 0,
      nonNullChildren: []
    }), P(this, "_list", null), P(this, "hasReportedAnalytics", !1), P(this, "reportAnalytics", () => {
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
        u = n.some(e => (0, _.default)(e)),
        d = {
          num_users_visible: i.length,
          num_users_visible_with_mobile_indicator: o.filter(e => null != e && v.default.isMobileOnline(e)).length
        };
      this.hasReportedAnalytics = !0, p.default.trackWithMetadata(D.AnalyticEvents.DM_LIST_VIEWED, {
        ...d,
        ...(0, g.getNowPlayingAnalytics)(),
        changelog_dm_visible: u
      })
    }), P(this, "getSectionHeight", e => {
      let {
        showDMHeader: t
      } = this.props;
      return 0 === e ? 0 : t ? 40 : 0
    }), P(this, "handleScroll", u()(() => {
      if (null != this._list) {
        let e = this._list.getScrollerNode();
        null != e && m.default.updateChannelListScroll(D.ME, e.scrollTop)
      }
    }, 100)), P(this, "renderDM", (e, t) => {
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
    }), P(this, "renderChild", e => {
      let {
        nonNullChildren: t,
        totalRowCount: n
      } = this.state, l = t[e];
      return r.isValidElement(l) ? r.cloneElement(l, {
        "aria-setsize": n,
        "aria-posinset": e + 1
      }) : l
    }), P(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        privateChannelIds: l
      } = this.props;
      return 0 === t ? this.renderChild(n) : 0 === n && 0 === l.length ? (0, i.jsx)(G, {}, "no-private-channels") : this.renderDM(t, n)
    }), P(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        showDMHeader: n
      } = this.props;
      return 0 !== t && n ? (0, i.jsxs)(y.default, {
        className: j.privateChannelsHeaderContainer,
        children: [(0, i.jsx)("span", {
          className: j.headerText,
          children: b.default.Messages.DIRECT_MESSAGES
        }), (0, i.jsx)(S.default, {
          tooltip: b.default.Messages.CREATE_DM,
          tooltipPosition: "top",
          popoutAlign: "left",
          iconClassName: j.privateChannelRecipientsInviteButtonIcon,
          icon: M.default,
          subscribeToGlobalHotkey: !0
        })]
      }, t) : null
    }), P(this, "getRowHeight", (e, t) => {
      let {
        privateChannelIds: n
      } = this.props;
      return 1 === e && 0 === t && 0 === n.length ? 428 : 44
    })
  }
}
P(U, "defaultProps", {
  padding: 8
});
t.default = e => {
  let {
    version: t,
    theme: n,
    children: l,
    showDMHeader: a
  } = e, s = r.Children.count(l), o = L.default.getMutablePrivateChannels(), u = (0, N.filterOutMessageRequestsAndSpam)(o), f = (0, c.useStateFromStoresArray)([x.default, I.default, T.default], () => {
    let e = x.default.getPrivateChannelIds(),
      t = (0, N.filterOutMessageRequestsAndSpamById)(e, [I.default, T.default]);
    return (0, E.filterBroadcastingGDMs)(t)
  }, []), h = (0, c.useStateFromStoresObject)([C.default, A.default, L.default], () => ({
    theme: A.default.darkSidebar ? D.ThemeTypes.DARK : n,
    keyboardModeEnabled: C.default.keyboardModeEnabled,
    version: null != t ? "".concat(t, ":").concat(L.default.getPrivateChannelsVersion()) : L.default.getPrivateChannelsVersion()
  })), m = r.useRef(null), p = r.useCallback(e => {
    let t = m.current,
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
    let t = m.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), _ = r.useCallback(() => new Promise(e => {
    let t = m.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), S = (0, R.useUID)(), v = (0, d.default)({
    id: "private-channels-".concat(S),
    isEnabled: h.keyboardModeEnabled,
    scrollToStart: g,
    scrollToEnd: _,
    defaultFocused: (s + (a ? 1 : 0)).toString(),
    setFocus: p
  });
  return (0, i.jsx)(d.ListNavigatorProvider, {
    navigator: v,
    children: (0, i.jsx)(U, {
      channels: u,
      privateChannelIds: f,
      listRef: m,
      theme: n,
      version: t,
      ...e,
      children: l,
      ...h
    })
  })
}