"use strict";
n.r(t), n("47120"), n("177593");
var i = n("735250"),
  a = n("470079"),
  l = n("803997"),
  s = n.n(l),
  o = n("392711"),
  r = n.n(o),
  d = n("818405"),
  u = n("587158"),
  c = n("286379"),
  f = n("481060"),
  h = n("13245"),
  p = n("490029"),
  g = n("797614"),
  m = n("703656"),
  E = n("454902"),
  S = n("254761"),
  v = n("547881"),
  y = n("70956"),
  I = n("960048"),
  T = n("792125"),
  N = n("145597"),
  O = n("692546"),
  _ = n("987650"),
  C = n("981631"),
  A = n("689938"),
  x = n("151899");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = 10 * y.default.Millis.SECOND;

function L() {
  let e = (0, N.getPID)(),
    t = (0, N.getRPCAuthToken)();
  (0, p.send)({
    type: C.OverlayEventTypes.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class D extends a.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, M), h.default.track(C.AnalyticEvents.NOTIFICATION_VIEWED, {
      notif_type: _.OverlayNotificationType.OverlayCrashed
    })
  }
  componentWillUnmount() {
    let {
      notificationTimer: e
    } = this;
    null != e && clearTimeout(e)
  }
  render() {
    let {
      info: e,
      error: t
    } = this.props, {
      showTrace: n
    } = this.state, {
      notificationTimer: a
    } = this;
    return null == a ? null : (0, i.jsx)(O.default, {
      observe: !1,
      children: (0, i.jsxs)(f.Clickable, {
        className: s()((0, T.getThemeClass)(C.ThemeTypes.DARK), x.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(E.default, {
          expand: !0,
          colorScheme: E.ColorSchemes.DANGER,
          icon: (0, i.jsx)(S.default, {
            width: 40,
            height: 40,
            className: x.notificationIcon
          }),
          title: A.default.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: A.default.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(v.default, {
          className: x.stackTrace,
          children: [(0, i.jsx)(v.default.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(v.default.Content, {
            className: x.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: x.code,
              children: (0, i.jsx)("pre", {
                children: t.stack
              })
            })
          })]
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      showTrace: !1,
      busy: !1
    }), R(this, "notificationTimer", void 0), R(this, "hideNotification", () => {
      L();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }), R(this, "handleReload", e => {
      this.setState({
        busy: !0
      }), L(), h.default.track(C.AnalyticEvents.NOTIFICATION_CLICKED, {
        notif_type: _.OverlayNotificationType.OverlayCrashed,
        action_type: "reload"
      }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
    }), R(this, "handleNotificationClick", e => {
      e.stopPropagation();
      let {
        notificationTimer: t
      } = this;
      null != t && clearTimeout(t), e.shiftKey && this.setState({
        showTrace: !0
      })
    })
  }
}
let b = r().throttle(() => {
  g.default.increment({
    name: c.MetricEvents.APP_CRASHED,
    tags: ["reason:".concat(d.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
  }, !0)
}, 100, {
  trailing: !1
});
class j extends a.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, m.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, N.getPID)(),
      a = (0, N.getRPCAuthToken)();
    (0, p.send)({
      type: C.OverlayEventTypes.DISPATCH,
      pid: (0, N.getPID)(),
      token: a,
      payloads: [{
        type: "OVERLAY_CRASHED",
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: !0,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", L));
    let l = I.default.captureCrash(e, {
      extra: t
    });
    h.default.track(C.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: l
    }), b()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: a
    } = this.state;
    return null != n ? (0, i.jsx)(D, {
      error: n,
      info: a
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      error: null,
      info: null
    })
  }
}
t.default = j