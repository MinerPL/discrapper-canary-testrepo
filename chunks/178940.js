"use strict";
n.d(t, {
  X: function() {
    return R
  }
}), n(47120);
var i, r, s, o, a, l = n(735250),
  u = n(470079),
  _ = n(120356),
  d = n.n(_),
  c = n(512722),
  E = n.n(c),
  I = n(866442),
  T = n(692547),
  h = n(84735),
  S = n(263704),
  f = n(981631),
  N = n(780150);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(o = i || (i = {})).DEFAULT = "default", o.INVERTED = "inverted", o.GHOST = "ghost", o.ROW = "row", (a = r || (r = {})).TOP = "top", a.CENTER = "center";
let m = {
    BOX: N.box,
    ROUND: N.round,
    SMALL_BOX: N.smallBox
  },
  O = {
    top: N.alignTop,
    center: N.alignCenter
  };
class R extends(s = u.PureComponent) {
  getInputMode() {
    return this.props.disabled ? "disabled" : this.props.readOnly ? "readonly" : "default"
  }
  getStyle() {
    var e;
    let {
      value: t,
      type: n,
      color: i
    } = this.props, r = null !== (e = this.props.style) && void 0 !== e ? e : {};
    if (!1 === t) return r;
    if (r = {
        ...r
      }, i === T.Z.unsafe_rawColors.BRAND_500.css) switch (n) {
      case "default":
        r.borderColor = "var(--control-brand-foreground)";
        break;
      case "ghost":
        r.borderColor = "var(--brand-experiment-15a)", r.backgroundColor = "var(--brand-experiment-15a)";
        break;
      case "row":
      case "inverted":
        r.borderColor = "var(--brand-400)", r.backgroundColor = "var(--brand-500)"
    } else switch (n) {
      case "default":
        r.borderColor = i;
        break;
      case "ghost":
        if (i.startsWith("var(--")) {
          let e = "".concat(i.slice(0, -1), "-hsl)");
          r.borderColor = "rgba(".concat(e, ", 0.15)"), r.backgroundColor = "rgba(".concat(e, ", 0.15)")
        } else E()((0, I.FX)(i), "Checkbox: ".concat(i, " is not a valid hex color")), r.borderColor = (0, I.wK)(i, .15), r.backgroundColor = (0, I.wK)(i, .15);
        break;
      case "row":
      case "inverted":
        r.backgroundColor = i, r.borderColor = i
    }
    return r
  }
  getColor() {
    let {
      value: e,
      type: t,
      color: n
    } = this.props;
    return e ? "inverted" === t || "row" === t ? T.Z.unsafe_rawColors.WHITE_500.css : n : T.Z.unsafe_rawColors.TRANSPARENT.css
  }
  render() {
    let {
      disabled: e,
      readOnly: t,
      value: n,
      shape: i,
      align: r = "center",
      className: s,
      innerClassName: o,
      children: a,
      size: u,
      reverse: _,
      checkboxColor: c,
      displayOnly: E,
      type: I,
      onClick: T
    } = this.props, A = null != a ? (0, l.jsx)("div", {
      className: d()(N.label, e ? N.labelDisabled : N.labelClickable, _ ? N.labelReversed : N.labelForward),
      style: {
        lineHeight: "".concat(u, "px")
      },
      children: a
    }) : null, m = this.props.disabled ? N.inputDisabled : this.props.readOnly ? N.inputReadonly : N.inputDefault;
    return (0, l.jsxs)(E ? "span" : "label", {
      className: d()(e ? N.checkboxWrapperDisabled : N.checkboxWrapper, O[r], s, {
        [N.row]: "row" === I,
        [N.checked]: n
      }),
      children: [_ ? A : null, !E && (0, l.jsx)(h.t, {
        children: (0, l.jsx)("input", {
          className: d()(o, m),
          type: "checkbox",
          onClick: T,
          onChange: e || t ? f.dG4 : this.handleChange,
          checked: n,
          style: {
            width: u,
            height: u
          }
        })
      }), (0, l.jsx)("div", {
        className: d()(N.checkbox, i, {
          [N.checked]: n
        }),
        style: {
          width: u,
          height: u,
          borderColor: c,
          ...this.getStyle()
        },
        children: (0, l.jsx)(S.Z, {
          width: 18,
          height: 18,
          color: this.getColor(),
          "aria-hidden": !0
        })
      }), _ ? null : A]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e, e.currentTarget.checked)
    })
  }
}
A(R, "Types", i), A(R, "Shapes", m), A(R, "Aligns", r), A(R, "defaultProps", {
  size: 24,
  disabled: !1,
  readOnly: !1,
  displayOnly: !1,
  value: !1,
  type: "default",
  color: T.Z.unsafe_rawColors.BRAND_500.css,
  shape: m.BOX,
  align: "center",
  onChange: f.dG4,
  reverse: !1
})