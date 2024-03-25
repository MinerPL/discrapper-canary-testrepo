"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var a = n("37983"),
  i = n("884691"),
  s = n("146606"),
  o = n("230606");
let r = () => {
  let e = i.useRef(null),
    [t, n] = i.useState(0),
    a = i.useMemo(() => new o.default(e => {
      let [t] = e;
      return n(t.contentRect.height)
    }), []);
  return i.useLayoutEffect(() => (null != e.current && a.observe(e.current), () => a.disconnect()), [a]), {
    ref: e,
    height: t
  }
};

function l(e) {
  let {
    show: t,
    children: n,
    top: i = 0,
    bottom: o = 0
  } = e, {
    ref: l,
    height: u
  } = r(), d = (0, s.useSpring)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? u : 0,
      paddingBottom: t ? "".concat(o, "px") : "0px",
      marginTop: t ? "".concat(i, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), c = (0, s.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: t ? 1 : 0
    },
    config: {
      duration: 200,
      easing: t ? e => e ** 4 : e => e * (2 - e)
    }
  });
  return (0, a.jsx)(s.animated.div, {
    style: {
      overflow: "hidden",
      height: d.height,
      paddingBottom: d.paddingBottom,
      marginTop: d.marginTop
    },
    children: (0, a.jsx)(s.animated.div, {
      style: {
        opacity: c.opacity
      },
      ref: l,
      children: n
    })
  })
}