"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("480583"),
  u = r("427257"),
  l = function(e) {
    var t = e.onClick,
      r = e.onSwatchHover,
      n = e.group,
      l = e.active,
      s = (0, o.default)({
        default: {
          group: {
            paddingBottom: "10px",
            width: "40px",
            float: "left",
            marginRight: "10px"
          }
        }
      });
    return a.createElement("div", {
      style: s.group
    }, (0, i.default)(n, function(e, o) {
      return a.createElement(u.default, {
        key: e,
        color: e,
        active: e.toLowerCase() === l,
        first: 0 === o,
        last: o === n.length - 1,
        onClick: t,
        onSwatchHover: r
      })
    }))
  }