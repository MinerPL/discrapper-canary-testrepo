"use strict";
n.d(t, {
  x: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(696689),
  l = n.n(a),
  u = n(692547),
  _ = n(701717),
  d = n(24073);
let c = Object.fromEntries(Object.keys(u.Z.colors).map(e => [l()(e), e])),
  E = r.forwardRef(function(e, t) {
    let n, {
        variant: r,
        tag: s = "div",
        selectable: a = !1,
        className: l,
        lineClamp: E,
        color: I,
        tabularNumbers: T = !1,
        scaleFontToUserSetting: h = !1,
        ...S
      } = e,
      f = "",
      N = {};
    if (null != E && (1 === E ? f = _.lineClamp1 : (f = _.lineClamp2Plus, N = {
        lineClamp: E,
        WebkitLineClamp: E
      })), void 0 !== I) switch (I) {
      case "currentColor":
        n = "currentColor";
        break;
      case "none":
        n = void 0;
        break;
      case "always-white":
        n = "white";
        break;
      default:
        var A;
        n = null === (A = u.Z.colors[c[I]]) || void 0 === A ? void 0 : A.css
    }
    let m = {
      color: n,
      ...N,
      ...S.style
    };
    return (0, i.jsx)(s, {
      ref: t,
      className: o()({
        [_.defaultColor]: void 0 === I,
        [_.selectable]: a,
        [_.tabularNumbers]: T,
        [d.fontScaling]: h
      }, f, d[r], l),
      ...S,
      style: Object.values(m).filter(Boolean).length > 0 ? m : void 0,
      "data-text-variant": r
    })
  })