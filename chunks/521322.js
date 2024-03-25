"use strict";
s.r(t), s.d(t, {
  AnimatedWrapper: function() {
    return l
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("458960"),
  n = s("458177");
let l = e => {
  let {
    isVisible: t,
    children: s
  } = e, [l] = (0, r.useState)(new i.default.Value(t ? 1 : 0)), [o] = (0, r.useState)(new i.default.Value(t ? 1 : .99));
  (0, r.useEffect)(() => {
    t ? u() : d()
  }, [t]);
  let u = () => {
      i.default.parallel([i.default.timing(l, {
        toValue: 1,
        duration: 700
      }), i.default.timing(o, {
        toValue: 1,
        duration: 700
      })]).start()
    },
    d = () => {
      i.default.parallel([i.default.timing(l, {
        toValue: 0,
        duration: 700
      }), i.default.timing(o, {
        toValue: .99,
        duration: 700
      })]).start()
    };
  return (0, a.jsx)(i.default.div, {
    className: n.fullScreen,
    style: {
      opacity: l,
      transform: [{
        scale: o
      }]
    },
    children: s
  })
}