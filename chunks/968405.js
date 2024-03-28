"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("803997"),
  i = s.n(l),
  o = s("217986"),
  r = s("481060"),
  u = s("317175"),
  d = s("285952"),
  h = s("259580"),
  c = s("689938"),
  p = s("213914"),
  f = s("344534"),
  m = s("794711");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class g extends a.PureComponent {
  render() {
    let {
      countryCode: e,
      phone: t,
      open: s
    } = this.state, {
      className: a,
      submitting: l
    } = this.props, [, o] = e.split("+");
    return (0, n.jsxs)(d.default, {
      className: i()(p.phoneField, f.elevationLow, a),
      align: d.default.Align.CENTER,
      grow: 0,
      children: [(0, n.jsxs)(r.Button, {
        size: r.ButtonSizes.SMALL,
        className: p.countryButton,
        color: r.ButtonColors.PRIMARY,
        innerClassName: p.countryButtonInner,
        onClick: this.handleTogglePopout,
        children: [(0, n.jsxs)(d.default, {
          className: i()(p.countryCodeContainer, m.marginReset),
          justify: d.default.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: p.plusSign,
            children: "+"
          }), (0, n.jsx)("div", {
            className: p.countryCode,
            children: o
          })]
        }), (0, n.jsx)(h.default, {
          foreground: p.phoneFieldExpand,
          expanded: s,
          width: 16,
          height: 16
        })]
      }), (0, n.jsx)("input", {
        "aria-label": c.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
        className: p.inputField,
        value: t,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        autoFocus: !0
      }), (0, n.jsx)(r.Button, {
        className: p.sendButton,
        size: r.ButtonSizes.SMALL,
        submitting: l,
        onClick: this.handleSubmit,
        children: c.default.Messages.SEND
      }), s ? (0, n.jsx)(u.default, {
        onClick: this.handleClick
      }) : null]
    })
  }
  closePopout() {
    this.state.open && this.setState({
      open: !1
    })
  }
  constructor(e) {
    super(e), C(this, "handleChange", e => {
      this.closePopout(), this.setState({
        phone: e.currentTarget.value
      })
    }), C(this, "handleKeyPress", e => {
      this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
    }), C(this, "handleSubmit", () => {
      let {
        onSubmit: e,
        submitting: t
      } = this.props, {
        countryCode: s,
        phone: n
      } = this.state;
      !t && (null == e || e("".concat(s).concat(n)))
    }), C(this, "handleTogglePopout", () => {
      this.setState({
        open: !this.state.open
      })
    }), C(this, "handleClick", e => {
      let [t, s] = e.code.split(" ");
      this.setState({
        open: !1,
        countryCode: t,
        phone: null != s ? s : ""
      })
    });
    let [t, s] = o.default.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    this.state = {
      countryCode: t,
      phone: null != s ? s : "",
      open: !1
    }
  }
}
t.default = g