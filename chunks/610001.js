n(47120);
var i, a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(873546),
  c = n(481060),
  d = n(1964),
  u = n(63063),
  _ = n(285952),
  h = n(672705),
  E = n(981631),
  I = n(689938),
  m = n(777458),
  g = n(549856);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = u.Z.getArticleURL(E.BhN.VERIFICATION_FAQ);
class S extends(i = s.PureComponent) {
  renderFields() {
let {
  types: e,
  captchaKey: t,
  theme: n,
  onCaptchaVerify: i
} = this.props;
return (0, a.jsx)(a.Fragment, {
  children: e.map(e => e === E.PUi.CAPTCHA ? (0, a.jsx)(h.Z, {
    onVerify: i,
    theme: n
  }, t) : (0, a.jsx)(c.Button, {
    className: l()(g.marginBottom20),
    onClick: () => this.handleClick(e),
    children: d.Z.getButtonTitle(e)
  }, e))
});
  }
  render() {
return (0, a.jsxs)(_.Z, {
  className: m.verification,
  align: _.Z.Align.CENTER,
  direction: _.Z.Direction.VERTICAL,
  children: [
    (0, a.jsxs)(_.Z, {
      className: l()(m.container, {
        [m.isMobile]: o.tq
      }),
      direction: _.Z.Direction.VERTICAL,
      align: _.Z.Align.CENTER,
      justify: _.Z.Justify.CENTER,
      children: [
        (0, a.jsx)('div', {
          className: m.image
        }),
        (0, a.jsx)('div', {
          className: l()(m.title, g.marginTop20),
          children: I.Z.Messages.VERIFICATION_TITLE
        }),
        (0, a.jsx)('div', {
          className: l()(m.body, g.marginTop4, g.marginBottom20),
          children: I.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: T
          })
        }),
        (0, a.jsx)(_.Z, {
          grow: 0,
          direction: _.Z.Direction.VERTICAL,
          justify: _.Z.Justify.CENTER,
          children: this.renderFields()
        })
      ]
    }),
    (0, a.jsx)('div', {
      className: l()(m.footer, g.marginTop20),
      children: I.Z.Messages.VERIFICATION_FOOTER
    }),
    (0, a.jsxs)(_.Z, {
      className: l()(g.marginTop4, g.marginBottom20),
      grow: 0,
      children: [
        (0, a.jsx)('div', {
          className: l()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: u.Z.getSubmitRequestURL()
          })
        }),
        (0, a.jsx)('div', {
          className: l()(m.footer, m.footerBullet),
          children: '\u2022'
        }),
        (0, a.jsx)('div', {
          className: l()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), p(this, 'handleClick', e => {
  let {
    onClick: t
  } = this.props;
  null == t || t(e);
});
  }
}
p(S, 'defaultProps', {
  types: [E.PUi.CAPTCHA],
  onCaptchaVerify: E.dG4,
  onLogout: E.dG4
}), t.Z = S;