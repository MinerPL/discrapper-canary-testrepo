"use strict";
let s;
n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(873546),
  u = n(442837),
  c = n(481060),
  d = n(980591),
  h = n(605782),
  E = n(353926),
  _ = n(703656),
  m = n(980483),
  g = n(612744),
  f = n(981631),
  p = n(734541);
let I = n(575703),
  N = n(2984),
  A = [f.Z5c.LOGIN, f.Z5c.LOGIN_HANDOFF, f.Z5c.REGISTER, f.Z5c.INVITE(""), f.Z5c.GIFT_CODE(""), f.Z5c.GUILD_TEMPLATE_LOGIN(""), f.Z5c.GUILD_TEMPLATE(""), f.Z5c.DISABLE_EMAIL_NOTIFICATIONS, f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, f.Z5c.BILLING_PREMIUM_SUBSCRIBE, f.Z5c.BILLING_PAYMENT_SOURCES_CREATE, f.Z5c.BILLING_PAYMENTS, f.Z5c.BILLING_PREMIUM_SWITCH_PLAN, f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, f.Z5c.VERIFY, f.Z5c.VERIFY_HUB_EMAIL, f.Z5c.REJECT_IP, f.Z5c.REJECT_MFA, f.Z5c.AUTHORIZE_IP, f.Z5c.AUTHORIZE_PAYMENT, f.Z5c.RESET, f.Z5c.HANDOFF, f.Z5c.REPORT, f.Z5c.REPORT_SECOND_LOOK];

function T(e) {
  return A.some(t => e.startsWith(t))
}
let R = e => (s = e, e);

function S(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, r] = i.useState(true), a = function() {
        return null
      }(), l = (0, u.e7)([E.Z], () => E.Z.hasLoadedExperiments);
      return ((0, d.Z)(() => {}, 300), void 0 !== s) ? s : !n && l ? (!e && t(!0), R(function(e) {
        return "default"
      }(a))) : n ? R("default") : "loading"
    }()) {
    case "default":
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          className: p.artwork,
          src: I,
          alt: ""
        }), (0, r.jsx)("img", {
          className: p.logoWithText,
          src: N,
          alt: ""
        }), t]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class C extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (T(e))(0, _.uL)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    T(e) ? (0, _.dL)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, r.jsx)(h.Z, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: _.uL,
        replaceWith: _.dL
      }))
    });
    return (0, r.jsx)("div", {
      className: p.characterBackground,
      children: (0, r.jsx)(c.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            show: !0,
            className: l()(p.logo)
          }), (0, r.jsx)(g.h, {
            splash: e,
            children: t
          })]
        }) : (0, r.jsx)(S, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, r.jsx)(h.Z, {
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
    return e || o.tq || o.Em || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handleResize", s = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= 485
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= 485
    }
  }
}
t.Z = C