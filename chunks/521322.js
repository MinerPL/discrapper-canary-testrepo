"use strict";
s.r(t), s.d(t, {
  AnimatedWrapper: function() {
    return l
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("458960"),
  i = s("458177");
let l = e => {
  let {
    isVisible: t,
    children: s
  } = e, [l] = (0, r.useState)(new n.default.Value(t ? 1 : 0)), [o] = (0, r.useState)(new n.default.Value(t ? 1 : .99));
  (0, r.useEffect)(() => {
    t ? u() : d()
  }, [t]);
  let u = () => {
      n.default.parallel([n.default.timing(l, {
        toValue: 1,
        duration: 700
      }), n.default.timing(o, {
        toValue: 1,
        duration: 700
      })]).start()
    },
    d = () => {
      n.default.parallel([n.default.timing(l, {
        toValue: 0,
        duration: 700
      }), n.default.timing(o, {
        toValue: .99,
        duration: 700
      })]).start()
    };
  return (0, a.jsx)(n.default.div, {
    className: i.fullScreen,
    style: {
      opacity: l,
      transform: [{
        scale: o
      }]
    },
    children: s
  })
}