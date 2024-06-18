"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(866442),
  _ = n(692547),
  d = n(84735),
  c = n(285952),
  E = n(263704),
  I = n(981631),
  T = n(235098),
  h = n(611273);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = l().memoize(e => {
  let t = !1;
  if (null != e && (0, u.FX)(e)) {
    let n = (0, u._i)(e);
    null != n && (t = .2 > (0, u.Bd)(n))
  }
  return t ? _.Z.unsafe_rawColors.BLACK_500.css : _.Z.unsafe_rawColors.WHITE_500.css
});
class N extends r.PureComponent {
  render() {
    let e;
    let {
      selected: t,
      color: n,
      className: r,
      children: s
    } = this.props, a = f(n);
    return t ? e = {
      color: a,
      background: null != n ? n : _.Z.unsafe_rawColors.BRAND_500.css
    } : null != n && (e = {
      color: n
    }), (0, i.jsx)(d.t, {
      offset: {
        left: 4
      },
      children: (0, i.jsxs)(c.Z, {
        className: o()(T.selectableItem, r, {
          [T.selected]: t
        }),
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        align: c.Z.Align.CENTER,
        style: {
          ...e,
          ...this.props.style
        },
        role: "button",
        tabIndex: 0,
        children: [(0, i.jsx)(c.Z, {
          align: c.Z.Align.CENTER,
          className: T.selectableItemLabel,
          shrink: 1,
          children: s
        }), t && (0, i.jsx)(c.Z, {
          wrap: c.Z.Wrap.WRAP,
          className: h.marginReset,
          grow: 0,
          shrink: 0,
          children: (0, i.jsx)(E.Z, {
            color: a
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      color: f(this.props.color)
    }), S(this, "handleKeyUp", e => {
      if (e.which === I.yXg.ENTER || e.which === I.yXg.SPACE) {
        let {
          onClick: e,
          ...t
        } = this.props;
        e(t)
      }
    }), S(this, "handleClick", () => {
      let {
        onClick: e,
        ...t
      } = this.props;
      e(t)
    })
  }
}
t.Z = N