"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var a, s = n("37983"),
  l = n("884691"),
  i = n("414456"),
  r = n.n(i),
  o = n("77078"),
  u = n("913144"),
  d = n("939488"),
  c = n("157552"),
  f = n("444949"),
  E = n("901582"),
  h = n("778043"),
  _ = n("875358"),
  C = n("737295"),
  S = n("153034"),
  I = n("129215"),
  m = n("49111"),
  p = n("492249"),
  T = n("424902");
a = class extends l.PureComponent {
  componentDidMount() {
    d.setHomeLink(m.Routes.APPLICATION_LIBRARY), (0, h.deepLinkRouteIfLanded)(p.RPCDeepLinks.LIBRARY), u.default.wait(() => (0, c.fetchBranches)()), (0, f.fetchActivityStatistics)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, s.jsx)(_.default, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, s.jsx)("div", {
      children: (0, s.jsx)(E.default, {
        section: m.AnalyticsSections.LIBRARY_INSTALL_MODULE,
        children: (0, s.jsx)(I.default, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(C.default, {
        currentRoute: m.Routes.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, s.jsxs)(o.AdvancedScrollerAuto, {
        className: r(T.container, T.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, s.jsx)(E.default, {
          section: m.AnalyticsSections.LIBRARY_APPLICATION_LIST,
          children: (0, s.jsx)(S.default, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this._scrollerRef = l.createRef(), this._scrollToPadding = 0, this.state = {
      includeUpdatesInScroller: !1
    }, this.handleHeightTallerThanHalfViewportChange = e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }, this.scrollToRow = (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    }
  }
}