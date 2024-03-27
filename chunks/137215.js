"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("37983"),
  i = r("884691"),
  s = r("414456"),
  l = r.n(s),
  a = r("546671"),
  u = r("711603");
let o = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  d = {
    [o.UP]: u.up,
    [o.RIGHT]: u.right,
    [o.DOWN]: u.down,
    [o.LEFT]: u.left
  };
class c extends i.PureComponent {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, n.jsx)(a.default, {
      className: l(u.arrow, t, {
        [d[e]]: !0
      })
    })
  }
}
c.Directions = o;
var f = c