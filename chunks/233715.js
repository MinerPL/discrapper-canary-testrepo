"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("718017"),
  i = n("481060");

function r(e) {
  let {
    children: t,
    className: n,
    flashKey: r
  } = e, o = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
    opacity: 1
  }), u = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
    opacity: 0
  }), [d, c] = (0, s.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: o
    }
  }));
  return l.useEffect(() => {
    c({
      reset: !0,
      immediate: !0,
      to: {
        backgroundColor: o
      }
    }), c({
      delay: 1e3,
      immediate: !1,
      to: {
        backgroundColor: u
      }
    })
  }, [r, c]), (0, a.jsx)(s.animated.div, {
    style: d,
    className: n,
    children: t
  })
}