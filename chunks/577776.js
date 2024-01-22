"use strict";
n.r(t), n.d(t, {
  Text: function() {
    return Text
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  r = n.n(s),
  a = n("917351"),
  o = n.n(a),
  l = n("669491"),
  u = n("691785"),
  d = n("339010");
let c = Object.fromEntries(Object.keys(l.default.colors).map(e => [o.kebabCase(e), e])),
  Text = e => {
    let t, {
        variant: n,
        tag: s = "div",
        selectable: a = !1,
        className: o,
        lineClamp: f,
        color: _,
        tabularNumbers: h = !1,
        scaleFontToUserSetting: g = !1,
        ...m
      } = e,
      E = "",
      p = {};
    if (null != f && (1 === f ? E = u.lineClamp1 : (E = u.lineClamp2Plus, p = {
        lineClamp: f,
        WebkitLineClamp: f
      })), void 0 !== _) switch (_) {
      case "none":
        t = void 0;
        break;
      case "always-white":
        t = "white";
        break;
      default:
        var v;
        t = null === (v = l.default.colors[c[_]]) || void 0 === v ? void 0 : v.css
    }
    let S = {
      color: t,
      ...p,
      ...m.style
    };
    return (0, i.jsx)(s, {
      className: r({
        [u.defaultColor]: void 0 === _,
        [u.selectable]: a,
        [u.tabularNumbers]: h,
        [d.fontScaling]: g
      }, E, d[n], o),
      ...m,
      style: Object.values(S).filter(Boolean).length > 0 ? S : void 0,
      "data-text-variant": n
    })
  }