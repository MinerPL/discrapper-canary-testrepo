"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("146606"),
  i = s("882039"),
  r = s("862337"),
  o = s("77078"),
  d = s("599110"),
  u = s("4452"),
  c = s("49111"),
  S = s("782340"),
  E = s("114602");
let T = l.config.stiff;

function f(e) {
  let {
    image: t,
    name: s,
    sound: f,
    openedCount: _,
    index: m
  } = e, g = _ > 0, h = n.useRef(null), N = n.useRef(null), [I, p] = n.useState(!1), [C, A] = n.useState({
    x: 0,
    y: 0
  }), [O] = n.useState(new r.Interval), [x, R] = (0, l.useSpring)(() => ({
    x: 0,
    y: 0,
    config: T
  })), [M, D] = (0, l.useSpring)(() => ({
    value: 1,
    config: T
  }));
  n.useEffect(() => {
    if (g && I && null != h.current) {
      let e = h.current.getBoundingClientRect(),
        t = C.x - e.x,
        s = C.y - e.y,
        a = e.width / 2,
        n = e.height / 2;
      R({
        x: (t - a) / a * 25,
        y: -((s - n) / n * 25)
      })
    }
  }, [I, g, C.x, C.y, R]), n.useEffect(() => {
    D({
      value: g && I ? 1.2 : 1
    })
  }, [I, g, D]);
  let v = n.useCallback(e => {
      A({
        x: e.clientX,
        y: e.clientY
      })
    }, []),
    L = n.useCallback(e => {
      p(!0), v(e)
    }, [v]),
    P = n.useCallback(() => {
      p(!1), A({
        x: 0,
        y: 0
      }), R({
        x: 0,
        y: 0
      })
    }, [R]),
    j = n.useCallback(() => {
      if (null != N.current) {
        let e = N.current.currentTime / N.current.duration,
          t = (0, u.default)(1, 1.2, e);
        D({
          value: t
        }), e >= 1 && (!I && D({
          value: 1
        }), O.stop())
      }
    }, [O, I, D]);
  n.useEffect(() => {
    null != O._ref && O.start(30, j)
  }, [O, j]);
  let b = n.useCallback(() => {
    d.default.track(c.AnalyticEvents.EASTER_EGG_INTERACTED, {
      type: "packages_item_click",
      position: m
    }), null != N.current && (N.current.currentTime = 0, N.current.play(), O.start(30, j))
  }, [O, j, m]);
  return (0, a.jsxs)(o.Clickable, {
    onClick: g ? b : void 0,
    children: [(0, a.jsx)("audio", {
      src: f,
      ref: N
    }), (0, a.jsx)(l.animated.div, {
      ref: h,
      className: g ? E.containerOwned : void 0,
      style: {
        transform: (0, l.to)([M.value], e => "scale(".concat(e, ")"))
      },
      onMouseEnter: L,
      onMouseLeave: P,
      onMouseMove: v,
      children: (0, a.jsxs)(l.animated.div, {
        className: E.item,
        style: {
          transform: (0, l.to)([x.x, x.y], (e, t) => "rotateY(".concat(e, "deg) rotateX(").concat(t, "deg)"))
        },
        children: [g && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xxs/bold",
            className: E.count,
            children: S.default.Messages.USER_SETTINGS_PACKAGE_COUNT.format({
              count: _
            })
          }), (0, a.jsx)(i.VoiceNormalIcon, {
            className: E.audioIndicator,
            color: o.tokens.colors.INTERACTIVE_ACTIVE
          })]
        }), (0, a.jsx)(o.Heading, {
          variant: "display-md",
          className: E.imageContainer,
          color: "text-muted",
          children: g ? (0, a.jsx)("img", {
            src: t,
            alt: "",
            className: E.image
          }) : "?"
        }), g && (0, a.jsx)(o.Text, {
          variant: "text-xxs/bold",
          className: E.name,
          children: s
        })]
      })
    })]
  })
}