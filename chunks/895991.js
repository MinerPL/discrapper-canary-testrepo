"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("570140"),
  u = n("150063"),
  d = n("274616"),
  c = n("827837"),
  f = n("410575"),
  E = n("3570"),
  h = n("237919"),
  _ = n("957657"),
  C = n("665307"),
  m = n("530151"),
  S = n("981631"),
  I = n("186901"),
  p = n("872592");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends s.PureComponent {
  componentDidMount() {
    u.setHomeLink(S.Routes.APPLICATION_LIBRARY), (0, E.deepLinkRouteIfLanded)(I.RPCDeepLinks.LIBRARY), o.default.wait(() => (0, d.fetchBranches)()), (0, c.fetchActivityStatistics)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, a.jsx)(h.default, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, a.jsx)("div", {
      children: (0, a.jsx)(f.default, {
        section: S.AnalyticsSections.LIBRARY_INSTALL_MODULE,
        children: (0, a.jsx)(m.default, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsx)(_.default, {
        currentRoute: S.Routes.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, a.jsxs)(r.AdvancedScrollerAuto, {
        className: i()(p.container, p.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, a.jsx)(f.default, {
          section: S.AnalyticsSections.LIBRARY_APPLICATION_LIST,
          children: (0, a.jsx)(C.default, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "_scrollerRef", s.createRef()), T(this, "_scrollToOnMount", void 0), T(this, "_scrollToPadding", 0), T(this, "state", {
      includeUpdatesInScroller: !1
    }), T(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), T(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}