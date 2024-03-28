"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("718017"),
  o = s("253347");
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
t.default = function(e) {
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
    className: i()(o.crossfade, t),
    children: d((e, t) => {
      let {
        icon: s,
        iconClassName: l
      } = t;
      return (0, a.jsx)(u, {
        icon: s,
        className: i()(o.icon, l),
        style: e
      })
    })
  })
}