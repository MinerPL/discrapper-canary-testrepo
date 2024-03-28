"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("718017"),
  i = s("25307"),
  r = s("846519"),
  o = s("481060"),
  d = s("626135"),
  u = s("875667"),
  c = s("981631"),
  S = s("689938"),
  E = s("632222");
let T = l.config.stiff;

function _(e) {
  let {
    image: t,
    name: s,
    sound: _,
    openedCount: f,
    index: m
  } = e, g = f > 0, h = n.useRef(null), N = n.useRef(null), [I, p] = n.useState(!1), [C, A] = n.useState({
    x: 0,
    y: 0
  }), [O] = n.useState(new r.Interval), [x, R] = (0, l.useSpring)(() => ({
    x: 0,
    y: 0,
    config: T
  })), [M, v] = (0, l.useSpring)(() => ({
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
    v({
      value: g && I ? 1.2 : 1
    })
  }, [I, g, v]);
  let D = n.useCallback(e => {
      A({
        x: e.clientX,
        y: e.clientY
      })
    }, []),
    L = n.useCallback(e => {
      p(!0), D(e)
    }, [D]),
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
        let e = N.current.currentTime / N.current.duration;
        v({
          value: (0, u.default)(1, 1.2, e)
        }), e >= 1 && (!I && v({
          value: 1
        }), O.stop())
      }
    }, [O, I, v]);
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
      src: _,
      ref: N
    }), (0, a.jsx)(l.animated.div, {
      ref: h,
      className: g ? E.containerOwned : void 0,
      style: {
        transform: (0, l.to)([M.value], e => "scale(".concat(e, ")"))
      },
      onMouseEnter: L,
      onMouseLeave: P,
      onMouseMove: D,
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
              count: f
            })
          }), (0, a.jsx)(i.VoiceNormalIcon, {
            className: E.audioIndicator,
            color: o.tokens.colors.INTERACTIVE_NORMAL
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