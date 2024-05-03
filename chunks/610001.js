"use strict";
n.r(t), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("873546"),
  u = n("481060"),
  d = n("1964"),
  c = n("63063"),
  f = n("285952"),
  E = n("672705"),
  h = n("981631"),
  _ = n("689938"),
  C = n("56651"),
  S = n("949086");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = c.default.getArticleURL(h.HelpdeskArticles.VERIFICATION_FAQ);
class I extends(a = l.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: a
    } = this.props;
    return (0, s.jsx)(s.Fragment, {
      children: e.map(e => e === h.VerificationTypes.CAPTCHA ? (0, s.jsx)(E.default, {
        onVerify: a,
        theme: n
      }, t) : (0, s.jsx)(u.Button, {
        className: r()(S.marginBottom20),
        onClick: () => this.handleClick(e),
        children: d.default.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, s.jsxs)(f.default, {
      className: C.verification,
      align: f.default.Align.CENTER,
      direction: f.default.Direction.VERTICAL,
      children: [(0, s.jsxs)(f.default, {
        className: r()(C.container, {
          [C.isMobile]: o.isMobile
        }),
        direction: f.default.Direction.VERTICAL,
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        children: [(0, s.jsx)("div", {
          className: C.image
        }), (0, s.jsx)("div", {
          className: r()(C.title, S.marginTop20),
          children: _.default.Messages.VERIFICATION_TITLE
        }), (0, s.jsx)("div", {
          className: r()(C.body, S.marginTop4, S.marginBottom20),
          children: _.default.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: p
          })
        }), (0, s.jsx)(f.default, {
          grow: 0,
          direction: f.default.Direction.VERTICAL,
          justify: f.default.Justify.CENTER,
          children: this.renderFields()
        })]
      }), (0, s.jsx)("div", {
        className: r()(C.footer, S.marginTop20),
        children: _.default.Messages.VERIFICATION_FOOTER
      }), (0, s.jsxs)(f.default, {
        className: r()(S.marginTop4, S.marginBottom20),
        grow: 0,
        children: [(0, s.jsx)("div", {
          className: r()(C.footer, C.footerAction),
          children: _.default.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: c.default.getSubmitRequestURL()
          })
        }), (0, s.jsx)("div", {
          className: r()(C.footer, C.footerBullet),
          children: "•"
        }), (0, s.jsx)("div", {
          className: r()(C.footer, C.footerAction),
          children: _.default.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
m(I, "defaultProps", {
  types: [h.VerificationTypes.CAPTCHA],
  onCaptchaVerify: h.NOOP,
  onLogout: h.NOOP
}), t.default = I