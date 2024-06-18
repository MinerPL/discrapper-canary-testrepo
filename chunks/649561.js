"use strict";
n(47120), n(177593);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(392711),
  r = n.n(o),
  d = n(818405),
  c = n(587158),
  u = n(286379),
  h = n(481060),
  p = n(13245),
  f = n(490029),
  E = n(797614),
  Z = n(703656),
  g = n(454902),
  m = n(254761),
  _ = n(547881),
  I = n(70956),
  S = n(960048),
  v = n(792125),
  C = n(145597),
  x = n(692546),
  N = n(987650),
  T = n(981631),
  O = n(689938),
  A = n(833947);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = 10 * I.Z.Millis.SECOND;

function M() {
  let e = (0, C.QF)(),
    t = (0, C.Ht)();
  (0, f.lW)({
    type: T.BmY.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class L extends s.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, R), p.Z.track(T.rMx.NOTIFICATION_VIEWED, {
      notif_type: N.n0.OverlayCrashed
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
      notificationTimer: s
    } = this;
    return null == s ? null : (0, i.jsx)(x.Z, {
      observe: !1,
      children: (0, i.jsxs)(h.Clickable, {
        className: a()((0, v.Q)(T.BRd.DARK), A.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(g.ZP, {
          expand: !0,
          colorScheme: g.IC.DANGER,
          icon: (0, i.jsx)(m.Z, {
            width: 40,
            height: 40,
            className: A.notificationIcon
          }),
          title: O.Z.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: O.Z.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(_.ZP, {
          className: A.stackTrace,
          children: [(0, i.jsx)(_.ZP.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(_.ZP.Content, {
            className: A.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: A.code,
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
    super(...e), y(this, "state", {
      showTrace: !1,
      busy: !1
    }), y(this, "notificationTimer", void 0), y(this, "hideNotification", () => {
      M();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }), y(this, "handleReload", e => {
      this.setState({
        busy: !0
      }), M(), p.Z.track(T.rMx.NOTIFICATION_CLICKED, {
        notif_type: N.n0.OverlayCrashed,
        action_type: "reload"
      }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
    }), y(this, "handleNotificationClick", e => {
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
let D = r().throttle(() => {
  E.Z.increment({
    name: u.V.APP_CRASHED,
    tags: ["reason:".concat(d.v.UNHANDLED_JS_ERROR), "level:".concat(c.c.FATAL)]
  }, !0)
}, 100, {
  trailing: !1
});
class P extends s.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, Z.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, C.QF)(),
      s = (0, C.Ht)();
    (0, f.lW)({
      type: T.BmY.DISPATCH,
      pid: (0, C.QF)(),
      token: s,
      payloads: [{
        type: "OVERLAY_CRASHED",
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: !0,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", M));
    let l = S.Z.captureCrash(e, {
      extra: t
    });
    p.Z.track(T.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: l
    }), D()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: s
    } = this.state;
    return null != n ? (0, i.jsx)(L, {
      error: n,
      info: s
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      error: null,
      info: null
    })
  }
}
t.Z = P