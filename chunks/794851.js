"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  o = s.n(l),
  i = s("592861"),
  r = s("77078"),
  d = s("189613"),
  u = s("145131"),
  h = s("461380"),
  c = s("782340"),
  p = s("91581"),
  f = s("678016"),
  m = s("890957");
class C extends a.PureComponent {
  render() {
    let {
      countryCode: e,
      phone: t,
      open: s
    } = this.state, {
      className: a,
      submitting: l
    } = this.props, [, i] = e.split("+");
    return (0, n.jsxs)(u.default, {
      className: o(p.phoneField, f.elevationLow, a),
      align: u.default.Align.CENTER,
      grow: 0,
      children: [(0, n.jsxs)(r.Button, {
        size: r.ButtonSizes.SMALL,
        className: p.countryButton,
        color: r.ButtonColors.PRIMARY,
        innerClassName: p.countryButtonInner,
        onClick: this.handleTogglePopout,
        children: [(0, n.jsxs)(u.default, {
          className: o(p.countryCodeContainer, m.marginReset),
          justify: u.default.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: p.plusSign,
            children: "+"
          }), (0, n.jsx)("div", {
            className: p.countryCode,
            children: i
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
      }), s ? (0, n.jsx)(d.default, {
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
    super(e), this.handleChange = e => {
      this.closePopout(), this.setState({
        phone: e.currentTarget.value
      })
    }, this.handleKeyPress = e => {
      this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
    }, this.handleSubmit = () => {
      let {
        onSubmit: e,
        submitting: t
      } = this.props, {
        countryCode: s,
        phone: n
      } = this.state;
      !t && (null == e || e("".concat(s).concat(n)))
    }, this.handleTogglePopout = () => {
      this.setState({
        open: !this.state.open
      })
    }, this.handleClick = e => {
      let [t, s] = e.code.split(" ");
      this.setState({
        open: !1,
        countryCode: t,
        phone: null != s ? s : ""
      })
    };
    let t = i.default.find(e => "United States" === e.name),
      [s, n] = t.phoneCountryCode.split(" ");
    this.state = {
      countryCode: s,
      phone: null != n ? n : "",
      open: !1
    }
  }
}
var g = C