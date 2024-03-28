"use strict";
t.r(s), t.d(s, {
  CopyInputModes: function() {
    return N
  }
}), t("47120");
var a, l = t("735250"),
  n = t("470079"),
  _ = t("803997"),
  u = t.n(_),
  i = t("481060"),
  I = t("153066"),
  r = t("285952"),
  d = t("689938"),
  o = t("490748");

function E(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let N = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class T extends(a = n.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var s;
    let {
      value: t,
      mode: a
    } = this.props, n = null === (s = this.context) || void 0 === s ? void 0 : s.titleId;
    return (0, l.jsx)("input", {
      className: u()((0, I.getClass)(o, "input", a), {
        [o.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: t,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": n
    })
  }
  render() {
    let e;
    let {
      text: s = d.default.Messages.COPY,
      mode: t,
      hideMessage: a,
      className: n,
      buttonLook: _
    } = this.props, E = null != a;
    switch (t) {
      case N.SUCCESS:
        e = i.ButtonColors.GREEN;
        break;
      case N.ERROR:
        e = i.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, l.jsx)(i.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, l.jsx)("div", {
        className: u()((0, I.getClass)(o, "copyInput", t), n),
        ref: this.containerRef,
        children: (0, l.jsxs)(r.default, {
          className: o.layout,
          children: [(0, l.jsxs)(r.default, {
            className: o.inputWrapper,
            children: [this.renderInput(E), E ? (0, l.jsx)("div", {
              className: o.hiddenMessage,
              children: a
            }) : null]
          }), (0, l.jsx)(r.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, l.jsx)(i.Button, {
              className: o.button,
              onClick: this.handleButtonClick,
              size: i.ButtonSizes.MIN,
              color: e,
              look: _,
              children: s
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "inputRef", n.createRef()), E(this, "containerRef", n.createRef()), E(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: s
      } = this.props;
      e(s)
    }), E(this, "handleInputClick", () => {
      this.select()
    })
  }
}
E(T, "contextType", i.FormContext), E(T, "defaultProps", {
  supportsCopy: !0,
  buttonColor: i.ButtonColors.PRIMARY,
  buttonLook: i.ButtonLooks.FILLED,
  mode: N.DEFAULT
}), E(T, "Modes", N), E(T, "ButtonColors", i.ButtonColors), E(T, "ButtonLooks", i.ButtonLooks), s.default = T