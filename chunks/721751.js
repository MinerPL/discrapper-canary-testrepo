"use strict";
let s;
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  l = n.n(r),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("980591"),
  f = n("605782"),
  h = n("566010"),
  E = n("353926"),
  g = n("703656"),
  _ = n("980483"),
  m = n("612744"),
  p = n("624138"),
  T = n("830064"),
  A = n("981631"),
  I = n("734541");
let S = n("407025"),
  N = n("2984"),
  R = (0, p.cssValueToNumber)(I.responsiveWidthMobile),
  C = [A.Routes.LOGIN, A.Routes.LOGIN_HANDOFF, A.Routes.REGISTER, A.Routes.INVITE(""), A.Routes.GIFT_CODE(""), A.Routes.GUILD_TEMPLATE_LOGIN(""), A.Routes.GUILD_TEMPLATE(""), A.Routes.DISABLE_EMAIL_NOTIFICATIONS, A.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, A.Routes.BILLING_PREMIUM_SUBSCRIBE, A.Routes.BILLING_PAYMENT_SOURCES_CREATE, A.Routes.BILLING_PAYMENTS, A.Routes.BILLING_PREMIUM_SWITCH_PLAN, A.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, A.Routes.VERIFY, A.Routes.VERIFY_HUB_EMAIL, A.Routes.REJECT_IP, A.Routes.REJECT_MFA, A.Routes.AUTHORIZE_IP, A.Routes.AUTHORIZE_PAYMENT, A.Routes.RESET, A.Routes.HANDOFF, A.Routes.REPORT, A.Routes.REPORT_SECOND_LOOK];

function O(e) {
  return C.some(t => e.startsWith(t))
}
let v = e => (s = e, e);

function L(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, a] = i.useState(!1), r = h.default.useExperiment({
        location: "authWrapper"
      }, {
        autoTrackExposure: !1
      }), l = (0, u.useStateFromStores)([E.default], () => E.default.hasLoadedExperiments);
      return ((0, c.default)(() => {
        !l && a(!0)
      }, 300), void 0 !== s) ? s : !n && l ? (!e && (h.default.trackExposure({
        location: "authWrapper"
      }), t(!0)), v(r.isWelcomeRefreshEnabled ? "refresh" : "legacy")) : n ? v("legacy") : "loading"
    }()) {
    case "refresh":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          className: I.artwork,
          src: S,
          alt: ""
        }), (0, a.jsx)("img", {
          className: I.logoWithText,
          src: N,
          alt: ""
        }), t]
      });
    case "legacy":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(T.default, {
          className: I.artwork,
          preserveAspectRatio: "xMinYMin slice"
        }), t]
      });
    case "loading":
      return null
  }
}
class x extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (O(e))(0, g.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    O(e) ? (0, g.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, a.jsx)(f.default, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: g.transitionTo,
        replaceWith: g.replaceWith
      }))
    });
    return (0, a.jsx)("div", {
      className: I.characterBackground,
      children: (0, a.jsx)(d.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(_.default, {
            show: !0,
            className: l()(I.logo)
          }), (0, a.jsx)(m.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, a.jsx)(L, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, a.jsx)(f.default, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return e || o.isMobile || o.isTablet || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handleResize", s = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= R
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= R
    }
  }
}
t.default = x