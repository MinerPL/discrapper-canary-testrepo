"use strict";
n.r(e);
var o, s, i, r, a = n("735250"),
  l = n("470079"),
  c = n("803997"),
  u = n.n(c),
  d = n("774832"),
  p = n("422346");
let h = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [h.UP]: p.up,
    [h.RIGHT]: p.right,
    [h.DOWN]: p.down,
    [h.LEFT]: p.left
  };
class m extends(r = l.PureComponent) {
  render() {
    let {
      direction: t,
      className: e
    } = this.props;
    return (0, a.jsx)(d.default, {
      className: u()(p.__invalid_arrow, e, {
        [f[t]]: !0
      })
    })
  }
}
o = m, s = "Directions", i = h, s in o ? Object.defineProperty(o, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = i, e.default = m