"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("329022"),
  l = r("336146");
t.default = function(e) {
  var t = e.onClick,
    r = e.onSwatchHover,
    n = e.group,
    u = e.active,
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
  return a().createElement("div", {
    style: s.group
  }, (0, i.default)(n, function(e, o) {
    return a().createElement(l.default, {
      key: e,
      color: e,
      active: e.toLowerCase() === u,
      first: 0 === o,
      last: o === n.length - 1,
      onClick: t,
      onSwatchHover: r
    })
  }))
}