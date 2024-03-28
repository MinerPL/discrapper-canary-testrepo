"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("481060"),
  r = a("661111"),
  o = a("766411"),
  i = a("626135"),
  c = a("388080"),
  u = a("981631"),
  d = a("596401"),
  h = a("689938"),
  p = a("201364");

function g(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class f extends l.PureComponent {
  componentDidMount() {
    this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0)
  }
  componentWillUnmount() {
    this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED)
  }
  render() {
    return (0, n.jsx)(c.default, {
      ...this.props,
      onClose: this.close,
      onScroll: this.handleScroll,
      track: this.track
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, g(this, "maxScrolledPercentage", 0), g(this, "mountedAt", 0), g(this, "close", () => {
      (0, s.closeModal)(d.CHANGELOG_MODAL_KEY)
    }), g(this, "handleScroll", e => {
      let {
        offsetHeight: t,
        scrollHeight: a,
        scrollTop: n
      } = e.getScrollerState();
      this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (a - t)), 1)
    }), g(this, "track", function(e) {
      let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        {
          changeLog: l
        } = t.props,
        {
          date: s,
          revision: r
        } = l,
        o = {
          change_log_id: "".concat(s, ":").concat(r),
          ...a
        };
      !n && (o = {
        seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
        ...o
      }), i.default.track(e, o)
    })
  }
}

function C(e) {
  let {
    changelog: t,
    loaded: a,
    clientTooOld: i
  } = (0, o.useCurrentChangelog)();
  if (l.useEffect(() => {
      if (a && null != t) return () => r.default.markChangelogAsSeen(t.id, t.date)
    }, [a, t]), i) return (0, n.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, n.jsx)("div", {
      className: p.empty,
      children: (0, n.jsx)(s.Heading, {
        variant: "heading-lg/medium",
        children: h.default.Messages.CHANGE_LOG_CLIENT_OLD
      })
    })
  });
  if (null == t) return a ? (0, n.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, n.jsx)("div", {
      className: p.empty,
      children: (0, n.jsx)(s.Text, {
        variant: "text-md/semibold",
        children: h.default.Messages.CHANGE_LOG_FAILED_TO_LOAD
      })
    })
  }) : (0, n.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, n.jsx)("div", {
      className: p.empty,
      children: (0, n.jsx)(s.Spinner, {
        type: s.Spinner.Type.WANDERING_CUBES
      })
    })
  });
  return (0, n.jsx)(s.ModalRoot, {
    transitionState: e.transitionState,
    children: (0, n.jsx)(f, {
      changeLog: t
    })
  })
}