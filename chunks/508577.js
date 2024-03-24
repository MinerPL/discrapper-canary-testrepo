"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("146606"),
  i = s("882039"),
  r = s("862337"),
  o = s("77078"),
  d = s("4452"),
  u = s("782340"),
  c = s("114602");
let S = l.config.stiff;

function E(e) {
  let {
    image: t,
    name: s,
    sound: E,
    openedCount: T
  } = e, f = T > 0, _ = n.useRef(null), m = n.useRef(null), [g, h] = n.useState(!1), [N, I] = n.useState({
    x: 0,
    y: 0
  }), [p] = n.useState(new r.Interval), [C, A] = (0, l.useSpring)(() => ({
    x: 0,
    y: 0,
    config: S
  })), [O, x] = (0, l.useSpring)(() => ({
    value: 1,
    config: S
  }));
  n.useEffect(() => {
    if (f && g && null != _.current) {
      let e = _.current.getBoundingClientRect(),
        t = N.x - e.x,
        s = N.y - e.y,
        a = e.width / 2,
        n = e.height / 2;
      A({
        x: (t - a) / a * 25,
        y: -((s - n) / n * 25)
      })
    }
  }, [g, f, N.x, N.y, A]), n.useEffect(() => {
    x({
      value: f && g ? 1.2 : 1
    })
  }, [g, f, x]);
  let R = n.useCallback(e => {
      I({
        x: e.clientX,
        y: e.clientY
      })
    }, []),
    M = n.useCallback(e => {
      h(!0), R(e)
    }, [R]),
    D = n.useCallback(() => {
      h(!1), I({
        x: 0,
        y: 0
      }), A({
        x: 0,
        y: 0
      })
    }, [A]),
    v = n.useCallback(() => {
      if (null != m.current) {
        let e = m.current.currentTime / m.current.duration,
          t = (0, d.default)(1, 1.2, e);
        x({
          value: t
        }), e >= 1 && (!g && x({
          value: 1
        }), p.stop())
      }
    }, [p, g, x]);
  n.useEffect(() => {
    null != p._ref && p.start(30, v)
  }, [p, v]);
  let L = n.useCallback(() => {
    null != m.current && (m.current.currentTime = 0, m.current.play(), p.start(30, v))
  }, [p, v]);
  return (0, a.jsxs)(o.Clickable, {
    onClick: f ? L : void 0,
    children: [(0, a.jsx)("audio", {
      src: E,
      ref: m
    }), (0, a.jsx)(l.animated.div, {
      ref: _,
      className: f ? c.containerOwned : void 0,
      style: {
        transform: (0, l.to)([O.value], e => "scale(".concat(e, ")"))
      },
      onMouseEnter: M,
      onMouseLeave: D,
      onMouseMove: R,
      children: (0, a.jsxs)(l.animated.div, {
        className: c.item,
        style: {
          transform: (0, l.to)([C.x, C.y], (e, t) => "rotateY(".concat(e, "deg) rotateX(").concat(t, "deg)"))
        },
        children: [f && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-xxs/bold",
            className: c.count,
            children: u.default.Messages.USER_SETTINGS_PACKAGE_COUNT.format({
              count: T
            })
          }), (0, a.jsx)(i.VoiceNormalIcon, {
            className: c.audioIndicator,
            color: o.tokens.colors.INTERACTIVE_ACTIVE
          })]
        }), (0, a.jsx)(o.Heading, {
          variant: "display-md",
          className: c.imageContainer,
          color: "text-muted",
          children: f ? (0, a.jsx)("img", {
            src: t,
            alt: "",
            className: c.image
          }) : "?"
        }), f && (0, a.jsx)(o.Text, {
          variant: "text-xxs/bold",
          className: c.name,
          children: s
        })]
      })
    })]
  })
}