"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  r = n("776156"),
  o = n("114535"),
  i = n("599110"),
  c = n("562897"),
  u = n("49111"),
  d = n("234222"),
  h = n("782340"),
  p = n("898545");
class g extends l.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
  }
  componentWillUnmount() {
    this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, a.jsx)(c.default, {
      ...this.props,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.maxScrolledPercentage = 0, this.mountedAt = 0, this.close = () => {
      (0, s.closeModal)(d.CHANGELOG_MODAL_KEY)
    }, this.handleScroll = e => {
      let {
        offsetHeight: t,
        scrollHeight: n,
        scrollTop: a
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (n - t)), 1)
    }, this.track = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
          changeLog: l
        } = t.props,
        {
          date: s,
          revision: r
        } = l,
        o = {
          change_log_id: "".concat(s, ":").concat(r),
          ...n
        };
      !a && (o = {
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
        ...o
      }), i.default.track(e, o)
    }
  }
}

function f(e) {
  let {
    changelog: t,
    loaded: n,
    clientTooOld: i
  } = (0, o.useCurrentChangelog)();
  if (l.useEffect(() => {
      if (n && null != t) return () => r.default.markChangelogAsSeen(t.id, t.date)
    }, [n, t]), i) return (0, a.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: p.empty,
      children: (0, a.jsx)(s.Heading, {
        variant: "heading-lg/medium",
        children: h.default.Messages.CHANGE_LOG_CLIENT_OLD
      })
    })
  });
  if (null == t) return n ? (0, a.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: p.empty,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/semibold",
        children: h.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
      })
    })
  }) : (0, a.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)("div", {
      className: p.empty,
      children: (0, a.jsx)(s.Spinner, {
        type: s.Spinner.Type.WANDERING_CUBES
      })
    })
  });
  return (0, a.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, a.jsx)(g, {
      changeLog: t
    })
  })
}