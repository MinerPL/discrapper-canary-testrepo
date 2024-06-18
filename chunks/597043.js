"use strict";
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(920906),
  o = t(400752);
class c extends i.Component {
  render() {
    let {
      icon: e,
      ...s
    } = this.props;
    return (0, n.jsx)(e, {
      ...s
    })
  }
}
let d = (0, r.animated)(c);
s.Z = function(e) {
  let {
    className: s,
    name: t,
    icon: i,
    iconClassName: l
  } = e, c = (0, r.useTransition)({
    name: t,
    icon: i,
    iconClassName: l
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
  return (0, n.jsx)("div", {
    className: a()(o.crossfade, s),
    children: c((e, s) => {
      let {
        icon: t,
        iconClassName: i
      } = s;
      return (0, n.jsx)(d, {
        icon: t,
        className: a()(o.icon, i),
        style: e
      })
    })
  })
}