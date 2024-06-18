"use strict";
n.d(t, {
  k: function() {
    return T
  },
  u: function() {
    return I
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(285952),
  _ = n(153066),
  d = n(689938),
  c = n(245578);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class T extends(i = s.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: n,
      mode: i
    } = this.props, s = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, r.jsx)("input", {
      className: a()((0, _.l)(c, "input", i), {
        [c.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: n,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": s
    })
  }
  render() {
    let e;
    let {
      text: t = d.Z.Messages.COPY,
      mode: n,
      hideMessage: i,
      className: s,
      buttonLook: o
    } = this.props, E = null != i;
    switch (n) {
      case I.SUCCESS:
        e = l.ButtonColors.GREEN;
        break;
      case I.ERROR:
        e = l.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, r.jsx)(l.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        className: a()((0, _.l)(c, "copyInput", n), s),
        ref: this.containerRef,
        children: (0, r.jsxs)(u.Z, {
          className: c.layout,
          children: [(0, r.jsxs)(u.Z, {
            className: c.inputWrapper,
            children: [this.renderInput(E), E ? (0, r.jsx)("div", {
              className: c.hiddenMessage,
              children: i
            }) : null]
          }), (0, r.jsx)(u.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsx)(l.Button, {
              className: c.button,
              onClick: this.handleButtonClick,
              size: l.ButtonSizes.MIN,
              color: e,
              look: o,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "inputRef", s.createRef()), E(this, "containerRef", s.createRef()), E(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), E(this, "handleInputClick", () => {
      this.select()
    })
  }
}
E(T, "contextType", l.FormContext), E(T, "defaultProps", {
  supportsCopy: !0,
  buttonColor: l.ButtonColors.PRIMARY,
  buttonLook: l.ButtonLooks.FILLED,
  mode: I.DEFAULT
}), E(T, "Modes", I), E(T, "ButtonColors", l.ButtonColors), E(T, "ButtonLooks", l.ButtonLooks)