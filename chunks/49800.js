"use strict";
n.d(t, {
  Z: function() {
    return d
  },
  s: function() {
    return _
  }
});
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(922423);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  PRIMARY: l.cardPrimary,
  DANGER: l.cardDanger,
  WARNING: l.cardWarning,
  SUCCESS: l.cardSuccess,
  BRAND: l.cardBrand,
  CUSTOM: l.card
};
class d extends(i = s.PureComponent) {
  render() {
    let e;
    let {
      children: t,
      editable: n,
      type: i,
      className: s,
      outline: o,
      ...u
    } = this.props;
    return o ? e = l.outline : i === _.PRIMARY && n && (e = l.editable), (0, r.jsx)("div", {
      className: a()(s, i, e),
      ...u,
      children: t
    })
  }
}
u(d, "Types", _), u(d, "defaultProps", {
  type: _.PRIMARY,
  outline: !1,
  editable: !1
})