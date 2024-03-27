"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("146606"),
  o = s("467159");
class d extends l.Component {
  render() {
    let {
      icon: e,
      ...t
    } = this.props;
    return (0, a.jsx)(e, {
      ...t
    })
  }
}
let u = (0, r.animated)(d);
var c = function(e) {
  let {
    className: t,
    name: s,
    icon: l,
    iconClassName: n
  } = e, d = (0, r.useTransition)({
    name: s,
    icon: l,
    iconClassName: n
  }, {
    key: e => e.name,
    initial: null,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  return (0, a.jsx)("div", {
    className: i(o.crossfade, t),
    children: d((e, t) => {
      let {
        icon: s,
        iconClassName: l
      } = t;
      return (0, a.jsx)(u, {
        icon: s,
        className: i(o.icon, l),
        style: e
      })
    })
  })
}